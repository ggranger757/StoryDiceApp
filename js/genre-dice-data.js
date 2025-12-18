/**
 * Genre-Specific Dice Data
 * Streamlined with 24 distinct genres - no overlaps
 */

const GENRE_DICE_DATA = {
  // Default/Fantasy
  'fantasy': {
    character: {
      name: "Character",
      color: "#FF6B35",
      icon: "👤",
      values: [
        { emoji: "🦸🏿", text: "Hero" },
        { emoji: "🦹", text: "Villain" },
        { emoji: "🧙🏽", text: "Wizard" },
        { emoji: "👑", text: "Royalty" },
        { emoji: "🥷🏿", text: "Rogue" },
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
  },

  // Science Fiction
  'scifi': {
    character: {
      name: "Character",
      color: "#00D9FF",
      icon: "👽",
      values: [
        { emoji: "👽", text: "Alien" },
        { emoji: "🤖", text: "Robot" },
        { emoji: "👨🏿‍🚀", text: "Astronaut" },
        { emoji: "🧬", text: "Clone" },
        { emoji: "🦾", text: "Cyborg" },
        { emoji: "🧑🏾‍🔬", text: "Scientist" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#4ECDC4",
      icon: "🌌",
      values: [
        { emoji: "🚀", text: "Spaceship" },
        { emoji: "🌌", text: "Galaxy" },
        { emoji: "🪐", text: "Planet" },
        { emoji: "🏙️", text: "Megacity" },
        { emoji: "🛸", text: "Station" },
        { emoji: "🌑", text: "Moon Base" }
      ]
    },
    action: {
      name: "Action",
      color: "#9B59B6",
      icon: "⚡",
      values: [
        { emoji: "🚀", text: "Launch" },
        { emoji: "🔬", text: "Experiment" },
        { emoji: "🛸", text: "Encounter" },
        { emoji: "💥", text: "Explode" },
        { emoji: "🔧", text: "Repair" },
        { emoji: "📡", text: "Signal" }
      ]
    },
    object: {
      name: "Object",
      color: "#F39C12",
      icon: "🔧",
      values: [
        { emoji: "🔫", text: "Blaster" },
        { emoji: "💊", text: "Serum" },
        { emoji: "📱", text: "Device" },
        { emoji: "🧬", text: "DNA Sample" },
        { emoji: "⚡", text: "Energy Core" },
        { emoji: "🛡️", text: "Shield" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#E74C3C",
      icon: "💫",
      values: [
        { emoji: "🤔", text: "Curiosity" },
        { emoji: "😰", text: "Anxiety" },
        { emoji: "😎", text: "Confidence" },
        { emoji: "😱", text: "Terror" },
        { emoji: "🤯", text: "Awe" },
        { emoji: "😤", text: "Determination" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#2ECC71",
      icon: "⚠️",
      values: [
        { emoji: "⚠️", text: "Malfunction" },
        { emoji: "👾", text: "Invasion" },
        { emoji: "🌌", text: "Black Hole" },
        { emoji: "☄️", text: "Asteroid" },
        { emoji: "🦠", text: "Virus" },
        { emoji: "🤖", text: "AI Revolt" }
      ]
    }
  },

  // Mystery
  'mystery': {
    character: {
      name: "Character",
      color: "#8B4513",
      icon: "🕵️",
      values: [
        { emoji: "🕵🏽", text: "Detective" },
        { emoji: "👮🏿", text: "Officer" },
        { emoji: "🦹", text: "Suspect" },
        { emoji: "👤", text: "Witness" },
        { emoji: "🧑🏾‍⚖️", text: "Lawyer" },
        { emoji: "🕴️", text: "Agent" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#4ECDC4",
      icon: "🏛️",
      values: [
        { emoji: "🏛️", text: "Mansion" },
        { emoji: "🏢", text: "Office" },
        { emoji: "🚂", text: "Train" },
        { emoji: "🏨", text: "Hotel" },
        { emoji: "🌃", text: "Alley" },
        { emoji: "🏛️", text: "Library" }
      ]
    },
    action: {
      name: "Action",
      color: "#9B59B6",
      icon: "🔍",
      values: [
        { emoji: "🔍", text: "Investigate" },
        { emoji: "🗣️", text: "Interrogate" },
        { emoji: "📸", text: "Photograph" },
        { emoji: "🔓", text: "Unlock" },
        { emoji: "🏃", text: "Chase" },
        { emoji: "📝", text: "Document" }
      ]
    },
    object: {
      name: "Object",
      color: "#F39C12",
      icon: "🔎",
      values: [
        { emoji: "🔪", text: "Weapon" },
        { emoji: "💌", text: "Letter" },
        { emoji: "🗝️", text: "Key" },
        { emoji: "📱", text: "Phone" },
        { emoji: "💍", text: "Jewelry" },
        { emoji: "📄", text: "Document" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#E74C3C",
      icon: "🤔",
      values: [
        { emoji: "🤔", text: "Suspicion" },
        { emoji: "😰", text: "Anxiety" },
        { emoji: "😲", text: "Shock" },
        { emoji: "🤨", text: "Doubt" },
        { emoji: "😤", text: "Frustration" },
        { emoji: "😌", text: "Relief" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#2ECC71",
      icon: "❓",
      values: [
        { emoji: "❓", text: "Riddle" },
        { emoji: "🚪", text: "Locked Door" },
        { emoji: "⏰", text: "Time Limit" },
        { emoji: "🤥", text: "Liar" },
        { emoji: "🌫️", text: "Red Herring" },
        { emoji: "💀", text: "Danger" }
      ]
    }
  },

  // Romance
  'romance': {
    character: {
      name: "Character",
      color: "#FF69B4",
      icon: "💕",
      values: [
        { emoji: "💑", text: "Lover" },
        { emoji: "💔", text: "Ex" },
        { emoji: "👫", text: "Friend" },
        { emoji: "💍", text: "Fiancé" },
        { emoji: "🤵", text: "Suitor" },
        { emoji: "👰", text: "Bride" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#FFB6C1",
      icon: "🌹",
      values: [
        { emoji: "☕", text: "Café" },
        { emoji: "🏖️", text: "Beach" },
        { emoji: "🏙️", text: "City" },
        { emoji: "🌃", text: "Rooftop" },
        { emoji: "🎭", text: "Theater" },
        { emoji: "🌺", text: "Garden" }
      ]
    },
    action: {
      name: "Action",
      color: "#FF1493",
      icon: "💖",
      values: [
        { emoji: "💋", text: "Kiss" },
        { emoji: "💬", text: "Confess" },
        { emoji: "💔", text: "Breakup" },
        { emoji: "🤝", text: "Reconcile" },
        { emoji: "💃", text: "Dance" },
        { emoji: "🎁", text: "Gift" }
      ]
    },
    object: {
      name: "Object",
      color: "#FF69B4",
      icon: "💝",
      values: [
        { emoji: "💌", text: "Letter" },
        { emoji: "🌹", text: "Rose" },
        { emoji: "💍", text: "Ring" },
        { emoji: "📱", text: "Phone" },
        { emoji: "📸", text: "Photo" },
        { emoji: "🎵", text: "Song" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#FF1493",
      icon: "❤️",
      values: [
        { emoji: "😍", text: "Passion" },
        { emoji: "💔", text: "Heartbreak" },
        { emoji: "😊", text: "Joy" },
        { emoji: "😳", text: "Butterflies" },
        { emoji: "😢", text: "Longing" },
        { emoji: "😤", text: "Jealousy" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#C71585",
      icon: "💔",
      values: [
        { emoji: "🤐", text: "Secret" },
        { emoji: "🚧", text: "Distance" },
        { emoji: "👨‍👩‍👧", text: "Family" },
        { emoji: "🤥", text: "Misunderstanding" },
        { emoji: "💼", text: "Career" },
        { emoji: "⏰", text: "Timing" }
      ]
    }
  },

  // Horror
  'horror': {
    character: {
      name: "Character",
      color: "#8B0000",
      icon: "👻",
      values: [
        { emoji: "👻", text: "Ghost" },
        { emoji: "🧟", text: "Zombie" },
        { emoji: "🧛", text: "Vampire" },
        { emoji: "😱", text: "Victim" },
        { emoji: "🔪", text: "Killer" },
        { emoji: "👹", text: "Demon" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#2C2C2C",
      icon: "🏚️",
      values: [
        { emoji: "🏚️", text: "Haunted House" },
        { emoji: "⚰️", text: "Graveyard" },
        { emoji: "🌲", text: "Dark Forest" },
        { emoji: "🏥", text: "Asylum" },
        { emoji: "⛪", text: "Church" },
        { emoji: "🏚️", text: "Basement" }
      ]
    },
    action: {
      name: "Action",
      color: "#8B0000",
      icon: "😱",
      values: [
        { emoji: "👻", text: "Haunt" },
        { emoji: "🏃", text: "Flee" },
        { emoji: "🔪", text: "Attack" },
        { emoji: "😱", text: "Scream" },
        { emoji: "🕯️", text: "Ritual" },
        { emoji: "🚪", text: "Trap" }
      ]
    },
    object: {
      name: "Object",
      color: "#8B0000",
      icon: "🔪",
      values: [
        { emoji: "🔪", text: "Knife" },
        { emoji: "🪆", text: "Doll" },
        { emoji: "📖", text: "Cursed Book" },
        { emoji: "🕯️", text: "Candle" },
        { emoji: "💀", text: "Skull" },
        { emoji: "🪞", text: "Mirror" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#8B0000",
      icon: "😨",
      values: [
        { emoji: "😱", text: "Terror" },
        { emoji: "😰", text: "Dread" },
        { emoji: "😨", text: "Fear" },
        { emoji: "🤢", text: "Disgust" },
        { emoji: "😵", text: "Panic" },
        { emoji: "😶", text: "Numbness" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "💀",
      values: [
        { emoji: "💀", text: "Death" },
        { emoji: "🌑", text: "Darkness" },
        { emoji: "🩸", text: "Blood" },
        { emoji: "👁️", text: "Watching" },
        { emoji: "🔇", text: "Silence" },
        { emoji: "🕳️", text: "Unknown" }
      ]
    }
  },

  // Thriller
  'thriller': {
    character: {
      name: "Character",
      color: "#DC143C",
      icon: "🕵️",
      values: [
        { emoji: "🕵️", text: "Spy" },
        { emoji: "🦹", text: "Assassin" },
        { emoji: "👤", text: "Target" },
        { emoji: "🕴️", text: "Agent" },
        { emoji: "🤵", text: "Operative" },
        { emoji: "😈", text: "Mastermind" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#2F4F4F",
      icon: "🌃",
      values: [
        { emoji: "🏙️", text: "Rooftop" },
        { emoji: "✈️", text: "Plane" },
        { emoji: "🚗", text: "Highway" },
        { emoji: "🏢", text: "Skyscraper" },
        { emoji: "🚇", text: "Subway" },
        { emoji: "🏛️", text: "Embassy" }
      ]
    },
    action: {
      name: "Action",
      color: "#DC143C",
      icon: "💥",
      values: [
        { emoji: "🏃", text: "Chase" },
        { emoji: "💥", text: "Explode" },
        { emoji: "🔫", text: "Shoot" },
        { emoji: "🕵️", text: "Spy" },
        { emoji: "🤐", text: "Betray" },
        { emoji: "💣", text: "Defuse" }
      ]
    },
    object: {
      name: "Object",
      color: "#8B0000",
      icon: "💼",
      values: [
        { emoji: "💼", text: "Briefcase" },
        { emoji: "🔫", text: "Gun" },
        { emoji: "💣", text: "Bomb" },
        { emoji: "📱", text: "Burner Phone" },
        { emoji: "💾", text: "Data" },
        { emoji: "💉", text: "Poison" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#DC143C",
      icon: "😰",
      values: [
        { emoji: "😰", text: "Tension" },
        { emoji: "😤", text: "Determination" },
        { emoji: "😱", text: "Panic" },
        { emoji: "🤨", text: "Suspicion" },
        { emoji: "😎", text: "Cool" },
        { emoji: "😨", text: "Paranoia" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "⏰",
      values: [
        { emoji: "⏰", text: "Countdown" },
        { emoji: "🤐", text: "Betrayal" },
        { emoji: "🚨", text: "Alarm" },
        { emoji: "🎭", text: "Disguise" },
        { emoji: "🔒", text: "Locked" },
        { emoji: "🌐", text: "Conspiracy" }
      ]
    }
  },

  // Adventure
  'adventure': {
    character: {
      name: "Character",
      color: "#FF8C00",
      icon: "🧭",
      values: [
        { emoji: "🧗", text: "Explorer" },
        { emoji: "🏴‍☠️", text: "Pirate" },
        { emoji: "🤠", text: "Cowboy" },
        { emoji: "🧑🏽‍✈️", text: "Pilot" },
        { emoji: "🏹", text: "Hunter" },
        { emoji: "⛵", text: "Sailor" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#228B22",
      icon: "🗺️",
      values: [
        { emoji: "🏝️", text: "Island" },
        { emoji: "🏔️", text: "Mountain" },
        { emoji: "🏜️", text: "Desert" },
        { emoji: "🌊", text: "Ocean" },
        { emoji: "🌴", text: "Jungle" },
        { emoji: "❄️", text: "Arctic" }
      ]
    },
    action: {
      name: "Action",
      color: "#FF8C00",
      icon: "🧗",
      values: [
        { emoji: "🧗", text: "Climb" },
        { emoji: "🏊", text: "Swim" },
        { emoji: "🏃", text: "Run" },
        { emoji: "🗺️", text: "Navigate" },
        { emoji: "⚓", text: "Sail" },
        { emoji: "🔥", text: "Survive" }
      ]
    },
    object: {
      name: "Object",
      color: "#8B4513",
      icon: "🧭",
      values: [
        { emoji: "🧭", text: "Compass" },
        { emoji: "🗺️", text: "Map" },
        { emoji: "🔦", text: "Torch" },
        { emoji: "🪓", text: "Axe" },
        { emoji: "🎒", text: "Backpack" },
        { emoji: "🏹", text: "Bow" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#FF8C00",
      icon: "😃",
      values: [
        { emoji: "😃", text: "Excitement" },
        { emoji: "😰", text: "Fear" },
        { emoji: "🤩", text: "Wonder" },
        { emoji: "😤", text: "Courage" },
        { emoji: "😅", text: "Relief" },
        { emoji: "🤔", text: "Curiosity" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "⚠️",
      values: [
        { emoji: "🌊", text: "Rapids" },
        { emoji: "🐻", text: "Wild Beast" },
        { emoji: "⛈️", text: "Storm" },
        { emoji: "🏔️", text: "Avalanche" },
        { emoji: "🌋", text: "Eruption" },
        { emoji: "🕳️", text: "Pit" }
      ]
    }
  },

  // Action
  'action': {
    character: {
      name: "Character",
      color: "#FF4500",
      icon: "💥",
      values: [
        { emoji: "🦸", text: "Hero" },
        { emoji: "🥷", text: "Ninja" },
        { emoji: "👮", text: "Cop" },
        { emoji: "🪖", text: "Soldier" },
        { emoji: "🤺", text: "Fighter" },
        { emoji: "🦹", text: "Mercenary" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#696969",
      icon: "🏙️",
      values: [
        { emoji: "🏙️", text: "City Street" },
        { emoji: "🏗️", text: "Construction" },
        { emoji: "🏟️", text: "Arena" },
        { emoji: "🚁", text: "Helicopter" },
        { emoji: "🏭", text: "Factory" },
        { emoji: "🌉", text: "Bridge" }
      ]
    },
    action: {
      name: "Action",
      color: "#FF4500",
      icon: "💥",
      values: [
        { emoji: "👊", text: "Punch" },
        { emoji: "🦵", text: "Kick" },
        { emoji: "💥", text: "Explode" },
        { emoji: "🏃", text: "Sprint" },
        { emoji: "🤸", text: "Flip" },
        { emoji: "🔫", text: "Shoot" }
      ]
    },
    object: {
      name: "Object",
      color: "#8B4513",
      icon: "⚔️",
      values: [
        { emoji: "⚔️", text: "Sword" },
        { emoji: "🔫", text: "Gun" },
        { emoji: "💣", text: "Grenade" },
        { emoji: "🛡️", text: "Shield" },
        { emoji: "🪃", text: "Boomerang" },
        { emoji: "🧨", text: "Dynamite" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#FF4500",
      icon: "😤",
      values: [
        { emoji: "😤", text: "Rage" },
        { emoji: "😎", text: "Confidence" },
        { emoji: "😰", text: "Adrenaline" },
        { emoji: "🤬", text: "Fury" },
        { emoji: "💪", text: "Power" },
        { emoji: "😈", text: "Vengeance" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "💥",
      values: [
        { emoji: "🔥", text: "Explosion" },
        { emoji: "🚁", text: "Chase" },
        { emoji: "⚡", text: "Ambush" },
        { emoji: "🏗️", text: "Collapse" },
        { emoji: "💣", text: "Trap" },
        { emoji: "🦹", text: "Boss Fight" }
      ]
    }
  },

  // Drama
  'drama': {
    character: {
      name: "Character",
      color: "#8B008B",
      icon: "🎭",
      values: [
        { emoji: "👨‍👩‍👧", text: "Family" },
        { emoji: "👫", text: "Friends" },
        { emoji: "💼", text: "Colleague" },
        { emoji: "🤵", text: "Rival" },
        { emoji: "👨‍⚖️", text: "Judge" },
        { emoji: "🧑🏿‍🎓", text: "Student" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#4B0082",
      icon: "🏠",
      values: [
        { emoji: "🏠", text: "Home" },
        { emoji: "🏢", text: "Office" },
        { emoji: "🏫", text: "School" },
        { emoji: "⚖️", text: "Courtroom" },
        { emoji: "🏥", text: "Hospital" },
        { emoji: "☕", text: "Café" }
      ]
    },
    action: {
      name: "Action",
      color: "#8B008B",
      icon: "💬",
      values: [
        { emoji: "💬", text: "Argue" },
        { emoji: "😢", text: "Cry" },
        { emoji: "🤝", text: "Forgive" },
        { emoji: "📞", text: "Call" },
        { emoji: "💔", text: "Leave" },
        { emoji: "🗣️", text: "Confess" }
      ]
    },
    object: {
      name: "Object",
      color: "#8B008B",
      icon: "📄",
      values: [
        { emoji: "💌", text: "Letter" },
        { emoji: "📱", text: "Phone" },
        { emoji: "📄", text: "Contract" },
        { emoji: "💍", text: "Ring" },
        { emoji: "📸", text: "Photo" },
        { emoji: "🎁", text: "Gift" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#8B008B",
      icon: "😢",
      values: [
        { emoji: "😢", text: "Sadness" },
        { emoji: "😠", text: "Anger" },
        { emoji: "😌", text: "Peace" },
        { emoji: "😔", text: "Regret" },
        { emoji: "😊", text: "Hope" },
        { emoji: "😤", text: "Resentment" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "💔",
      values: [
        { emoji: "💔", text: "Betrayal" },
        { emoji: "🤐", text: "Secret" },
        { emoji: "⚖️", text: "Justice" },
        { emoji: "💸", text: "Money" },
        { emoji: "🏥", text: "Illness" },
        { emoji: "🤥", text: "Lie" }
      ]
    }
  },

  // Comedy
  'comedy': {
    character: {
      name: "Character",
      color: "#FFD700",
      icon: "😂",
      values: [
        { emoji: "🤡", text: "Clown" },
        { emoji: "🤪", text: "Goofball" },
        { emoji: "😎", text: "Cool Guy" },
        { emoji: "🤓", text: "Nerd" },
        { emoji: "👴", text: "Grandpa" },
        { emoji: "🐶", text: "Pet" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#FFA500",
      icon: "🎪",
      values: [
        { emoji: "🎪", text: "Circus" },
        { emoji: "🏠", text: "Home" },
        { emoji: "🏢", text: "Office" },
        { emoji: "🎉", text: "Party" },
        { emoji: "🏖️", text: "Vacation" },
        { emoji: "🎭", text: "Theater" }
      ]
    },
    action: {
      name: "Action",
      color: "#FFD700",
      icon: "😂",
      values: [
        { emoji: "🤣", text: "Laugh" },
        { emoji: "🙃", text: "Prank" },
        { emoji: "🤦", text: "Facepalm" },
        { emoji: "🕺", text: "Dance" },
        { emoji: "🤸", text: "Fall" },
        { emoji: "😜", text: "Joke" }
      ]
    },
    object: {
      name: "Object",
      color: "#FFA500",
      icon: "🎈",
      values: [
        { emoji: "🎈", text: "Balloon" },
        { emoji: "🍌", text: "Banana Peel" },
        { emoji: "🎂", text: "Cake" },
        { emoji: "🎁", text: "Gift" },
        { emoji: "🎪", text: "Props" },
        { emoji: "📱", text: "Phone" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#FFD700",
      icon: "😄",
      values: [
        { emoji: "😂", text: "Hilarity" },
        { emoji: "😄", text: "Joy" },
        { emoji: "😅", text: "Embarrassment" },
        { emoji: "🤪", text: "Silliness" },
        { emoji: "😆", text: "Amusement" },
        { emoji: "😊", text: "Delight" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#FF6347",
      icon: "🤦",
      values: [
        { emoji: "🤦", text: "Mishap" },
        { emoji: "🙃", text: "Confusion" },
        { emoji: "😬", text: "Awkward" },
        { emoji: "🤷", text: "Misunderstanding" },
        { emoji: "💩", text: "Mess" },
        { emoji: "🎭", text: "Mix-up" }
      ]
    }
  },

  // Dystopian
  'dystopian': {
    character: {
      name: "Character",
      color: "#696969",
      icon: "⚠️",
      values: [
        { emoji: "🦹", text: "Rebel" },
        { emoji: "👮", text: "Enforcer" },
        { emoji: "🤖", text: "Drone" },
        { emoji: "👤", text: "Citizen" },
        { emoji: "👑", text: "Dictator" },
        { emoji: "🧑‍🔬", text: "Scientist" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#2F4F4F",
      icon: "🏙️",
      values: [
        { emoji: "🏙️", text: "Megacity" },
        { emoji: "🏭", text: "Factory" },
        { emoji: "🏚️", text: "Ruins" },
        { emoji: "🚇", text: "Underground" },
        { emoji: "🏢", text: "Tower" },
        { emoji: "🌫️", text: "Wasteland" }
      ]
    },
    action: {
      name: "Action",
      color: "#8B0000",
      icon: "⚡",
      values: [
        { emoji: "✊", text: "Revolt" },
        { emoji: "🏃", text: "Escape" },
        { emoji: "🔓", text: "Hack" },
        { emoji: "📡", text: "Broadcast" },
        { emoji: "💥", text: "Sabotage" },
        { emoji: "🤐", text: "Hide" }
      ]
    },
    object: {
      name: "Object",
      color: "#696969",
      icon: "📱",
      values: [
        { emoji: "📱", text: "Device" },
        { emoji: "💊", text: "Pill" },
        { emoji: "🎭", text: "Mask" },
        { emoji: "📡", text: "Transmitter" },
        { emoji: "🔫", text: "Weapon" },
        { emoji: "📄", text: "Propaganda" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#696969",
      icon: "😔",
      values: [
        { emoji: "😔", text: "Despair" },
        { emoji: "😤", text: "Defiance" },
        { emoji: "😰", text: "Fear" },
        { emoji: "😶", text: "Numbness" },
        { emoji: "😡", text: "Rage" },
        { emoji: "😌", text: "Hope" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "⚠️",
      values: [
        { emoji: "👁️", text: "Surveillance" },
        { emoji: "🚨", text: "Curfew" },
        { emoji: "🤖", text: "AI Control" },
        { emoji: "💉", text: "Forced Compliance" },
        { emoji: "🌫️", text: "Pollution" },
        { emoji: "📵", text: "Censorship" }
      ]
    }
  },

  // Cyberpunk
  'cyberpunk': {
    character: {
      name: "Character",
      color: "#00FFFF",
      icon: "🦾",
      values: [
        { emoji: "🦾", text: "Cyborg" },
        { emoji: "💻", text: "Hacker" },
        { emoji: "🕵️", text: "Runner" },
        { emoji: "🤖", text: "Android" },
        { emoji: "👨‍💼", text: "Corp" },
        { emoji: "🥷", text: "Netrunner" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#FF00FF",
      icon: "🌃",
      values: [
        { emoji: "🌃", text: "Neon City" },
        { emoji: "🏢", text: "Megacorp" },
        { emoji: "🌐", text: "Cyberspace" },
        { emoji: "🏚️", text: "Slums" },
        { emoji: "🎰", text: "Casino" },
        { emoji: "🏭", text: "Lab" }
      ]
    },
    action: {
      name: "Action",
      color: "#00FFFF",
      icon: "💻",
      values: [
        { emoji: "💻", text: "Hack" },
        { emoji: "🔌", text: "Jack In" },
        { emoji: "💾", text: "Download" },
        { emoji: "🔫", text: "Shoot" },
        { emoji: "🏃", text: "Run" },
        { emoji: "🦾", text: "Upgrade" }
      ]
    },
    object: {
      name: "Object",
      color: "#FF00FF",
      icon: "💾",
      values: [
        { emoji: "💾", text: "Data Chip" },
        { emoji: "🦾", text: "Implant" },
        { emoji: "💻", text: "Deck" },
        { emoji: "🔫", text: "Smart Gun" },
        { emoji: "👓", text: "AR Glasses" },
        { emoji: "💊", text: "Stim" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#00FFFF",
      icon: "😎",
      values: [
        { emoji: "😎", text: "Cool" },
        { emoji: "😰", text: "Paranoia" },
        { emoji: "🤖", text: "Detached" },
        { emoji: "😤", text: "Rebellious" },
        { emoji: "🤯", text: "Overload" },
        { emoji: "😈", text: "Ruthless" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "🚨",
      values: [
        { emoji: "🚨", text: "ICE" },
        { emoji: "🤖", text: "Security Bot" },
        { emoji: "💻", text: "Virus" },
        { emoji: "👁️", text: "Corp Spy" },
        { emoji: "⚡", text: "EMP" },
        { emoji: "🔒", text: "Firewall" }
      ]
    }
  },

  // Steampunk
  'steampunk': {
    character: {
      name: "Character",
      color: "#8B4513",
      icon: "⚙️",
      values: [
        { emoji: "🎩", text: "Gentleman" },
        { emoji: "🧑🏾‍🔧", text: "Engineer" },
        { emoji: "🏴‍☠️", text: "Airship Pirate" },
        { emoji: "🤖", text: "Automaton" },
        { emoji: "🧑‍🔬", text: "Inventor" },
        { emoji: "🕵️", text: "Detective" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#CD853F",
      icon: "🏭",
      values: [
        { emoji: "🏭", text: "Factory" },
        { emoji: "🚂", text: "Train" },
        { emoji: "🎪", text: "Airship" },
        { emoji: "🏛️", text: "Victorian City" },
        { emoji: "⚙️", text: "Workshop" },
        { emoji: "🏰", text: "Manor" }
      ]
    },
    action: {
      name: "Action",
      color: "#8B4513",
      icon: "⚙️",
      values: [
        { emoji: "🔧", text: "Tinker" },
        { emoji: "⚙️", text: "Build" },
        { emoji: "💨", text: "Steam" },
        { emoji: "🔥", text: "Ignite" },
        { emoji: "🚂", text: "Travel" },
        { emoji: "🔍", text: "Investigate" }
      ]
    },
    object: {
      name: "Object",
      color: "#CD853F",
      icon: "⚙️",
      values: [
        { emoji: "⚙️", text: "Gear" },
        { emoji: "🔧", text: "Wrench" },
        { emoji: "🎩", text: "Top Hat" },
        { emoji: "⌚", text: "Pocket Watch" },
        { emoji: "🔫", text: "Steam Gun" },
        { emoji: "🧭", text: "Compass" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#8B4513",
      icon: "🤔",
      values: [
        { emoji: "🤔", text: "Curiosity" },
        { emoji: "😊", text: "Pride" },
        { emoji: "😤", text: "Determination" },
        { emoji: "😲", text: "Wonder" },
        { emoji: "🧐", text: "Intrigue" },
        { emoji: "😅", text: "Frustration" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "💥",
      values: [
        { emoji: "💥", text: "Explosion" },
        { emoji: "⚙️", text: "Malfunction" },
        { emoji: "🌫️", text: "Smog" },
        { emoji: "🔥", text: "Boiler Burst" },
        { emoji: "🏴‍☠️", text: "Pirates" },
        { emoji: "⚡", text: "Overload" }
      ]
    }
  },

  // Post-Apocalyptic
  'post-apocalyptic': {
    character: {
      name: "Character",
      color: "#8B4513",
      icon: "☢️",
      values: [
        { emoji: "🦹", text: "Survivor" },
        { emoji: "🏴‍☠️", text: "Raider" },
        { emoji: "🧟", text: "Mutant" },
        { emoji: "🤖", text: "Robot" },
        { emoji: "🧑‍🌾", text: "Settler" },
        { emoji: "🕵️", text: "Scavenger" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#696969",
      icon: "🏚️",
      values: [
        { emoji: "🏚️", text: "Ruins" },
        { emoji: "🌫️", text: "Wasteland" },
        { emoji: "🏜️", text: "Desert" },
        { emoji: "🏭", text: "Bunker" },
        { emoji: "🌆", text: "Dead City" },
        { emoji: "☢️", text: "Radiation Zone" }
      ]
    },
    action: {
      name: "Action",
      color: "#8B4513",
      icon: "🔍",
      values: [
        { emoji: "🔍", text: "Scavenge" },
        { emoji: "🔥", text: "Survive" },
        { emoji: "🔫", text: "Defend" },
        { emoji: "🏃", text: "Flee" },
        { emoji: "🛠️", text: "Repair" },
        { emoji: "💧", text: "Find Water" }
      ]
    },
    object: {
      name: "Object",
      color: "#696969",
      icon: "🔧",
      values: [
        { emoji: "🔫", text: "Gun" },
        { emoji: "🥫", text: "Canned Food" },
        { emoji: "💧", text: "Water" },
        { emoji: "🔧", text: "Tools" },
        { emoji: "🎒", text: "Backpack" },
        { emoji: "☢️", text: "Geiger Counter" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#696969",
      icon: "😔",
      values: [
        { emoji: "😔", text: "Despair" },
        { emoji: "😤", text: "Grit" },
        { emoji: "😰", text: "Fear" },
        { emoji: "😌", text: "Hope" },
        { emoji: "😡", text: "Anger" },
        { emoji: "😶", text: "Numbness" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "☢️",
      values: [
        { emoji: "☢️", text: "Radiation" },
        { emoji: "🏴‍☠️", text: "Raiders" },
        { emoji: "🧟", text: "Mutants" },
        { emoji: "💧", text: "Drought" },
        { emoji: "🌡️", text: "Extreme Heat" },
        { emoji: "🦠", text: "Disease" }
      ]
    }
  },

  // Time Travel
  'time-travel': {
    character: {
      name: "Character",
      color: "#4169E1",
      icon: "⏳",
      values: [
        { emoji: "🧑‍🔬", text: "Scientist" },
        { emoji: "⏳", text: "Time Traveler" },
        { emoji: "👤", text: "Ancestor" },
        { emoji: "🤖", text: "Future Self" },
        { emoji: "👑", text: "Historical Figure" },
        { emoji: "🕵️", text: "Time Agent" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#9370DB",
      icon: "⏰",
      values: [
        { emoji: "🏛️", text: "Ancient Rome" },
        { emoji: "🏰", text: "Medieval" },
        { emoji: "🏙️", text: "Future City" },
        { emoji: "🦕", text: "Prehistoric" },
        { emoji: "🚀", text: "Space Age" },
        { emoji: "⏰", text: "Time Loop" }
      ]
    },
    action: {
      name: "Action",
      color: "#4169E1",
      icon: "⏳",
      values: [
        { emoji: "⏳", text: "Jump" },
        { emoji: "🔄", text: "Loop" },
        { emoji: "⚠️", text: "Paradox" },
        { emoji: "🔧", text: "Fix Timeline" },
        { emoji: "👤", text: "Meet Self" },
        { emoji: "📜", text: "Change History" }
      ]
    },
    object: {
      name: "Object",
      color: "#9370DB",
      icon: "⌚",
      values: [
        { emoji: "⌚", text: "Time Device" },
        { emoji: "📜", text: "Historical Document" },
        { emoji: "💎", text: "Artifact" },
        { emoji: "📱", text: "Future Tech" },
        { emoji: "🗝️", text: "Temporal Key" },
        { emoji: "📖", text: "Journal" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#4169E1",
      icon: "🤯",
      values: [
        { emoji: "🤯", text: "Confusion" },
        { emoji: "😲", text: "Awe" },
        { emoji: "😰", text: "Panic" },
        { emoji: "🤔", text: "Curiosity" },
        { emoji: "😔", text: "Regret" },
        { emoji: "😊", text: "Wonder" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "⚠️",
      values: [
        { emoji: "⚠️", text: "Paradox" },
        { emoji: "🔄", text: "Loop" },
        { emoji: "⏰", text: "Time Limit" },
        { emoji: "👤", text: "Doppelganger" },
        { emoji: "💥", text: "Timeline Collapse" },
        { emoji: "🕳️", text: "Temporal Rift" }
      ]
    }
  },

  // Space Opera
  'space-opera': {
    character: {
      name: "Character",
      color: "#4B0082",
      icon: "🌌",
      values: [
        { emoji: "👨🏾‍🚀", text: "Captain" },
        { emoji: "👽", text: "Alien" },
        { emoji: "🤖", text: "Droid" },
        { emoji: "🧙", text: "Jedi" },
        { emoji: "👑", text: "Emperor" },
        { emoji: "🏴‍☠️", text: "Space Pirate" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#191970",
      icon: "🌌",
      values: [
        { emoji: "🚀", text: "Starship" },
        { emoji: "🌌", text: "Galaxy" },
        { emoji: "🪐", text: "Planet" },
        { emoji: "🛸", text: "Space Station" },
        { emoji: "🌑", text: "Moon" },
        { emoji: "⭐", text: "Star System" }
      ]
    },
    action: {
      name: "Action",
      color: "#4B0082",
      icon: "⚡",
      values: [
        { emoji: "🚀", text: "Warp" },
        { emoji: "💥", text: "Battle" },
        { emoji: "🤝", text: "Negotiate" },
        { emoji: "🔫", text: "Blast" },
        { emoji: "🛸", text: "Dock" },
        { emoji: "🌌", text: "Explore" }
      ]
    },
    object: {
      name: "Object",
      color: "#191970",
      icon: "⚔️",
      values: [
        { emoji: "⚔️", text: "Lightsaber" },
        { emoji: "🔫", text: "Blaster" },
        { emoji: "🛡️", text: "Shield" },
        { emoji: "💎", text: "Crystal" },
        { emoji: "📡", text: "Communicator" },
        { emoji: "🗺️", text: "Star Map" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#4B0082",
      icon: "🌟",
      values: [
        { emoji: "🌟", text: "Hope" },
        { emoji: "😤", text: "Courage" },
        { emoji: "😰", text: "Fear" },
        { emoji: "😡", text: "Anger" },
        { emoji: "😌", text: "Peace" },
        { emoji: "🤩", text: "Wonder" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "💥",
      values: [
        { emoji: "💥", text: "Space Battle" },
        { emoji: "🌌", text: "Black Hole" },
        { emoji: "👾", text: "Empire" },
        { emoji: "☄️", text: "Asteroid Field" },
        { emoji: "🦠", text: "Plague" },
        { emoji: "🤖", text: "Droid Army" }
      ]
    }
  },

  // Urban Fantasy
  'urban-fantasy': {
    character: {
      name: "Character",
      color: "#9370DB",
      icon: "🌆",
      values: [
        { emoji: "🧙", text: "Mage" },
        { emoji: "🧛", text: "Vampire" },
        { emoji: "🐺", text: "Werewolf" },
        { emoji: "🧚", text: "Fae" },
        { emoji: "👤", text: "Human" },
        { emoji: "😈", text: "Demon" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#483D8B",
      icon: "🌃",
      values: [
        { emoji: "🌃", text: "City Night" },
        { emoji: "🏢", text: "Skyscraper" },
        { emoji: "🍺", text: "Bar" },
        { emoji: "🌉", text: "Bridge" },
        { emoji: "🚇", text: "Subway" },
        { emoji: "🏚️", text: "Warehouse" }
      ]
    },
    action: {
      name: "Action",
      color: "#9370DB",
      icon: "✨",
      values: [
        { emoji: "✨", text: "Cast Spell" },
        { emoji: "🏃", text: "Chase" },
        { emoji: "⚔️", text: "Fight" },
        { emoji: "🔮", text: "Divine" },
        { emoji: "🤝", text: "Ally" },
        { emoji: "🌙", text: "Transform" }
      ]
    },
    object: {
      name: "Object",
      color: "#483D8B",
      icon: "🔮",
      values: [
        { emoji: "🔮", text: "Crystal Ball" },
        { emoji: "📖", text: "Grimoire" },
        { emoji: "🗡️", text: "Enchanted Blade" },
        { emoji: "🧪", text: "Potion" },
        { emoji: "💍", text: "Talisman" },
        { emoji: "🕯️", text: "Candle" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#9370DB",
      icon: "✨",
      values: [
        { emoji: "😤", text: "Defiance" },
        { emoji: "😰", text: "Fear" },
        { emoji: "😍", text: "Desire" },
        { emoji: "😡", text: "Rage" },
        { emoji: "🤔", text: "Suspicion" },
        { emoji: "😌", text: "Serenity" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "🌙",
      values: [
        { emoji: "🌙", text: "Full Moon" },
        { emoji: "😈", text: "Demon" },
        { emoji: "🔮", text: "Curse" },
        { emoji: "⚔️", text: "Gang War" },
        { emoji: "🌫️", text: "Veil Breach" },
        { emoji: "👁️", text: "Hunters" }
      ]
    }
  },

  // Noir
  'noir': {
    character: {
      name: "Character",
      color: "#2F4F4F",
      icon: "🌃",
      values: [
        { emoji: "🕵️", text: "Detective" },
        { emoji: "💃", text: "Femme Fatale" },
        { emoji: "🤵", text: "Gangster" },
        { emoji: "👤", text: "Client" },
        { emoji: "🚬", text: "Informant" },
        { emoji: "👮", text: "Corrupt Cop" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#1C1C1C",
      icon: "🌃",
      values: [
        { emoji: "🌃", text: "Dark Street" },
        { emoji: "🍺", text: "Dive Bar" },
        { emoji: "🏢", text: "Office" },
        { emoji: "🚗", text: "Car" },
        { emoji: "🌉", text: "Docks" },
        { emoji: "🏨", text: "Hotel" }
      ]
    },
    action: {
      name: "Action",
      color: "#2F4F4F",
      icon: "🔍",
      values: [
        { emoji: "🔍", text: "Investigate" },
        { emoji: "🚬", text: "Smoke" },
        { emoji: "🥃", text: "Drink" },
        { emoji: "🔫", text: "Shoot" },
        { emoji: "💰", text: "Bribe" },
        { emoji: "🤐", text: "Betray" }
      ]
    },
    object: {
      name: "Object",
      color: "#1C1C1C",
      icon: "🔫",
      values: [
        { emoji: "🔫", text: "Revolver" },
        { emoji: "🚬", text: "Cigarette" },
        { emoji: "🥃", text: "Whiskey" },
        { emoji: "💌", text: "Letter" },
        { emoji: "💰", text: "Cash" },
        { emoji: "📸", text: "Photo" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#2F4F4F",
      icon: "😔",
      values: [
        { emoji: "😔", text: "Cynicism" },
        { emoji: "😤", text: "Determination" },
        { emoji: "😰", text: "Paranoia" },
        { emoji: "😍", text: "Temptation" },
        { emoji: "😡", text: "Anger" },
        { emoji: "😶", text: "Numbness" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "🌫️",
      values: [
        { emoji: "🌫️", text: "Fog" },
        { emoji: "🤐", text: "Betrayal" },
        { emoji: "💀", text: "Murder" },
        { emoji: "💰", text: "Greed" },
        { emoji: "🤥", text: "Deception" },
        { emoji: "🚨", text: "Cops" }
      ]
    }
  },

  // Western
  'western': {
    character: {
      name: "Character",
      color: "#8B4513",
      icon: "🤠",
      values: [
        { emoji: "🤠", text: "Cowboy" },
        { emoji: "🏴‍☠️", text: "Outlaw" },
        { emoji: "⭐", text: "Sheriff" },
        { emoji: "💃", text: "Saloon Girl" },
        { emoji: "🧑‍🌾", text: "Rancher" },
        { emoji: "🏹", text: "Native" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#D2691E",
      icon: "🏜️",
      values: [
        { emoji: "🏜️", text: "Desert" },
        { emoji: "🍺", text: "Saloon" },
        { emoji: "🏘️", text: "Town" },
        { emoji: "🐎", text: "Ranch" },
        { emoji: "🚂", text: "Train" },
        { emoji: "⛰️", text: "Canyon" }
      ]
    },
    action: {
      name: "Action",
      color: "#8B4513",
      icon: "🔫",
      values: [
        { emoji: "🔫", text: "Duel" },
        { emoji: "🐎", text: "Ride" },
        { emoji: "🏹", text: "Hunt" },
        { emoji: "💰", text: "Rob" },
        { emoji: "⭐", text: "Arrest" },
        { emoji: "🍺", text: "Drink" }
      ]
    },
    object: {
      name: "Object",
      color: "#D2691E",
      icon: "🔫",
      values: [
        { emoji: "🔫", text: "Revolver" },
        { emoji: "🤠", text: "Hat" },
        { emoji: "🐴", text: "Horse" },
        { emoji: "🏹", text: "Bow" },
        { emoji: "💰", text: "Gold" },
        { emoji: "🥃", text: "Whiskey" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#8B4513",
      icon: "😤",
      values: [
        { emoji: "😤", text: "Grit" },
        { emoji: "😡", text: "Vengeance" },
        { emoji: "😎", text: "Cool" },
        { emoji: "😔", text: "Loneliness" },
        { emoji: "😰", text: "Fear" },
        { emoji: "😊", text: "Pride" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "🏴‍☠️",
      values: [
        { emoji: "🏴‍☠️", text: "Outlaws" },
        { emoji: "🌵", text: "Desert" },
        { emoji: "🐍", text: "Snake" },
        { emoji: "🔥", text: "Fire" },
        { emoji: "💰", text: "Bounty" },
        { emoji: "⚡", text: "Stampede" }
      ]
    }
  },

  // Historical Fiction
  'historical': {
    character: {
      name: "Character",
      color: "#8B7355",
      icon: "🕰️",
      values: [
        { emoji: "👑", text: "Monarch" },
        { emoji: "⚔️", text: "Knight" },
        { emoji: "🧑‍🌾", text: "Peasant" },
        { emoji: "🧑🏽‍🎨", text: "Artist" },
        { emoji: "📜", text: "Scribe" },
        { emoji: "🏴‍☠️", text: "Revolutionary" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#A0522D",
      icon: "🏛️",
      values: [
        { emoji: "🏰", text: "Castle" },
        { emoji: "🏛️", text: "Palace" },
        { emoji: "🏘️", text: "Village" },
        { emoji: "⛪", text: "Cathedral" },
        { emoji: "🚢", text: "Ship" },
        { emoji: "🎭", text: "Theater" }
      ]
    },
    action: {
      name: "Action",
      color: "#8B7355",
      icon: "⚔️",
      values: [
        { emoji: "⚔️", text: "Battle" },
        { emoji: "📜", text: "Write" },
        { emoji: "🎨", text: "Paint" },
        { emoji: "💬", text: "Debate" },
        { emoji: "👑", text: "Crown" },
        { emoji: "🏹", text: "Hunt" }
      ]
    },
    object: {
      name: "Object",
      color: "#A0522D",
      icon: "📜",
      values: [
        { emoji: "⚔️", text: "Sword" },
        { emoji: "👑", text: "Crown" },
        { emoji: "📜", text: "Scroll" },
        { emoji: "💍", text: "Ring" },
        { emoji: "🏺", text: "Artifact" },
        { emoji: "📖", text: "Manuscript" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#8B7355",
      icon: "😌",
      values: [
        { emoji: "😌", text: "Honor" },
        { emoji: "😤", text: "Duty" },
        { emoji: "😍", text: "Passion" },
        { emoji: "😔", text: "Sorrow" },
        { emoji: "😡", text: "Wrath" },
        { emoji: "😊", text: "Joy" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "⚔️",
      values: [
        { emoji: "⚔️", text: "War" },
        { emoji: "🦠", text: "Plague" },
        { emoji: "🤐", text: "Conspiracy" },
        { emoji: "👑", text: "Succession" },
        { emoji: "🔥", text: "Rebellion" },
        { emoji: "⚖️", text: "Injustice" }
      ]
    }
  },

  // Contemporary Fiction
  'contemporary': {
    character: {
      name: "Character",
      color: "#4682B4",
      icon: "🏙️",
      values: [
        { emoji: "👨‍💼", text: "Professional" },
        { emoji: "🧑‍🎓", text: "Student" },
        { emoji: "👨‍👩‍👧", text: "Parent" },
        { emoji: "🧑‍🎨", text: "Artist" },
        { emoji: "👫", text: "Friend" },
        { emoji: "👤", text: "Stranger" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#5F9EA0",
      icon: "🏙️",
      values: [
        { emoji: "🏙️", text: "City" },
        { emoji: "🏠", text: "Home" },
        { emoji: "☕", text: "Café" },
        { emoji: "🏢", text: "Office" },
        { emoji: "🏫", text: "School" },
        { emoji: "🏖️", text: "Beach" }
      ]
    },
    action: {
      name: "Action",
      color: "#4682B4",
      icon: "💬",
      values: [
        { emoji: "💬", text: "Talk" },
        { emoji: "📱", text: "Text" },
        { emoji: "🚗", text: "Drive" },
        { emoji: "☕", text: "Meet" },
        { emoji: "💼", text: "Work" },
        { emoji: "🎉", text: "Celebrate" }
      ]
    },
    object: {
      name: "Object",
      color: "#5F9EA0",
      icon: "📱",
      values: [
        { emoji: "📱", text: "Phone" },
        { emoji: "💻", text: "Laptop" },
        { emoji: "☕", text: "Coffee" },
        { emoji: "🚗", text: "Car" },
        { emoji: "📖", text: "Book" },
        { emoji: "🎧", text: "Headphones" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#4682B4",
      icon: "😊",
      values: [
        { emoji: "😊", text: "Contentment" },
        { emoji: "😔", text: "Melancholy" },
        { emoji: "😰", text: "Stress" },
        { emoji: "😍", text: "Love" },
        { emoji: "😤", text: "Frustration" },
        { emoji: "😌", text: "Peace" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "💼",
      values: [
        { emoji: "💼", text: "Career" },
        { emoji: "💔", text: "Relationship" },
        { emoji: "💸", text: "Money" },
        { emoji: "🏠", text: "Housing" },
        { emoji: "👨‍👩‍👧", text: "Family" },
        { emoji: "🧠", text: "Mental Health" }
      ]
    }
  },

  // Literary Fiction
  'literary': {
    character: {
      name: "Character",
      color: "#2F4F4F",
      icon: "🖋️",
      values: [
        { emoji: "🧑‍🎨", text: "Artist" },
        { emoji: "📚", text: "Writer" },
        { emoji: "🧑‍🏫", text: "Professor" },
        { emoji: "👤", text: "Wanderer" },
        { emoji: "🧑‍⚖️", text: "Judge" },
        { emoji: "👨‍👩‍👧", text: "Family" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#696969",
      icon: "📚",
      values: [
        { emoji: "📚", text: "Library" },
        { emoji: "🏠", text: "Home" },
        { emoji: "🌳", text: "Park" },
        { emoji: "☕", text: "Café" },
        { emoji: "🏛️", text: "Museum" },
        { emoji: "🌅", text: "Landscape" }
      ]
    },
    action: {
      name: "Action",
      color: "#2F4F4F",
      icon: "✍️",
      values: [
        { emoji: "✍️", text: "Write" },
        { emoji: "📖", text: "Read" },
        { emoji: "🤔", text: "Reflect" },
        { emoji: "💬", text: "Discuss" },
        { emoji: "🚶", text: "Wander" },
        { emoji: "😢", text: "Mourn" }
      ]
    },
    object: {
      name: "Object",
      color: "#696969",
      icon: "📖",
      values: [
        { emoji: "📖", text: "Book" },
        { emoji: "✒️", text: "Pen" },
        { emoji: "💌", text: "Letter" },
        { emoji: "🎨", text: "Painting" },
        { emoji: "📸", text: "Photograph" },
        { emoji: "🕯️", text: "Candle" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#2F4F4F",
      icon: "😌",
      values: [
        { emoji: "😌", text: "Contemplation" },
        { emoji: "😔", text: "Melancholy" },
        { emoji: "🤔", text: "Introspection" },
        { emoji: "😊", text: "Serenity" },
        { emoji: "😢", text: "Grief" },
        { emoji: "😍", text: "Longing" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "🤔",
      values: [
        { emoji: "🤔", text: "Existential Crisis" },
        { emoji: "💔", text: "Loss" },
        { emoji: "⏰", text: "Time" },
        { emoji: "🧠", text: "Identity" },
        { emoji: "⚖️", text: "Morality" },
        { emoji: "🌫️", text: "Uncertainty" }
      ]
    }
  },

  // Middle Grade
  'middle-grade': {
    character: {
      name: "Character",
      color: "#FF69B4",
      icon: "🎒",
      values: [
        { emoji: "🧑‍🎓", text: "Student" },
        { emoji: "👫", text: "Best Friend" },
        { emoji: "🧑🏾‍🏫", text: "Teacher" },
        { emoji: "👨‍👩‍👧", text: "Parent" },
        { emoji: "🐶", text: "Pet" },
        { emoji: "🤓", text: "Nerd" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#FFB6C1",
      icon: "🏫",
      values: [
        { emoji: "🏫", text: "School" },
        { emoji: "🏠", text: "Home" },
        { emoji: "🏞️", text: "Park" },
        { emoji: "🏕️", text: "Camp" },
        { emoji: "🏀", text: "Gym" },
        { emoji: "🎪", text: "Fair" }
      ]
    },
    action: {
      name: "Action",
      color: "#FF69B4",
      icon: "🎮",
      values: [
        { emoji: "📚", text: "Study" },
        { emoji: "⚽", text: "Play" },
        { emoji: "🔍", text: "Explore" },
        { emoji: "🤝", text: "Team Up" },
        { emoji: "🎨", text: "Create" },
        { emoji: "🏃", text: "Race" }
      ]
    },
    object: {
      name: "Object",
      color: "#FFB6C1",
      icon: "🎒",
      values: [
        { emoji: "🎒", text: "Backpack" },
        { emoji: "📱", text: "Phone" },
        { emoji: "🎮", text: "Game" },
        { emoji: "🚲", text: "Bike" },
        { emoji: "📖", text: "Book" },
        { emoji: "🎨", text: "Art Supplies" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#FF69B4",
      icon: "😊",
      values: [
        { emoji: "😊", text: "Excitement" },
        { emoji: "😰", text: "Nervousness" },
        { emoji: "😄", text: "Joy" },
        { emoji: "😔", text: "Disappointment" },
        { emoji: "😤", text: "Determination" },
        { emoji: "🤗", text: "Friendship" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#FF1493",
      icon: "🎯",
      values: [
        { emoji: "📝", text: "Test" },
        { emoji: "🏆", text: "Competition" },
        { emoji: "👥", text: "Peer Pressure" },
        { emoji: "🤐", text: "Secret" },
        { emoji: "😈", text: "Bully" },
        { emoji: "🎯", text: "Goal" }
      ]
    }
  },

  // Young Adult
  'young-adult': {
    character: {
      name: "Character",
      color: "#9370DB",
      icon: "🧑‍🎓",
      values: [
        { emoji: "🧑‍🎓", text: "Teen" },
        { emoji: "💑", text: "Crush" },
        { emoji: "👫", text: "Best Friend" },
        { emoji: "🧑‍🏫", text: "Mentor" },
        { emoji: "😈", text: "Rival" },
        { emoji: "👨‍👩‍👧", text: "Parent" }
      ]
    },
    setting: {
      name: "Setting",
      color: "#BA55D3",
      icon: "🏫",
      values: [
        { emoji: "🏫", text: "High School" },
        { emoji: "🏠", text: "Home" },
        { emoji: "🎉", text: "Party" },
        { emoji: "☕", text: "Hangout" },
        { emoji: "🏖️", text: "Beach" },
        { emoji: "🌃", text: "City" }
      ]
    },
    action: {
      name: "Action",
      color: "#9370DB",
      icon: "💬",
      values: [
        { emoji: "💬", text: "Talk" },
        { emoji: "💋", text: "Kiss" },
        { emoji: "🏃", text: "Rebel" },
        { emoji: "📱", text: "Text" },
        { emoji: "🎭", text: "Perform" },
        { emoji: "🤝", text: "Stand Up" }
      ]
    },
    object: {
      name: "Object",
      color: "#BA55D3",
      icon: "📱",
      values: [
        { emoji: "📱", text: "Phone" },
        { emoji: "🎧", text: "Headphones" },
        { emoji: "📖", text: "Diary" },
        { emoji: "🚗", text: "Car" },
        { emoji: "💌", text: "Note" },
        { emoji: "🎸", text: "Guitar" }
      ]
    },
    emotion: {
      name: "Emotion",
      color: "#9370DB",
      icon: "😍",
      values: [
        { emoji: "😍", text: "Love" },
        { emoji: "😰", text: "Anxiety" },
        { emoji: "😤", text: "Rebellion" },
        { emoji: "😔", text: "Confusion" },
        { emoji: "😊", text: "Hope" },
        { emoji: "😡", text: "Anger" }
      ]
    },
    challenge: {
      name: "Challenge",
      color: "#8B0000",
      icon: "🎭",
      values: [
        { emoji: "🎭", text: "Identity" },
        { emoji: "👥", text: "Social Pressure" },
        { emoji: "💔", text: "Heartbreak" },
        { emoji: "🏫", text: "Grades" },
        { emoji: "👨‍👩‍👧", text: "Family Issues" },
        { emoji: "🌟", text: "Future" }
      ]
    }
  }
};
