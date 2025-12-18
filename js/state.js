/**
 * State Management Module
 * Handles persistence of game state to localStorage
 */

const GameState = (() => {
  const STORAGE_KEY = 'story-dice-state';
  const DEFAULT_STATE = {
    currentTheme: 'classic',
    mixedThemes: [],
    currentGenre: 'default',
    customDiceLabels: {}, // Store custom labels per genre and category
    lastRoll: null,
    soundEnabled: true,
    hapticEnabled: true,
    rollHistory: []
  };

  // Initialize state from localStorage or use defaults
  let state = (() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_STATE, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.error('Error loading state from localStorage:', e);
    }
    return { ...DEFAULT_STATE };
  })();

  /**
   * Save current state to localStorage
   */
  const save = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Error saving state to localStorage:', e);
    }
  };

  /**
   * Get current state
   */
  const getState = () => ({ ...state });

  /**
   * Set current theme
   */
  const setCurrentTheme = (themeName) => {
    state.currentTheme = themeName;
    save();
  };

  /**
   * Get current theme
   */
  const getCurrentTheme = () => state.currentTheme;

  /**
   * Set mixed themes
   */
  const setMixedThemes = (themeNames) => {
    state.mixedThemes = themeNames;
    save();
  };

  /**
   * Get mixed themes
   */
  const getMixedThemes = () => [...state.mixedThemes];

  /**
   * Set last roll result
   */
  const setLastRoll = (rollData) => {
    state.lastRoll = rollData;
    state.rollHistory.push({
      ...rollData,
      timestamp: Date.now()
    });
    // Keep only last 50 rolls
    if (state.rollHistory.length > 50) {
      state.rollHistory = state.rollHistory.slice(-50);
    }
    save();
  };

  /**
   * Get last roll
   */
  const getLastRoll = () => state.lastRoll ? { ...state.lastRoll } : null;

  /**
   * Get roll history
   */
  const getRollHistory = () => [...state.rollHistory];

  /**
   * Toggle sound setting
   */
  const toggleSound = () => {
    state.soundEnabled = !state.soundEnabled;
    save();
  };

  /**
   * Get sound setting
   */
  const isSoundEnabled = () => state.soundEnabled;

  /**
   * Toggle haptic setting
   */
  const toggleHaptic = () => {
    state.hapticEnabled = !state.hapticEnabled;
    save();
  };

  /**
   * Get haptic setting
   */
  const isHapticEnabled = () => state.hapticEnabled;

  /**
   * Reset all state to defaults
   */
  const reset = () => {
    state = { ...DEFAULT_STATE };
    save();
  };

  /**
   * Clear roll history
   */
  const clearHistory = () => {
    state.rollHistory = [];
    save();
  };

  /**
   * Set current genre
   */
  const setCurrentGenre = (genreId) => {
    state.currentGenre = genreId;
    save();
  };

  /**
   * Get current genre
   */
  const getCurrentGenre = () => state.currentGenre;

  /**
   * Set custom label for a dice value
   */
  const setCustomDiceLabel = (genreId, categoryKey, valueIndex, newLabel) => {
    if (!state.customDiceLabels[genreId]) {
      state.customDiceLabels[genreId] = {};
    }
    if (!state.customDiceLabels[genreId][categoryKey]) {
      state.customDiceLabels[genreId][categoryKey] = {};
    }
    state.customDiceLabels[genreId][categoryKey][valueIndex] = newLabel;
    save();
  };

  /**
   * Get custom label for a dice value
   */
  const getCustomDiceLabel = (genreId, categoryKey, valueIndex) => {
    return state.customDiceLabels[genreId]?.[categoryKey]?.[valueIndex] || null;
  };

  /**
   * Get all custom labels for current genre
   */
  const getCustomLabelsForGenre = (genreId) => {
    return state.customDiceLabels[genreId] || {};
  };

  /**
   * Reset custom labels for a genre
   */
  const resetCustomLabelsForGenre = (genreId) => {
    if (state.customDiceLabels[genreId]) {
      delete state.customDiceLabels[genreId];
      save();
    }
  };

  return {
    getState,
    setCurrentTheme,
    getCurrentTheme,
    setMixedThemes,
    getMixedThemes,
    setCurrentGenre,
    getCurrentGenre,
    setCustomDiceLabel,
    getCustomDiceLabel,
    getCustomLabelsForGenre,
    resetCustomLabelsForGenre,
    setLastRoll,
    getLastRoll,
    getRollHistory,
    toggleSound,
    isSoundEnabled,
    toggleHaptic,
    isHapticEnabled,
    reset,
    clearHistory
  };
})();
