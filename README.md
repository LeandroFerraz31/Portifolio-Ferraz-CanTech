# Portfólio Pessoal

🚧 **Projeto em Construção** 🚧

Bem-vindo ao meu portfólio pessoal! Este é um projeto em desenvolvimento que apresenta meus trabalhos como **desenvolvedor Front-end**, com uma interface moderna e interativa. O portfólio permite alternar entre uma visão amigável para clientes e uma visão técnica para desenvolvedores, destacando projetos com descrições, imagens e links.

---

## 📋 Descrição

Este portfólio é construído com as seguintes tecnologias:

- **React**: Biblioteca JavaScript para interfaces dinâmicas.
- **Vite**: Ferramenta de build rápida para desenvolvimento e produção.
- **TypeScript**: Adiciona tipagem estática para maior robustez.
- **Tailwind CSS**: Framework de estilização utilitária com variáveis personalizadas.
- **Biome**: Ferramenta de linting e formatação para manter o código consistente.
- **React Router**: Para navegação entre páginas (ex.: Home, Sobre Mim).

---

## 💡 Funcionalidades

- **Hero Section**: Vídeo em tela cheia com mensagem de boas-vindas.
- **Projetos**: Exibição de projetos com dados dinâmicos via JSON, alternando entre descrições para clientes e técnicas.
- **Sobre Mim**: Página com informações pessoais e habilidades.
- **Botão de Contato**: Link flutuante para WhatsApp.
- **Responsividade**: Layout adaptável para dispositivos móveis e desktop.

---

## 📦 Pré-requisitos

- **Node.js** (versão 16 ou superior): [Download](https://nodejs.org/)
- **Git**: Para controle de versão ([Download](https://git-scm.com/))
- **VSCode**: Recomendado para desenvolvimento, com extensões como Biome e Tailwind CSS IntelliSense.

---

## 🛠️ Instalação

Clone o repositório (quando disponível):

```bash
git clone <URL_DO_REPOSITORIO>
cd portifolio-ferraz
````

Instale as dependências:

```bash
npm install
```

Configure o Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure o Biome:

```bash
npm install -D @biomejs/biome
```

Copie os assets (ex.: vídeo e imagens) para `public/assets`:

```bash
mkdir -p public/assets
cp caminho/do/seu/video.mp4 public/assets/apresentacao.mp4
cp caminho/do/seu/perfil.jpg public/assets/perfil.jpg
```

---

## 🚀 Uso

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

Formate e verifique o código com Biome:

```bash
npm run format
npm run check
```

Construa para produção:

```bash
npm run build
```

Visualize a build localmente:

```bash
npm run preview
```

---

## 📂 Estrutura de Pastas

```
portifolio-ferraz/
├── public/
│   ├── assets/                # Vídeos e imagens (ex.: apresentacao.mp4, perfil.jpg)
├── src/
│   ├── assets/                # Outros assets (se necessário)
│   ├── components/            # Componentes reutilizáveis (ProjetoCard.tsx, HeroSection.tsx, etc.)
│   ├── pages/                 # Páginas (SobreMim.tsx)
│   ├── data/                  # Dados dinâmicos (projects.json)
│   ├── styles/                # Estilos Tailwind (variables.css)
│   ├── App.tsx               # Estrutura principal
│   ├── main.tsx             # Ponto de entrada
│   └── index.css           # Tailwind + variáveis
├── biome.json                # Configuração do Biome
├── tailwind.config.js       # Configuração do Tailwind
├── vite.config.ts          # Configuração do Vite
└── README.md              # Este arquivo
```

---

## 🌟 Próximos Passos (Em Desenvolvimento)

* Finalizar personalização da página **Sobre Mim** com informações reais.
* Adicionar mais projetos ao `projects.json`.
* Configurar deploy no **Netlify**.
* Implementar testes unitários.
* Adicionar animações com bibliotecas como **Framer Motion**.

---

## 📞 Contato

Entre em contato comigo pelo WhatsApp: [Clique aqui para conversar](https://wa.me/5551983012611).

---

🚧 **Este projeto está em construção! Novas funcionalidades e melhorias serão adicionadas em breve.**