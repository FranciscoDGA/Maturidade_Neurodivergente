# 🧠 Maturidade Neurodivergente

Um blog inclusivo e acessível dedicado a explorar maturidade neurodivergente com clareza, compaixão e baixa carga sensorial.

## ✨ Características

- **♿ Acessibilidade Total**: Modo escuro, tamanho de fonte ajustável, alto contraste, sem animações distratoras
- **🌙 Tema Escuro/Claro**: Toggle fácil para preferências visuais
- **📱 Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- **⚡ Performance**: Built with Next.js para carregamento rápido
- **🎨 Design Minimalista**: Sem poluição visual, foco no conteúdo
- **🔍 SEO Otimizado**: Melhor visibilidade nos buscadores

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS com configuração acessível
- **Language**: TypeScript
- **Package Manager**: npm

## 📋 Requisitos

- Node.js 18+
- npm ou yarn

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/FranciscoDGA/maturidade_neurodivergente.git
cd maturidade_neurodivergente

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no seu navegador.

## 📁 Estrutura do Projeto

```
.
├── app/                    # App Router (Next.js)
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog e posts
│   ├── about/             # Página sobre
│   ├── contact/           # Página de contato
│   ├── search/            # Página de busca
│   ├── privacy/           # Política de privacidade
│   ├── terms/             # Termos de uso
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── BlogCard.tsx
│   ├── ThemeToggle.tsx
│   └── ThemeProvider.tsx
├── contexts/              # Contextos React
│   └── ThemeContext.ts
├── public/                # Assets estáticos
├── package.json           # Dependências
├── next.config.ts         # Configuração Next.js
├── tailwind.config.ts     # Configuração Tailwind
└── tsconfig.json          # Configuração TypeScript
```

## 📚 Categorias de Conteúdo

1. **🧠 Neurodiversidade 101** - Conceitos fundamentais
2. **🌱 Maturidade Emocional** - Desenvolvimento emocional
3. **💡 Autoconhecimento** - Ferramentas de autorreflexão
4. **👩‍💼 Vida Adulta Neurodivergente** - Estratégias práticas
5. **📚 Recursos** - Livros, ferramentas e comunidades

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Azul Suave | #4A6BFF | Links, botões, acentos |
| Fundo Claro | #FFFFFF | Modo light |
| Fundo Escuro | #1A1A2E | Modo dark (preferido) |
| Texto Principal | #2D3748 | Texto principal (low contrast) |
| Cinza Claro | #E2E8F0 | Cards, seções |

## 🔤 Tipografia

- **Títulos**: Inter ou Roboto (32-40px)
- **Corpo**: Open Sans ou Lato (16-18px)
- **Código**: Fira Code (14px)

## ♿ Acessibilidade

- ✅ Modo escuro nativo
- ✅ Skip to main content link
- ✅ Contraste de cores WCAG AA+
- ✅ Sem animações automáticas
- ✅ Sem autoplay de vídeos/áudios
- ✅ Alt text em todas as imagens
- ✅ Estrutura semântica HTML
- ✅ Navegação por teclado

## 📝 Adicionando Posts

Os posts serão armazenados como arquivos Markdown na pasta `posts/` (a ser criada). Cada post deve ter:

```markdown
---
title: "Título do Post"
date: "2026-07-15"
category: "Neurodiversidade 101"
author: "Nome do Autor"
excerpt: "Resumo curto do post"
---

Conteúdo do post em Markdown...
```

## 🔮 Próximas Melhorias

- [ ] Sistema de posts em Markdown com MDX
- [ ] Busca de posts
- [ ] Newsletter integrada
- [ ] Comentários
- [ ] Tags e filtros avançados
- [ ] Versão em áudio dos posts
- [ ] Sistema de favoritos
- [ ] Analytics privacidade-first

## 📖 Guia de Contribuição

Sua contribuição é bem-vinda! Por favor:

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/sua-feature`)
3. Commit suas mudanças (`git commit -m 'Add sua feature'`)
4. Push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é open source sob a licença MIT.

## 💬 Contato

- 📧 Email: [contato@maturidadeneurodivergente.com]
- 🐦 Twitter: [@MaturidadeND]
- 📷 Instagram: [@MaturidadeND]

## 🙏 Agradecimentos

Este projeto foi inspirado pela comunidade neurodivergente e pela necessidade de espaços inclusivos, acessíveis e compassivos.

---

**Desenvolvido com 💙 para pessoas neurodivergentes**

"A maturidade não é deixar de ser quem você é. É aprender a ser quem você é de forma consciente e compassiva."
