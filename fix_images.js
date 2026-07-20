const fs = require('fs');
let file = fs.readFileSync('data/posts.ts', 'utf8');

// Remove existing coverImage lines
file = file.replace(/\s*coverImage: .*?,/g, '');

const images = [
  '/images/neuro_mind_glow.png',
  '/images/abstract_pastel.png',
  '/images/arctic_fox.png',
  '/images/surreal_architecture.png',
  '/images/abstract_pastel.png' // 5th featured post
];

let i = 0;
file = file.replace(/featured: true,/g, () => {
  const img = images[i % images.length];
  i++;
  return `coverImage: "${img}",\n    featured: true,`;
});

fs.writeFileSync('data/posts.ts', file);
console.log('Done!');
