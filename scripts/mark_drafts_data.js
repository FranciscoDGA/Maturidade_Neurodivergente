const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/posts.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const PILLARS = [
  "neurodiversidade-guia-iniciantes",
  "tdah-adultos",
  "autismo-adultos",
  "organizacao-tdah",
  "maturidade-emocional-neurodivergente"
];

const lines = content.split('\n');
let newLines = [];
let currentSlug = "";

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  newLines.push(line);
  
  if (line.includes('slug: "')) {
    currentSlug = line.split('"')[1];
  }
  
  // Find the end of the post object
  if (line.trim() === '},' || (line.trim() === '}' && newLines[newLines.length-2].includes('difficulty'))) {
    // If we just pushed a closing brace of an object, let's insert the draft field before it.
    // Actually, safer way: look for the last field (like difficulty or featured), then insert draft.
  }
}

// Since regex is safer for this specific task:
const blockRegex = /({[\s\S]*?slug: "([^"]+)"[\s\S]*?})/g;

let updatedContent = content.replace(blockRegex, (match, block, slug) => {
  if (PILLARS.includes(slug)) {
    if (!block.includes('draft:')) {
      return block.replace(/difficulty: "[^"]+",?/, '$&\n    draft: false,');
    }
  } else {
    if (!block.includes('draft:')) {
      return block.replace(/difficulty: "[^"]+",?/, '$&\n    draft: true,');
    }
  }
  return block;
});

fs.writeFileSync(filePath, updatedContent);
console.log('data/posts.ts atualizado com drafts.');
