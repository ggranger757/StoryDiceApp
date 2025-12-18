/**
 * Dice Data - Categories and Values
 * Each category has 6 values with emoji and text
 */

const DICE_CATEGORIES = {
  character: {
    name: "Character",
    color: "#FF6B35",
    icon: "👤",
    values: [
      { emoji: "🦸", text: "Hero" },
      { emoji: "🦹", text: "Villain" },
      { emoji: "🧙", text: "Wizard" },
      { emoji: "👑", text: "Royalty" },
      { emoji: "🥷", text: "Rogue" },
      { emoji: "🧝", text: "Elf" }
    ]
  },
  
  setting: {
    name: "Setting",
    color: "#4ECDC4",
    icon: "🗺️",
    values: [
      { emoji: "🏰", text: "Castle" },
      { emoji: "🌲", text: "Forest" },
      { emoji: "🏙️", text: "City" },
      { emoji: "🏔️", text: "Mountain" },
      { emoji: "🏖️", text: "Beach" },
      { emoji: "🌋", text: "Volcano" }
    ]
  },
  
  action: {
    name: "Action",
    color: "#9B59B6",
    icon: "⚡",
    values: [
      { emoji: "⚔️", text: "Battle" },
      { emoji: "🔍", text: "Search" },
      { emoji: "🏃", text: "Escape" },
      { emoji: "💬", text: "Negotiate" },
      { emoji: "🎯", text: "Quest" },
      { emoji: "🤝", text: "Alliance" }
    ]
  },
  
  object: {
    name: "Object",
    color: "#F39C12",
    icon: "📦",
    values: [
      { emoji: "⚔️", text: "Sword" },
      { emoji: "📜", text: "Scroll" },
      { emoji: "💎", text: "Gem" },
      { emoji: "🗝️", text: "Key" },
      { emoji: "🧪", text: "Potion" },
      { emoji: "📖", text: "Book" }
    ]
  },
  
  emotion: {
    name: "Emotion",
    color: "#E74C3C",
    icon: "❤️",
    values: [
      { emoji: "😊", text: "Joy" },
      { emoji: "😢", text: "Sadness" },
      { emoji: "😠", text: "Anger" },
      { emoji: "😨", text: "Fear" },
      { emoji: "😍", text: "Love" },
      { emoji: "😲", text: "Surprise" }
    ]
  },
  
  challenge: {
    name: "Challenge",
    color: "#2ECC71",
    icon: "🎲",
    values: [
      { emoji: "🐉", text: "Dragon" },
      { emoji: "🌊", text: "Storm" },
      { emoji: "🔥", text: "Fire" },
      { emoji: "❄️", text: "Ice" },
      { emoji: "⚡", text: "Lightning" },
      { emoji: "🌪️", text: "Tornado" }
    ]
  }
};
