/**
 * Genre definitions for Story Dice
 * Streamlined list with popular, distinct genres only - no overlaps
 */

const GENRES = [
  // Core Popular Genres (Most Distinct)
  { id: 'fantasy', name: 'Fantasy', icon: '🧙', popular: true },
  { id: 'scifi', name: 'Science Fiction', icon: '🚀', popular: true },
  { id: 'mystery', name: 'Mystery', icon: '🕵️', popular: true },
  { id: 'romance', name: 'Romance', icon: '❤️', popular: true },
  { id: 'horror', name: 'Horror', icon: '👻', popular: true },
  { id: 'thriller', name: 'Thriller', icon: '😱', popular: true },
  { id: 'adventure', name: 'Adventure', icon: '🧭', popular: true },
  { id: 'action', name: 'Action', icon: '💥', popular: true },
  { id: 'drama', name: 'Drama', icon: '🎭', popular: true },
  { id: 'comedy', name: 'Comedy', icon: '😂', popular: true },
  
  // Speculative Fiction (Distinct Subgenres)
  { id: 'dystopian', name: 'Dystopian', icon: '⚠️' },
  { id: 'cyberpunk', name: 'Cyberpunk', icon: '🦾' },
  { id: 'steampunk', name: 'Steampunk', icon: '⚙️' },
  { id: 'post-apocalyptic', name: 'Post-Apocalyptic', icon: '☢️' },
  { id: 'time-travel', name: 'Time Travel', icon: '⏳' },
  { id: 'space-opera', name: 'Space Opera', icon: '🌌' },
  
  // Unique Styles
  { id: 'urban-fantasy', name: 'Urban Fantasy', icon: '🌆' },
  { id: 'noir', name: 'Noir', icon: '🌃' },
  { id: 'western', name: 'Western', icon: '🤠' },
  { id: 'historical', name: 'Historical Fiction', icon: '🕰️' },
  { id: 'contemporary', name: 'Contemporary Fiction', icon: '🏙️' },
  { id: 'literary', name: 'Literary Fiction', icon: '🖋️' },
  
  // Young Readers
  { id: 'middle-grade', name: 'Middle Grade', icon: '🎒' },
  { id: 'young-adult', name: 'Young Adult', icon: '🧑‍🎓' }
];
