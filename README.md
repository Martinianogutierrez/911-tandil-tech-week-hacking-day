# Tandil Tech Week 2026

Landing page estática del evento (14 & 15 de octubre, Tandil).

## Estructura

```
.
├── index.html          # Markup: nav, home, shells de vistas, footer
├── css/
│   └── styles.css      # Tokens, layout, secciones, responsive
├── js/
│   ├── utils.js        # Helpers ($/$$), colores, flags, links
│   ├── data.js         # Contenido: DAYS, ORG, SPON, MARQ
│   ├── motifs.js       # SVGs de tiles (organizadores/sponsors)
│   ├── templates.js    # Builders HTML (tiles, day cards, views)
│   └── app.js          # Mount, router, scroll, menú, efectos
└── README.md
```

## Cómo abrir

Abrí `index.html` en el navegador, o serví la carpeta con cualquier static server:

```bash
npx serve .
# o
python3 -m http.server 8080
```

Los scripts se cargan en orden (no son ES modules) para que funcione también con `file://`.

## Dónde tocar qué

| Cambio | Archivo |
|--------|---------|
| Textos / sedes / Luma / sponsors | `js/data.js` |
| Estilos / colores / responsive | `css/styles.css` |
| Estructura fija del home / nav | `index.html` |
| HTML generado (cards, day views) | `js/templates.js` |
| Interacciones, router, countdown | `js/app.js` |
| Iconos SVG de tiles | `js/motifs.js` |
