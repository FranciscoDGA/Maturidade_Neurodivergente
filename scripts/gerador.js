require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { GoogleGenAI } = require("@google/genai");

const POSTS_DIR = path.join(__dirname, '../posts');

// Verificação da Chave de API
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ ERRO: A chave GEMINI_API_KEY não foi encontrada no arquivo .env");
  console.error("Crie um arquivo .env na raiz do projeto e adicione: GEMINI_API_KEY=sua_chave_aqui");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function gerarConteudo(title, excerpt, category, keywords) {
  const prompt = `Você é um escritor especialista em maturidade neurodivergente.
Escreva um artigo completo para um blog sobre o seguinte tema:
Título: "${title}"
Resumo/Foco: "${excerpt}"
Categoria: "${category}"
Palavras-chave: ${keywords ? keywords.join(', ') : 'Nenhuma específica'}

Regras:
1. Retorne APENAS o conteúdo em Markdown (não inclua o frontmatter ou blocos de código com \`\`\`markdown, retorne apenas o texto puro).
2. Use tom de voz acolhedor, claro, baseado em ciência e neuro-inclusivo.
3. Divida o texto em subtítulos lógicos (use h2 e h3).
4. Utilize listas com marcadores ou numeradas para facilitar a leitura de pessoas neurodivergentes.
5. Inclua dicas práticas.
6. O texto deve ter pelo menos 600 palavras.
7. Não escreva "Aqui está o artigo" ou mensagens iniciais, entregue apenas o texto do artigo em si.`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-pro',
    contents: prompt
  });
  
  return response.text.replace(/^```markdown\n|```$/g, '').trim();
}

async function main() {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'));
  
  console.log(`\n🧠 Iniciando o Gerador Automatizado de Artigos...`);
  console.log(`Encontrados ${files.length} arquivos MDX no total.\n`);
  
  let processados = 0;

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);
    
    // Verifica se o post é um "stub" (possui o aviso padrão ou é muito curto)
    if (content.includes("Este artigo está atualmente em desenvolvimento") || content.trim().length < 150) {
      console.log(`⏳ Gerando artigo: "${frontmatter.title}" (${file})...`);
      
      try {
        const novoTexto = await gerarConteudo(
          frontmatter.title, 
          frontmatter.excerpt, 
          frontmatter.category,
          frontmatter.keywords
        );
        
        // Mantém o frontmatter original e adiciona o conteúdo gerado
        const novoArquivo = matter.stringify(novoTexto, frontmatter);
        fs.writeFileSync(filePath, novoArquivo);
        
        console.log(`✅ Sucesso! Arquivo ${file} atualizado.\n`);
        processados++;
        
        // Pausa 5 segundos para respeitar limites da API (Rate Limiting)
        await new Promise(r => setTimeout(r, 5000));
        
      } catch (error) {
        console.error(`❌ Erro ao gerar ${file}:`, error.message);
      }
    } else {
      // Ignora posts que já tem conteúdo longo
    }
  }
  
  console.log(`🎉 Processo finalizado! ${processados} novos artigos foram gerados com IA.`);
}

main();
