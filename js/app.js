/**
 * Story Dice PWA - Main Application
 * Premium storytelling dice game
 */

(function() {
  'use strict';

  /**
   * Initialize the application
   */
  const init = () => {
    // Ensure DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }
  };

  /**
   * Main app initialization
   */
  const initApp = async () => {
    console.log('Story Dice PWA initializing...');

    // Initialize theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Initialize UI
    UI.init();

    // Handle app visibility
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        UI.render();
      }
    });

    // Prevent default touch behaviors for better game feel
    document.addEventListener('touchmove', (e) => {
      if (e.target.closest('.roll-button') || e.target.closest('.dice-button') || e.target.closest('.toggle-switch')) {
        e.preventDefault();
      }
    }, { passive: false });

    // Handle keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        const rollButton = document.querySelector('.roll-button');
        if (rollButton && !rollButton.disabled) {
          rollButton.click();
        }
      }
    });

    // Register service worker for PWA functionality
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('./sw.js');
        console.log('Service Worker registered');
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    }

    // Log app info
    console.log('Story Dice PWA v1.0');
    console.log('Ready to roll!');
  };

  // Start the app
  init();
})();
