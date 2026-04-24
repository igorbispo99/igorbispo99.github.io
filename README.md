# Igor Bispo — Personal Site

Página pessoal bilíngue (PT / EN) em HTML + CSS + JS puro, sem dependências de build. Pronta para GitHub Pages.

## Estrutura

```
site/
├── index.html
├── .nojekyll
├── README.md
└── assets/
    ├── css/styles.css
    ├── js/main.js
    ├── img/
    │   ├── igor.jpg         # foto do hero
    │   └── professor.png
    ├── docs/
    │   ├── Igor_Bispo_Curriculo_PT.pdf
    │   └── Igor_Bispo_Resume_EN.pdf
    └── screenshots/         # frames das aulas (16 imagens)
        └── aula_YYYY-MM_NN.jpg
```

> A pasta `assets/aulas/` que também fica no projeto contém arquivos intermediários gerados na primeira extração e **pode ser apagada manualmente**. A versão canônica usada pelo site é `assets/screenshots/`.

## Deploy no GitHub Pages

Opção 1 — repositório dedicado (recomendado):

1. Criar repositório `igorbispo99.github.io` (ou similar).
2. Copiar o conteúdo desta pasta `site/` para a raiz do repositório.
3. `git init && git add . && git commit -m "personal site"` e push.
4. Em **Settings → Pages**, selecionar branch `main` e pasta `/ (root)`.

Opção 2 — subpasta `/docs` em qualquer repo:

1. Copiar `site/*` para `docs/` na raiz do repositório.
2. Em **Settings → Pages**, escolher branch `main` e pasta `/docs`.

O arquivo `.nojekyll` já está incluso para evitar processamento Jekyll.

## Recursos

- Alternância PT/EN com persistência em `localStorage`.
- Tema claro / escuro com detecção automática via `prefers-color-scheme`.
- Lightbox nas miniaturas das aulas.
- Totalmente responsivo.
- Totalmente estático, sem dependências externas além de fontes do Google Fonts.

## Customizar

- **Foto**: substituir `assets/img/igor.jpg`.
- **Currículo PDF**: substituir arquivos em `assets/docs/`.
- **Textos**: editar `assets/js/main.js` (objeto `I18N`) e/ou `index.html` (conteúdos estáticos).
- **Cores**: ajustar variáveis CSS no topo de `assets/css/styles.css` (`--accent`, `--bg`, etc).

## Licença

Conteúdo e foto © Igor Bispo. Código-fonte do site sob MIT.
