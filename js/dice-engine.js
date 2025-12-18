/**
 * Dice Engine Module
 * Each die represents a different category
 */

const DiceEngine = (() => {
  // Each die is permanently assigned to a category
  const diceCategories = [
    'character',  // Die 1
    'setting',    // Die 2
    'action',     // Die 3
    'object',     // Die 4
    'emotion',    // Die 5
    'challenge'   // Die 6
  ];

  let selectedDice = [true, true, true, false, false, false]; // First 3 selected by default
  let lastRoll = null;

  /**
   * Get current dice data based on selected genre
   */
  const getCurrentDiceData = () => {
    const currentGenre = GameState.getCurrentGenre();
    return GENRE_DICE_DATA[currentGenre] || GENRE_DICE_DATA['fantasy'];
  };

  /**
   * Apply custom labels to dice data
   */
  const applyCustomLabels = (diceData) => {
    const currentGenre = GameState.getCurrentGenre();
    const customLabels = GameState.getCustomLabelsForGenre(currentGenre);
    
    const customizedData = {};
    
    for (const categoryKey in diceData) {
      customizedData[categoryKey] = {
        ...diceData[categoryKey],
        values: diceData[categoryKey].values.map((value, index) => {
          const customLabel = customLabels[categoryKey]?.[index];
          return customLabel ? { ...value, text: customLabel } : value;
        })
      };
    }
    
    return customizedData;
  };

  /**
   * Get all dice with their assigned categories
   */
  const getAllDice = () => {
    const diceData = getCurrentDiceData();
    const customizedData = applyCustomLabels(diceData);
    return diceCategories.map((categoryKey, index) => ({
      index,
      categoryKey,
      category: customizedData[categoryKey],
      isSelected: selectedDice[index]
    }));
  };

  /**
   * Toggle a die selection
   */
  const toggleDie = (index) => {
    if (index >= 0 && index < 6) {
      selectedDice[index] = !selectedDice[index];
    }
  };

  /**
   * Get selected dice
   */
  const getSelectedDice = () => {
    return [...selectedDice];
  };

  /**
   * Get number of selected dice
   */
  const getSelectedCount = () => {
    return selectedDice.filter(Boolean).length;
  };

  /**
   * Get a cryptographically secure random number
   * ✅ Uses crypto.getRandomValues() for true randomness
   */
  const getSecureRandom = (max) => {
    if (!window.crypto || !window.crypto.getRandomValues) {
      // Fallback only if crypto API unavailable
      return Math.floor(Math.random() * max);
    }
    
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    
    // ✅ Proper modulo operation for uniform distribution
    return array[0] % max;
  };

  /**
   * Perform a roll
   * ✅ Generates fresh random values on EVERY call
   */
  const performRoll = () => {
    const results = [];
    const diceData = getCurrentDiceData();
    const customizedData = applyCustomLabels(diceData);
    
    // ✅ Add timestamp nonce to force state change
    const rollNonce = Date.now() + Math.random();

    selectedDice.forEach((isSelected, index) => {
      if (isSelected) {
        const categoryKey = diceCategories[index];
        const category = customizedData[categoryKey];
        const availableValues = category.values.length;
        
        // ✅ PURE RANDOMNESS - Generate fresh random index every time
        // No duplicate avoidance - let true randomness decide
        const randomIndex = getSecureRandom(availableValues);
        const value = category.values[randomIndex];
        
        results.push({
          dieIndex: index,
          categoryKey: categoryKey,
          categoryName: category.name,
          categoryIcon: category.icon,
          categoryColor: category.color,
          emoji: value.emoji,
          text: value.text
        });
      }
    });

    // ✅ Create new roll object with nonce to prevent state reuse
    lastRoll = {
      results: results,
      timestamp: Date.now(),
      rollNonce: rollNonce  // ✅ Forces state change even if values identical
    };

    return lastRoll;
  };

  /**
   * Get last roll
   */
  const getLastRoll = () => {
    return lastRoll;
  };

  /**
   * Get category for a specific die
   */
  const getCategoryForDie = (dieIndex) => {
    const diceData = getCurrentDiceData();
    const customizedData = applyCustomLabels(diceData);
    const categoryKey = diceCategories[dieIndex];
    return customizedData[categoryKey];
  };

  return {
    getAllDice,
    toggleDie,
    getSelectedDice,
    getSelectedCount,
    performRoll,
    getLastRoll,
    getCategoryForDie
  };
})();
