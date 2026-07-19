# 🚀 Guia de Deploy na Vercel

## ✅ Pré-requisitos

1. Conta GitHub (você tem: `franciscodga/maturidade_neurodivergente`)
2. Conta Vercel (grátis em https://vercel.com)
3. Seu projeto versionado no GitHub ✅

## 📋 Passo a Passo

### 1️⃣ Criar Repositório no GitHub (Se não tiver)

```bash
# Se ainda não pushou para GitHub:
git remote add origin https://github.com/franciscodga/maturidade_neurodivergente.git
git push -u origin claude/projeto-ortqcr
```

**Status atual**: ✅ Já feito (você tem o repositório local)

### 2️⃣ Conectar Repositório no GitHub

Se o repositório está privado, certifique-se que está público ou que você tem acesso.

```bash
# Verificar origem remota
git remote -v

# Deve mostrar:
# origin  http://127.0.0.1:41729/git/FranciscoDGA/Maturidade_Neurodivergente (fetch)
# origin  http://127.0.0.1:41729/git/FranciscoDGA/Maturidade_Neurodivergente (push)
```

### 3️⃣ Fazer Deploy na Vercel

**Opção A: Via Website Vercel (Recomendado)**

1. Acesse https://vercel.com
2. Clique em **"New Project"**
3. Selecione **"Import Git Repository"**
4. Conecte sua conta GitHub
5. Selecione o repositório `maturidade_neurodivergente`
6. Selecione a branch `claude/projeto-ortqcr`
7. Clique em **"Deploy"**

**Opção B: Via CLI Vercel**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Escolha as opções:
# - Link to existing project? No
# - Project name? maturidade-neurodivergente
# - Directory? ./
# - Override settings? No
```

### 4️⃣ Configurar Domínio (Opcional)

```
Padrão Vercel: maturidade-neurodivergente.vercel.app
```

Se tiver domínio próprio:
1. Vá em **Project Settings** → **Domains**
2. Adicione seu domínio
3. Siga instruções de DNS

## 🔧 Variáveis de Ambiente

Crie arquivo `.env.local` na raiz (NÃO fazer commit):

```bash
# .env.local
NEXT_PUBLIC_BASE_URL=https://maturidade-neurodivergente.vercel.app
```

Na Vercel Dashboard → Settings → Environment Variables

## ✨ Depois do Deploy

Vercel automaticamente:
- ✅ Cria HTTPS
- ✅ Otimiza imagens
- ✅ Comprime assets
- ✅ CDN global
- ✅ Redeploys automáticos (ao fazer push)

## 🆘 Troubleshooting

### Build falha com "Module not found"

```bash
# Solução:
npm install

# Ou na Vercel: Settings → Build & Development
# Build Command: npm run build
# Start Command: npm start
```

### Porta já em uso

```bash
# Mudar porta local:
npm run dev -- -p 3001
```

### Cache issues

```bash
# Limpar cache:
npm run build
rm -rf .next
```

## 📊 Dashboard Vercel

Após deploy, acesse:
- **Analytics**: Veja tráfego e performance
- **Deployments**: Histórico de versões
- **Settings**: Configure domínio, env vars
- **Functions**: Monitore serverless functions

## 🔄 Workflow de Updates

```bash
# 1. Fazer alterações locais
echo "novo conteúdo" > app/novo.tsx

# 2. Commit
git add .
git commit -m "Add novo conteúdo"

# 3. Push
git push origin claude/projeto-ortqcr

# 4. Vercel automaticamente redeploya! ✅
# Receba notificações em seu email
```

## 🎯 URL Após Deploy

```
Homepage: https://maturidade-neurodivergente.vercel.app/
Blog: https://maturidade-neurodivergente.vercel.app/blog
Artigo: https://maturidade-neurodivergente.vercel.app/blog/neurodiversidade-guia-iniciantes
```

## 📈 Performance esperada

Com Vercel você terá:
- **Lighthouse**: 90+ pontos
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **FCP**: < 1.8s

## 🔐 Segurança

Vercel automaticamente:
- ✅ HTTPS/TLS
- ✅ DDoS protection
- ✅ WAF (Web Application Firewall)
- ✅ Encrypted backups

## 💰 Preços

- **Free**: Até 100GB/mês (suficiente!)
- **Pro**: $20/mês (mais analytics)
- **Enterprise**: Custom

Para este projeto, **Free é suficiente**.

---

**Dúvidas?** Teste em desenvolvimento primeiro:
```bash
npm run build
npm start
# Acesse http://localhost:3000
```

**Status**: Pronto para deploy ✅
