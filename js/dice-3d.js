/**
 * 3D Dice Renderer Module
 * Handles realistic 3D dice rendering with emoji + text labels
 */

const Dice3D = (() => {
  let scene, camera, renderer;
  let diceObjects = [];
  let isInitialized = false;
  let animationFrameId = null;
  let container = null;
  let clock = new THREE.Clock();

  /**
   * Initialize Three.js scene
   */
  const initScene = (containerElement) => {
    if (isInitialized && container !== containerElement) {
      dispose();
    }
    
    if (isInitialized) {
      return;
    }

    container = containerElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f4f8);

    // Camera - Bird's eye view (adjusted for mobile)
    const isMobile = width < 768;
    const fov = isMobile ? 50 : 45; // Slightly wider FOV on mobile
    const cameraHeight = isMobile ? 11 : 15; // Closer camera for better zoom
    camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 1000);
    camera.position.set(0, cameraHeight, 0);
    camera.lookAt(0, 0, 0);

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 15, 7);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Add ground plane for shadows
    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.2 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    ground.receiveShadow = true;
    scene.add(ground);

    isInitialized = true;
    start();
    window.addEventListener('resize', handleResize);
  };

  /**
   * Create a canvas texture with emoji + text
   */
  const createDiceTexture = (emoji, text) => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(1, '#f8f9fa');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    // Border
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 8;
    ctx.strokeRect(4, 4, 504, 504);

    // Emoji (larger, centered higher)
    ctx.font = '180px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Android Emoji", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, 256, 200);

    // Text label (below emoji)
    ctx.font = 'bold 56px Arial';
    ctx.fillStyle = '#2c3e50';
    ctx.fillText(text, 256, 360);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  };

  /**
   * Create a single die with 6 faces
   */
  const createDice = (values, targetValue) => {
    const size = 2.5; // Larger dice

    // Create materials for each face
    const materials = values.map(value => {
      const texture = createDiceTexture(value.emoji, value.text);
      return new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.3,
        metalness: 0.1
      });
    });

    // Create box geometry
    const geometry = new THREE.BoxGeometry(size, size, size);
    const dice = new THREE.Mesh(geometry, materials);
    dice.castShadow = true;
    dice.receiveShadow = true;

    // Store physics properties
    dice.userData = {
      velocity: new THREE.Vector3(),
      angularVelocity: new THREE.Vector3(),
      targetValue: targetValue,
      values: values,
      isRolling: false
    };

    return dice;
  };

  /**
   * Position dice in a row
   */
  const positionDice = (diceArray) => {
    const count = diceArray.length;
    const isMobile = container && container.clientWidth < 768;
    
    // With 6 dice, always arrange in 2 rows of 3 (3 on top, 3 on bottom)
    if (count === 6) {
      const spacing = isMobile ? 3.2 : 4.0; // Spacing between columns
      const rowSpacing = isMobile ? 3.6 : 4.2; // Spacing between rows
      
      diceArray.forEach((dice, index) => {
        const row = Math.floor(index / 3); // 0 or 1
        const col = index % 3; // 0, 1, or 2
        const x = (col - 1) * spacing; // Center around 0: -spacing, 0, +spacing
        const z = (row - 0.5) * rowSpacing; // Center around 0: -rowSpacing/2, +rowSpacing/2
        dice.position.set(x, 0, z);
      });
    } else if (count === 5) {
      // With 5 dice, arrange in 2 rows: 3 on top, 2 on bottom (centered)
      const spacing = isMobile ? 3.2 : 4.0; // Spacing between columns
      const rowSpacing = isMobile ? 3.6 : 4.2; // Spacing between rows
      
      diceArray.forEach((dice, index) => {
        if (index < 3) {
          // Top row: 3 dice
          const col = index; // 0, 1, or 2
          const x = (col - 1) * spacing; // Center around 0: -spacing, 0, +spacing
          const z = -rowSpacing / 2; // Top row
          dice.position.set(x, 0, z);
        } else {
          // Bottom row: 2 dice (centered)
          const col = index - 3; // 0 or 1
          const x = (col - 0.5) * spacing; // Center around 0: -spacing/2, +spacing/2
          const z = rowSpacing / 2; // Bottom row
          dice.position.set(x, 0, z);
        }
      });
    } else {
      // Single row layout for fewer dice (2, 3, 4)
      const spacing = isMobile ? 3.2 : 4.0; // Increased spacing to prevent touching
      const startX = -(count - 1) * spacing / 2;
      
      diceArray.forEach((dice, index) => {
        dice.position.set(startX + index * spacing, 0, 0);
      });
    }
  };

  /**
   * Clear all dice from scene
   */
  const clearDice = () => {
    diceObjects.forEach(dice => {
      scene.remove(dice);
      dice.geometry.dispose();
      if (Array.isArray(dice.material)) {
        dice.material.forEach(mat => {
          if (mat.map) mat.map.dispose();
          mat.dispose();
        });
      }
    });
    diceObjects = [];
  };

  /**
   * Add dice to the scene
   */
  const addDice = (diceConfigs) => {
    clearDice();

    diceConfigs.forEach(config => {
      const dice = createDice(config.values, config.targetValue);
      diceObjects.push(dice);
      scene.add(dice);
    });

    positionDice(diceObjects);
  };

  /**
   * Start rolling animation
   */
  const startRoll = () => {
    diceObjects.forEach(dice => {
      dice.userData.isRolling = true;
      dice.userData.velocity.set(
        (Math.random() - 0.5) * 0.03,
        0.4 + Math.random() * 0.2,
        (Math.random() - 0.5) * 0.03
      );
      dice.userData.angularVelocity.set(
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4
      );
    });
  };

  /**
   * Update physics simulation
   */
  const updatePhysics = (deltaTime) => {
    const gravity = -0.025;
    const damping = 0.97;
    const angularDamping = 0.94;
    const groundY = -2;
    const restitution = 0.5;

    diceObjects.forEach(dice => {
      if (!dice.userData.isRolling) return;

      // Apply gravity
      dice.userData.velocity.y += gravity;

      // Update position
      dice.position.add(dice.userData.velocity);

      // Update rotation
      dice.rotation.x += dice.userData.angularVelocity.x;
      dice.rotation.y += dice.userData.angularVelocity.y;
      dice.rotation.z += dice.userData.angularVelocity.z;

      // Ground collision
      if (dice.position.y < groundY + 1.25) {
        dice.position.y = groundY + 1.25;
        dice.userData.velocity.y *= -restitution;

        // Apply damping
        dice.userData.velocity.multiplyScalar(damping);
        dice.userData.angularVelocity.multiplyScalar(angularDamping);

        // Stop if velocity is very low
        if (Math.abs(dice.userData.velocity.y) < 0.01 &&
          dice.userData.angularVelocity.length() < 0.05) {
          dice.userData.isRolling = false;
          dice.userData.velocity.set(0, 0, 0);
          dice.userData.angularVelocity.set(0, 0, 0);
          snapToFinalRotation(dice);
        }
      }

      // Air resistance
      dice.userData.velocity.multiplyScalar(0.995);
      dice.userData.angularVelocity.multiplyScalar(0.99);
    });
  };

  /**
   * Snap dice to show the target value face
   * Forces the dice to land on the pre-determined random result
   */
  const snapToFinalRotation = (dice) => {
    if (!dice.userData.targetValue || !dice.userData.values) {
      // Fallback to random stable face if no target
      const snapAngle = Math.PI / 2;
      dice.rotation.x = Math.round(dice.rotation.x / snapAngle) * snapAngle;
      dice.rotation.y = Math.round(dice.rotation.y / snapAngle) * snapAngle;
      dice.rotation.z = Math.round(dice.rotation.z / snapAngle) * snapAngle;
      return;
    }

    // Find which face index matches the target value
    const targetIndex = dice.userData.values.findIndex(
      v => v.text === dice.userData.targetValue.text
    );

    if (targetIndex === -1) {
      console.warn('Target value not found in dice faces');
      return;
    }

    // Set rotation to show the target face on top
    // Face mapping: 0=front, 1=back, 2=top, 3=bottom, 4=right, 5=left
    const faceRotations = [
      { x: 0, y: 0, z: 0 },                    // Face 0: front
      { x: 0, y: Math.PI, z: 0 },              // Face 1: back
      { x: -Math.PI / 2, y: 0, z: 0 },         // Face 2: top
      { x: Math.PI / 2, y: 0, z: 0 },          // Face 3: bottom
      { x: 0, y: Math.PI / 2, z: 0 },          // Face 4: right
      { x: 0, y: -Math.PI / 2, z: 0 }          // Face 5: left
    ];

    const rotation = faceRotations[targetIndex];
    dice.rotation.x = rotation.x;
    dice.rotation.y = rotation.y;
    dice.rotation.z = rotation.z;
  };

  /**
   * Check if all dice have stopped rolling
   */
  const isRollingComplete = () => {
    return diceObjects.every(dice => !dice.userData.isRolling);
  };

  /**
   * Roll dice with animation (returns promise)
   */
  const rollDice = () => {
    return new Promise((resolve) => {
      startRoll();
      
      const checkComplete = setInterval(() => {
        if (isRollingComplete()) {
          clearInterval(checkComplete);
          resolve();
        }
      }, 100);
    });
  };

  /**
   * Animation loop
   */
  const animate = () => {
    if (!isInitialized) return;

    animationFrameId = requestAnimationFrame(animate);

    const deltaTime = clock.getDelta();
    updatePhysics(deltaTime);
    renderer.render(scene, camera);
  };

  /**
   * Handle window resize
   */
  const handleResize = () => {
    if (!isInitialized || !container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  /**
   * Start the renderer
   */
  const start = () => {
    if (animationFrameId === null) {
      animate();
    }
  };

  /**
   * Stop the renderer
   */
  const stop = () => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  };

  /**
   * Cleanup
   */
  const dispose = () => {
    stop();
    clearDice();
    if (renderer) {
      renderer.dispose();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    }
    scene = null;
    camera = null;
    renderer = null;
    container = null;
    isInitialized = false;
  };

  return {
    initScene,
    addDice,
    rollDice,
    startRoll,
    isRollingComplete,
    isInitialized: () => isInitialized,
    start,
    stop,
    dispose,
    handleResize
  };
})();
