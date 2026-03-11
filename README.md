# Excellus - Reformas e Reparos de Luxo

Site elegante para empresa de reformas e reparos, com tema escuro, predominância dourada, pilares romanos sutis e animações modernas.

## Características

- **Design**: Tema escuro com acentos dourados, inspirado em remodelações de luxo
- **Pilares romanos**: Elementos decorativos sutis em bordas, hero e footer
- **Animações**: Fade-in no hero, scroll reveal, hover effects, shimmer em botões
- **Idiomas**: Inglês por padrão (troca dinâmica PT/EN, sem memorização)
- **Componentes**: Slider antes/depois, carrossel de depoimentos, galeria de projetos

## Estrutura

```
├── index.html
├── css/
│   ├── variables.css    # Variáveis de cores, fontes, espaçamentos
│   ├── main.css         # Estilos principais
│   ├── pillars.css     # Pilares romanos decorativos
│   └── animations.css  # Animações e keyframes
├── js/
│   ├── main.js         # Header, scroll reveal, menu mobile
│   ├── before-after.js # Slider antes/depois
│   ├── testimonials.js # Carrossel de depoimentos
│   └── i18n.js         # Internacionalização PT/EN
└── README.md
```

## Como usar

1. Abra `index.html` no navegador (ou use um servidor local)
2. Para desenvolvimento: `npx serve` ou `python -m http.server 8000`

## Deploy (sem domínio/host pago)

- **GitHub Pages**: Envie para um repositório e ative em Settings > Pages
- **Netlify**: Arraste a pasta ou conecte o repositório
- **Vercel**: Conecte o repositório para deploy automático

## Google Reviews

A seção de depoimentos tem 3 placeholders até haver reviews no Google. Para integrar um widget de Google Reviews (Elfsight, EmbedReviews, Trustindex):

1. Crie conta no serviço escolhido e vincule o negócio do Google
2. Copie o script do widget e adicione no `<head>` ou antes de `</body>` do `index.html`
3. O widget será exibido em `#google-reviews-widget` (abaixo dos placeholders)
4. Quando tiver reviews suficientes, esconda os placeholders com CSS: `.testimonial-card--placeholder { display: none; }`

## Personalização

- **Imagens**: Substitua as URLs do Unsplash em `index.html` por suas próprias fotos
- **Contato**: Atualize o e-mail e telefone no footer
- **Cores**: Edite `css/variables.css` para ajustar a paleta
