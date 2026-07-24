const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const POSTS_DIR = path.join(__dirname, '../posts');

const PILLARS = [
  "neurodiversidade-guia-iniciantes.mdx",
  "tdah-adultos.mdx",
  "autismo-adultos.mdx",
  "organizacao-tdah.mdx",
  "maturidade-emocional-neurodivergente.mdx"
];

const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'));

files.forEach(file => {
  const filePath = path.join(POSTS_DIR, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);
  
  if (PILLARS.includes(file)) {
    frontmatter.draft = false;
  } else {
    frontmatter.draft = true;
  }
  
  const novoArquivo = matter.stringify(content, frontmatter);
  fs.writeFileSync(filePath, novoArquivo);
});

console.log('Todos os arquivos foram marcados com a tag draft correspondente.');
