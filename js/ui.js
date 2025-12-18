/**
 * UI Module
 * Each die represents a different category
 */

const UI = (() => {
  let isRolling = false;
  let isEditMode = false;
  let dice3DContainer = null;
  let resetTimer = null;  // Timer to reset to 3D after 60 seconds
  const audioContext = (() => {
    try {
      return new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      return null;
    }
  })();

  const playSound = (frequency = 800, duration = 100) => {
    if (!GameState.isSoundEnabled() || !audioContext) return;
    try {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration / 1000);
    } catch (e) {}
  };

  const triggerHaptic = (pattern = 'light') => {
    if (!GameState.isHapticEnabled() || !navigator.vibrate) return;
    const patterns = { light: [10], medium: [20], heavy: [50], success: [50, 100, 50] };
    navigator.vibrate(patterns[pattern] || patterns.light);
  };

  /**
   * Setup 3D dice display
   */
  const setup3DDiceDisplay = () => {
    const allDice = DiceEngine.getAllDice();
    const lastRoll = DiceEngine.getLastRoll();
    
    const diceConfigs = [];
    
    allDice.forEach((die, index) => {
      if (die.isSelected) {
        let targetValue = null;
        
        if (lastRoll && lastRoll.results) {
          const result = lastRoll.results.find(r => r.dieIndex === index);
          if (result) {
            targetValue = { emoji: result.emoji, text: result.text };
          }
        }
        
        diceConfigs.push({
          dieIndex: index,
          values: die.category.values,
          targetValue: targetValue
        });
      }
    });
    
    console.log('setup3DDiceDisplay: diceConfigs.length =', diceConfigs.length);
    console.log('setup3DDiceDisplay: dice3DContainer =', dice3DContainer);
    
    if (diceConfigs.length > 0 && dice3DContainer) {
      console.log('Adding dice to scene...');
      Dice3D.addDice(diceConfigs);
      console.log('Dice added!');
    }
  };

  /**
   * Render the main app
   */
  const render = () => {
    const app = document.getElementById('app');
    const allDice = DiceEngine.getAllDice();
    const selectedCount = DiceEngine.getSelectedCount();
    const lastRoll = DiceEngine.getLastRoll();

    app.innerHTML = `
      <div class="app-container">
        <!-- Header -->
        <header class="app-header">
          <div class="logo">
            <span class="logo-icon">🎲</span>
            <h1>Story Dice</h1>
          </div>
          <div class="header-buttons">
            <button class="icon-button" id="theme-toggle" aria-label="Toggle theme">
              ${document.documentElement.getAttribute('data-theme') === 'light' ? '🌙' : '☀️'}
            </button>
            <button class="icon-button" id="sound-toggle" aria-label="Toggle sound">
              ${GameState.isSoundEnabled() ? '🔊' : '🔇'}
            </button>
          </div>
        </header>

        <!-- Genre Filter -->
        <div class="genre-filter card">
          <h2 class="section-title">Choose Your Genre</h2>
          <p class="section-description">Select a genre to customize your story elements</p>
          <div class="genre-selector">
            <select id="genre-select" class="genre-dropdown">
              ${GENRES.map(genre => `
                <option value="${genre.id}" ${GameState.getCurrentGenre() === genre.id ? 'selected' : ''}>
                  ${genre.icon} ${genre.name}
                </option>
              `).join('')}
            </select>
          </div>
        </div>

        <!-- 3D Dice Display (Large) -->
        <div class="dice-display-3d" id="dice-display-3d">
          <!-- Three.js canvas will be inserted here -->
        </div>
        
        <!-- 2D Results Display (shown after roll) -->
        <div class="dice-results-2d" id="dice-results-2d" style="display: none;">
          <!-- 2D result squares will be inserted here -->
        </div>

        <!-- Roll Button -->
        <div class="roll-section">
          <button class="roll-button" id="roll-button" ${isRolling || selectedCount === 0 ? 'disabled' : ''}>
            <span class="roll-icon">🎲</span>
            <span class="roll-text">${isRolling ? 'Rolling...' : selectedCount === 0 ? 'Select Story Elements' : 'Roll the Dice'}</span>
          </button>
          <button class="reset-button" id="reset-button" style="display: none;">
            <span class="reset-icon">🔄</span>
            <span class="reset-text">Reset View</span>
          </button>
        </div>

        <!-- Dice Selector with Categories -->
        <div class="dice-selector card">
          <div class="dice-selector-header">
            <div>
              <h2 class="section-title">Select Story Elements</h2>
              <p class="section-description">Choose which elements to include in your story</p>
            </div>
            <button class="button-secondary" id="edit-labels-button">
              ✏️ Edit Labels
            </button>
          </div>
          <div class="dice-category-grid">
            ${allDice.map((die, index) => `
              <button 
                class="dice-category-button ${die.isSelected ? 'selected' : ''}" 
                data-index="${index}"
                style="--category-color: ${die.category.color}"
              >
                <div class="dice-number">${index + 1}</div>
                <div class="category-icon">${die.category.icon}</div>
                <div class="category-label">${die.category.name}</div>
                ${die.isSelected ? '<div class="checkmark">✓</div>' : ''}
              </button>
            `).join('')}
          </div>

        </div>

        <!-- Edit Labels Modal -->
        <div class="modal" id="edit-labels-modal">
          <div class="modal-content">
            <div class="modal-header">
              <h2>Edit Dice Labels</h2>
              <button class="modal-close" id="close-modal">&times;</button>
            </div>
            <div class="modal-body">
              <div class="edit-categories-container">
                ${allDice.map((die) => `
                  <div class="edit-category-card" style="border-color: ${die.category.color}">
                    <h4 class="edit-category-name" style="color: ${die.category.color}">
                      ${die.category.icon} ${die.category.name}
                    </h4>
                    <div class="edit-values-grid">
                      ${die.category.values.map((value, valueIndex) => `
                        <div class="edit-value-row">
                          <span class="value-emoji">${value.emoji}</span>
                          <input 
                            type="text" 
                            class="value-input" 
                            data-category="${die.categoryKey}" 
                            data-index="${valueIndex}" 
                            value="${value.text}" 
                            placeholder="${value.text}"
                          />
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="modal-footer">
              <button class="button-secondary" id="reset-labels-button">Reset All to Default</button>
              <button class="button-primary" id="save-labels-button">Save Changes</button>
            </div>
          </div>
        </div>

      </div>
    `;

    setupEventListeners();

    // Initialize 3D dice
    dice3DContainer = document.getElementById('dice-display-3d');
    if (dice3DContainer) {
      Dice3D.initScene(dice3DContainer);
      // Always setup dice on render to ensure they're visible
      if (!isRolling) {
        setup3DDiceDisplay();
      }
    }
  };

  /**
   * Generate a story prompt from results
   */
  const generateStoryPrompt = (results) => {
    const parts = [];
    
    results.forEach(result => {
      switch(result.categoryKey) {
        case 'character':
          parts.push(`A <strong>${result.text}</strong>`);
          break;
        case 'setting':
          parts.push(`in a <strong>${result.text}</strong>`);
          break;
        case 'action':
          parts.push(`on a <strong>${result.text}</strong>`);
          break;
        case 'object':
          parts.push(`with a <strong>${result.text}</strong>`);
          break;
        case 'emotion':
          parts.push(`feeling <strong>${result.text}</strong>`);
          break;
        case 'challenge':
          parts.push(`facing a <strong>${result.text}</strong>`);
          break;
      }
    });
    
    return parts.join(' ') + '.';
  };

  /**
   * Setup event listeners
   */
  const setupEventListeners = () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        playSound(700, 50);
        triggerHaptic('light');
        render();
      });
    }

    // Sound toggle
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        GameState.toggleSound();
        playSound(600, 50);
        render();
      });
    }

    // Genre selector
    const genreSelect = document.getElementById('genre-select');
    if (genreSelect) {
      genreSelect.addEventListener('change', (e) => {
        GameState.setCurrentGenre(e.target.value);
        justRolled = false;  // Reset flag on genre change
        playSound(700, 50);
        triggerHaptic('light');
        render();
      });
    }

    // Edit labels button - open modal
    const editLabelsButton = document.getElementById('edit-labels-button');
    if (editLabelsButton) {
      editLabelsButton.addEventListener('click', () => {
        const modal = document.getElementById('edit-labels-modal');
        if (modal) {
          modal.classList.add('show');
          playSound(700, 50);
        }
      });
    }

    // Close modal button
    const closeModalButton = document.getElementById('close-modal');
    if (closeModalButton) {
      closeModalButton.addEventListener('click', () => {
        const modal = document.getElementById('edit-labels-modal');
        if (modal) {
          modal.classList.remove('show');
        }
      });
    }

    // Save labels button
    const saveLabelsButton = document.getElementById('save-labels-button');
    if (saveLabelsButton) {
      saveLabelsButton.addEventListener('click', () => {
        saveCustomLabels();
        const modal = document.getElementById('edit-labels-modal');
        if (modal) {
          modal.classList.remove('show');
        }
        playSound(800, 100);
        triggerHaptic('success');
        render();
      });
    }

    // Close modal when clicking outside
    const modal = document.getElementById('edit-labels-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('show');
        }
      });
    }

    // Reset labels button
    const resetLabelsButton = document.getElementById('reset-labels-button');
    if (resetLabelsButton) {
      resetLabelsButton.addEventListener('click', () => {
        if (confirm('Reset all custom labels for this genre to default?')) {
          const currentGenre = GameState.getCurrentGenre();
          GameState.resetCustomLabelsForGenre(currentGenre);
          playSound(600, 100);
          render();
        }
      });
    }

    // Roll button
    const rollButton = document.getElementById('roll-button');
    if (rollButton) {
      rollButton.addEventListener('click', performRoll);
    }

    // Reset button
    const resetButton = document.getElementById('reset-button');
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        switchTo3D();
        playSound(600, 50);
        triggerHaptic('light');
      });
    }

    // Dice category buttons
    const diceButtons = document.querySelectorAll('.dice-category-button');
    diceButtons.forEach(button => {
      button.addEventListener('click', () => {
        const index = parseInt(button.dataset.index);
        DiceEngine.toggleDie(index);
        playSound(700, 50);
        triggerHaptic('light');
        render();
      });
    });

    // Edit label inputs - save on change
    const valueInputs = document.querySelectorAll('.value-input');
    valueInputs.forEach(input => {
      input.addEventListener('input', () => {
        const currentGenre = GameState.getCurrentGenre();
        const categoryKey = input.dataset.category;
        const valueIndex = parseInt(input.dataset.index);
        const newLabel = input.value.trim();
        
        if (newLabel) {
          GameState.setCustomDiceLabel(currentGenre, categoryKey, valueIndex, newLabel);
        }
      });
    });
  };

  /**
   * Show 2D results after roll completes
   */
  const show2DResults = () => {
    const dice3D = document.getElementById('dice-display-3d');
    const dice2D = document.getElementById('dice-results-2d');
    const lastRoll = DiceEngine.getLastRoll();
    
    if (!lastRoll || !dice2D) return;
    
    // Hide 3D, show 2D
    if (dice3D) dice3D.style.display = 'none';
    dice2D.style.display = 'flex';
    
    // Show reset button
    const resetButton = document.getElementById('reset-button');
    if (resetButton) resetButton.style.display = 'flex';
    
    // Build 2D result squares - styled like 3D dice cubes
    dice2D.innerHTML = lastRoll.results.map(result => `
      <div class="result-square">
        <div class="result-square-label">
          ${result.categoryName}
        </div>
        <div class="result-square-emoji">${result.emoji}</div>
        <div class="result-square-text">${result.text}</div>
      </div>
    `).join('');
    
    // Set timer to switch back to 3D after 60 seconds
    if (resetTimer) clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      switchTo3D();
    }, 60000);  // 60 seconds
  };
  
  /**
   * Switch back to 3D display
   */
  const switchTo3D = () => {
    const dice3D = document.getElementById('dice-display-3d');
    const dice2D = document.getElementById('dice-results-2d');
    const resetButton = document.getElementById('reset-button');
    
    if (dice3D) dice3D.style.display = 'block';
    if (dice2D) dice2D.style.display = 'none';
    if (resetButton) resetButton.style.display = 'none';
    
    if (resetTimer) {
      clearTimeout(resetTimer);
      resetTimer = null;
    }
  };

  /**
   * Perform dice roll with animation
   */
  const performRoll = async () => {
    if (isRolling || DiceEngine.getSelectedCount() === 0) return;

    // Switch back to 3D before starting new roll
    switchTo3D();
    
    isRolling = true;
    diceAreSet = false;  // Allow dice to be recreated with new values
    render();

    playSound(400, 100);
    triggerHaptic('medium');

    // ✅ CRITICAL: Generate NEW random values BEFORE animation
    const rollResult = DiceEngine.performRoll();
    GameState.setLastRoll(rollResult);

    // ✅ Update 3D dice with NEW values BEFORE animation starts
    setup3DDiceDisplay();

    // ✅ Give the scene time to update textures (500ms delay)
    await new Promise(resolve => setTimeout(resolve, 500));

    // ✅ Now animate with the correct values
    if (Dice3D.isInitialized()) {
      await Dice3D.rollDice();
    }

    // Immediately switch to 2D after animation completes (no delay)
    playSound(800, 150);
    triggerHaptic('success');

    isRolling = false;
    render();
    
    // Switch to 2D results display immediately
    show2DResults();

    // Scroll to results
    setTimeout(() => {
      const resultsSection = document.querySelector('.results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  };

  /**
   * Save custom labels
   */
  const saveCustomLabels = () => {
    const currentGenre = GameState.getCurrentGenre();
    const inputs = document.querySelectorAll('.value-input');
    
    inputs.forEach(input => {
      const categoryKey = input.dataset.category;
      const valueIndex = parseInt(input.dataset.index);
      const newLabel = input.value.trim();
      
      if (newLabel) {
        GameState.setCustomDiceLabel(currentGenre, categoryKey, valueIndex, newLabel);
      }
    });
  };

  /**
   * Initialize the UI
   */
  const init = () => {
    render();
  };

  return {
    init,
    render,
    performRoll
  };
})();
