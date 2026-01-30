# Canvas Tattoo - React Project

Este es un proyecto React para el sitio web del estudio de tatuajes Canvas Tattoo.

## Instalación

```bash
npm install
```

## Scripts disponibles

### `npm start`
Ejecuta la aplicación en modo desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `npm build`
Compila la aplicación para producción en la carpeta `build`.

### `npm test`
Ejecuta los tests de la aplicación.

## Estructura del proyecto

```
src/
├── components/
│   ├── Header.jsx       # Navegación superior
│   ├── Hero.jsx         # Sección principal
│   ├── Styles.jsx       # Estilos de tatuaje
│   ├── Experience.jsx   # La experiencia Canvas
│   ├── Portfolio.jsx    # Galería de trabajos
│   ├── Contact.jsx      # Formulario de contacto
│   ├── Footer.jsx       # Pie de página
│   └── FilmGrain.jsx    # Efecto de grano de película
├── App.jsx              # Componente principal
├── App.css              # Estilos globales
└── index.js             # Punto de entrada
```

## Tecnologías

- React 18
- Tailwind CSS
- Material Symbols Icons
- Google Fonts (Space Grotesk)

## Personalización

### Colores
Los colores pueden modificarse en `tailwind.config.js`:
- Primary: `#f2b90d` (Oro)
- Background Dark: `#000000`
- Background Light: `#f8f8f5`

### Fuentes
Se utiliza Space Grotesk. Puedes cambiarla en `tailwind.config.js`.

## Notas

- El proyecto utiliza Tailwind CSS para estilos
- Las imágenes se cargan desde URLs externas
- El formulario de contacto está conectado pero requiere backend para enviar datos
