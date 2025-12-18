# Story Dice - Creative Writing Tool

A modern, interactive storytelling app inspired by Rory's Story Cubes. Roll 9 beautiful 3D dice with emoji symbols to generate creative story prompts!

## Features

### 🎲 Realistic 3D Dice
- **Nine dice** displayed in a 3x3 grid with bird's eye view camera
- **Physics-based animation** with realistic rolling, bouncing, and tumbling
- **Emoji symbols** on each die face for visual storytelling
- **Smooth 60 FPS rendering** using Three.js and WebGL

### 🎨 Five Themed Dice Sets
Each theme contains 9 dice with 54 unique symbols:

- **Classic** - General storytelling for any adventure (🔑 🏰 🌙 🔥 👁️ ❓ and more)
- **Fantasy** - Enchanted adventures in magical realms (🧙 🐉 ⚔️ 🏰 🔮 ✨ and more)
- **Mystery** - Solve puzzles and uncover secrets (🔍 🕵️ 🔐 💀 🗝️ 🎭 and more)
- **Adventure** - Epic journeys and daring quests (⛰️ 🗺️ 🧭 ⛵ 🏹 🎒 and more)
- **Actions** - Verbs and movements to drive your story (🏃 ✍️ 🗣️ 👀 🤝 💭 and more)

### 📖 Story Structure Guide
The app helps you structure your story in three acts:

- **Beginning** (Symbols 1-3) - Set the scene and introduce characters
- **Middle** (Symbols 4-6) - Develop conflict and action
- **End** (Symbols 7-9) - Resolve the story and conclude

### 💡 Interactive Symbol Cards
- Click any symbol card to get creative hints and interpretations
- Large, clear emoji display for easy visibility
- Numbered cards (1-9) to track story progression
- Hover effects for engaging interaction

### 🎯 Modern User Experience
- **Clean, intuitive interface** with card-based design
- **Purple gradient background** for visual appeal
- **Responsive layout** works on desktop, tablet, and mobile
- **Smooth animations** and transitions throughout
- **Accessibility features** including keyboard navigation and reduced motion support

### 📱 Progressive Web App (PWA)
- **Offline support** - works without internet connection
- **Installable** - add to home screen on mobile devices
- **Fast loading** with service worker caching
- **App-like experience** on all platforms

## How to Use

1. **Choose a Theme** - Select from Classic, Fantasy, Mystery, Adventure, or Actions
2. **Roll the Dice** - Click the "Roll the Dice" button to generate 9 random symbols
3. **Watch the Animation** - Enjoy the realistic 3D dice rolling with physics
4. **View Your Symbols** - See your 9 symbols displayed in a beautiful grid
5. **Create Your Story** - Use the symbols as prompts to craft your narrative
   - Beginning: Use symbols 1-3 to start your story
   - Middle: Use symbols 4-6 to develop the plot
   - End: Use symbols 7-9 to conclude your tale
6. **Get Hints** - Click any symbol card for creative interpretation ideas

## Technical Details

### Built With
- **Three.js** - 3D rendering and animation
- **Vanilla JavaScript** - No framework dependencies
- **Modern CSS** - Grid, Flexbox, and custom properties
- **Service Workers** - PWA offline functionality

### Architecture
- **dice-data.js** - Theme and symbol definitions
- **dice-engine.js** - Roll logic and theme management
- **dice-3d.js** - Three.js 3D rendering and physics
- **ui.js** - DOM manipulation and user interactions
- **state.js** - LocalStorage persistence
- **app.js** - Application initialization

### Performance
- Optimized 3D rendering with GPU acceleration
- Efficient physics simulation with damping and collision detection
- Lazy loading and caching for fast startup
- Minimal dependencies for small bundle size

## Installation

### Run Locally
1. Clone or download this repository
2. Start a local web server:
   ```bash
   python3 -m http.server 8080
   ```
3. Open http://localhost:8080 in your browser

### Deploy
Upload all files to any static web hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Or any web server

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with WebGL support

## Credits
Inspired by Rory's Story Cubes, the original storytelling dice game.

## License
Free to use for personal and educational purposes.

---

**Ready to create amazing stories? Roll the dice and let your imagination soar!** 🎲✨
