# Story Dice - 3D Dice Implementation

## Overview

The Story Dice app has been enhanced with **realistic 3D dice** using Three.js. The dice now feature:

- **True 3D rendering** with WebGL
- **Physics-based rolling animations** with gravity, bouncing, and damping
- **Realistic lighting and shadows** for depth perception
- **Smooth tumbling motion** as dice roll and settle
- **Dynamic text rendering** on all six faces of each die

## Features

### Visual Enhancements

1. **3D Dice Cubes**: Each die is rendered as a true 3D cube with six faces
2. **Text on Faces**: All six sides display different story elements from each category
3. **Realistic Materials**: White gradient surface with subtle borders and shadows
4. **Professional Lighting**: Ambient and directional lights create depth and realism
5. **Ground Shadows**: Soft shadows cast on the ground plane enhance the 3D effect

### Animation System

1. **Physics Simulation**:
   - Gravity pulls dice downward
   - Bouncing on ground with realistic restitution
   - Air resistance and damping slow the dice naturally
   - Angular velocity creates tumbling motion

2. **Rolling Behavior**:
   - Random initial velocity and spin for each die
   - Dice bounce and tumble realistically
   - Gradual slowdown until they settle
   - Final snap to stable rotation showing a face

3. **Performance**:
   - 60 FPS animation loop
   - Hardware-accelerated WebGL rendering
   - Efficient shadow mapping
   - Responsive to window resizing

## Technical Implementation

### Architecture

The 3D dice system is implemented in `js/dice-3d.js` with the following components:

1. **Scene Setup**: Three.js scene with camera, renderer, and lights
2. **Dice Creation**: Dynamic texture generation for each face
3. **Physics Engine**: Custom physics simulation for realistic motion
4. **Animation Loop**: RequestAnimationFrame-based rendering

### Key Technologies

- **Three.js v0.160.0**: 3D rendering library
- **WebGL**: Hardware-accelerated graphics
- **Canvas API**: Dynamic texture generation for dice faces
- **RequestAnimationFrame**: Smooth 60 FPS animation

### Integration

The 3D dice system integrates seamlessly with the existing app:

- **State Management**: Uses existing GameState module
- **Dice Engine**: Works with existing DiceEngine for roll logic
- **UI Module**: Updated to render 3D container and handle animations
- **Responsive Design**: Adapts to different screen sizes

## Usage

### Rolling the Dice

1. Select your desired dice categories (Character, Setting, Action, etc.)
2. Click the "Roll Dice" button
3. Watch the dice tumble and bounce in 3D
4. Results appear below once the animation completes

### Dice Display

- The 3D viewport shows all selected dice arranged in a grid
- Each die displays different values on its six faces
- Lighting and shadows create a realistic tabletop appearance
- Camera angle provides optimal viewing of the dice

## Browser Compatibility

The 3D dice feature requires:

- **WebGL support** (available in all modern browsers)
- **JavaScript enabled**
- **Hardware acceleration recommended** for best performance

Tested and working on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- The app uses efficient shadow mapping (2048x2048)
- Physics calculations are optimized for smooth performance
- Textures are generated once and cached
- Animation stops when dice settle to save resources

## Future Enhancements

Potential improvements for the 3D dice system:

1. **Custom Dice Skins**: Different colors and materials
2. **Sound Effects**: Rolling, bouncing, and settling sounds
3. **Advanced Physics**: More realistic collision detection
4. **Camera Controls**: User-controlled viewing angle
5. **Dice Customization**: User-defined face values and images

## Credits

- **Three.js**: 3D rendering framework
- **Original App**: Story Dice PWA
- **3D Enhancement**: Implemented with physics-based animation

---

Enjoy your enhanced 3D storytelling experience!
