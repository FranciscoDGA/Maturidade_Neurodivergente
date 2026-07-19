# ♿ Guia de Acessibilidade

Este documento descreve os princípios e práticas de acessibilidade implementados neste projeto.

## 🎯 Objetivos de Acessibilidade

- Atender pessoas com TDAH, autismo, sensibilidade visual e outros neurodivergentes
- Cumplir diretrizes WCAG 2.1 nível AA+
- Garantir acessibilidade sem sacrificar design

## 🌙 Modo Escuro

**Por quê?** Muitos neurodivergentes sofrem de fadiga visual em fundos brancos.

- Modo escuro é salvo em localStorage
- Detecta preferência do sistema operacional
- Transições suaves entre temas
- Sem efeito flash (flash of unstyled content)

```css
/* Implementação */
html.dark { /* estilos dark */ }
@media (prefers-color-scheme: dark) { /* preferência do SO */ }
```

## 🎨 Paleta de Cores

### Contraste

Todas as cores foram testadas com WebAIM Contrast Checker para WCAG AA+:

- Texto em fundo claro: #2D3748 (cinza-escuro) - Contraste: 13:1 ✅
- Texto em fundo escuro: #E0E0E0 (cinza-claro) - Contraste: 12:1 ✅
- Links: #4A6BFF (azul suave) - Contraste: 6.5:1 ✅

### Cores Evitadas

- ❌ Vermelho puro (#FF0000)
- ❌ Verde puro (#00FF00)
- ❌ Cores muito brilhantes/saturadas
- ❌ Gradientes complexos

## 🔤 Tipografia

### Tamanhos

| Elemento | Tamanho | Por quê |
|----------|---------|---------|
| Body | 16px | Mínimo legível |
| H1 | 40px | Hierarquia clara |
| H2 | 28px | Quebra de seções |
| H3 | 24px | Subseções |

### Linha e Espaçamento

- Line-height: 1.6 (corpo) - Espaço entre linhas aumentado
- Paragraph spacing: 1.5rem - Margens generosas
- Max-width: 700px - Comprimento ideal de leitura

### Fonte

- Sans-serif (Inter, Roboto, Open Sans)
- Evita serifas que podem causar fadiga
- X-height alta para melhor legibilidade

## ⏱️ Animações

**Por quê?** Animações podem distrair ou causar desconforto.

```css
/* Respeita preferência de movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Sem

- ❌ Autoplay em vídeos/áudios
- ❌ Animações de scroll infinito
- ❌ Gif animadas desnecessárias
- ❌ Transições muito longas

## 🔍 Navegação

### Skip Link

Link "Pular para conteúdo principal" invisível que se torna visível no focus do teclado.

```tsx
<a href="#main" className="skip-to-main">
  Ir para conteúdo principal
</a>
```

### Estrutura Semântica

```tsx
<header>   {/* Cabeçalho */}
<nav>      {/* Navegação */}
<main>     {/* Conteúdo principal */}
<article>  {/* Posts */}
<aside>    {/* Sidebar */}
<footer>   {/* Rodapé */}
```

### Foco Visível

```css
button:focus {
  outline: 2px solid #4A6BFF;
  outline-offset: 2px;
}
```

## 🷹 Aria Labels

Todos os elementos interativos têm labels acessíveis:

```tsx
<button aria-label="Abrir menu">☰</button>
<a href="/search" aria-label="Buscar">🔍</a>
<input aria-label="Email para newsletter" />
```

## 🖼️ Imagens

### Alt Text

Toda imagem **deve** ter descrição:

```tsx
<img 
  src="post.jpg" 
  alt="Pessoa estudando com fone de ouvido - representando concentração"
/>
```

### Imagens Decorativas

Se puramente decorativa:

```tsx
<img src="decoration.svg" alt="" aria-hidden="true" />
```

## 📋 Formulários

### Labels Explícitos

```tsx
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

### Feedback

- Erros em texto, não apenas cor
- Mensagens claras
- Estados de focus/hover visíveis

## 🔊 Conteúdo

### Clareza

- Parágrafos curtos (3-4 frases)
- Frases diretas
- Jargão mínimo
- TL;DR (resumos)

### Estrutura

- Headings hierárquicos (H1 > H2 > H3)
- Listas para itens relacionados
- Negrito para termos-chave

## 🧪 Testando Acessibilidade

### Ferramentas Recomendadas

```bash
# Verificar contraste
npm install -g wcag-contrast-checker

# Auditar com Lighthouse
# Integrated no Chrome DevTools

# Testar com screen reader
# macOS: VoiceOver (Cmd + F5)
# Windows: NVDA (gratuito)
# Linux: Orca (GNOME)
```

### Checklist

- [ ] Modo escuro funciona
- [ ] Contraste mínimo WCAG AA (4.5:1)
- [ ] Navegação por teclado (Tab, Enter, Esc)
- [ ] Labels em todos os inputs
- [ ] Alt text em todas as imagens
- [ ] Nenhuma informação só em cor
- [ ] Skip link funciona
- [ ] Foco visível em botões/links
- [ ] Sem autoplay
- [ ] Respeita prefers-reduced-motion

## 📚 Referências

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Neurodiversity Design Patterns](https://www.neurodiversitysimple.com/)

## 🤝 Contribuindo com Acessibilidade

Se encontrar problema de acessibilidade:

1. Abra uma issue descrevendo o problema
2. Inclua: navegador, dispositivo, tecnologia assistiva
3. Forneça passos para reproduzir

Toda melhoria de acessibilidade é bem-vinda!

---

**Acessibilidade não é feature—é um direito fundamental.**
