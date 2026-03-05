# Guia de Imagens – Qualidade e Dimensões

Para fundos em **maior qualidade**, substitua as imagens em `assets/` por versões em alta resolução.

## Hero (fundo principal)

| Arquivo | Dimensões mínimas | Uso |
|---------|-------------------|-----|
| `hero-dark.png` | **2560 × 1440 px** (ou maior) | Modo escuro |
| `hero-light.png` | **2560 × 1440 px** (ou maior) | Modo claro |

**Dica:** Para telas 4K/Retina, use **3840 × 2160 px** ou crie `hero-dark@2x.png` e `hero-light@2x.png` (2× o tamanho) e adicione `srcset` no HTML.

## Padrões de fundo (body)

| Arquivo | Dimensões | Uso |
|---------|-----------|-----|
| `pattern-dark.png` | **600 × 600 px** (tile) | Modo escuro |
| `pattern-light.png` | **600 × 600 px** (tile) | Modo claro |

## Escudos das redes sociais (footer)

| Arquivo | Uso |
|---------|-----|
| `shield-light.png` | Modo escuro – escudo com interior branco (contraste com fundo escuro) |
| `shield-dark.png` | Modo claro – escudo com interior preto (contraste com fundo claro) |

Coloque os 4 ícones sociais (Facebook, Instagram, LinkedIn, Pinterest) dentro da área central do escudo. Dimensões sugeridas: ~140×120 px.

## Formatos

- **PNG** – mantém transparência e boa qualidade
- **WebP** – menor tamanho com qualidade similar (ajuste os caminhos no CSS se usar)
- **JPG** – aceitável para o hero, sem transparência

Substitua os arquivos em `assets/` mantendo os mesmos nomes para não alterar o código.
