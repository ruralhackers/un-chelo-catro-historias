# Un chelo, catro historias

Un proyecto cultural gallego que conecta historias rurales a través de un violonchelo único elaborado con maderas de las cuatro provincias gallegas.

## 🎻 Sobre el proyecto

"Un chelo, catro historias" nace con el objetivo de poner en valor proyectos con vínculo rural, elaborando con maderas de cada una de las cuatro provincias galegas un violonchelo funcional que sirva como elemento que conecte estas historias.

### Las cuatro historias principales

- **Javier Merelas** (Ourense) - Artesán del castaño gallego
- **Pedro e Elba - Eco dos Teixos** (Lugo) - Guardadores de teixos milenarios
- **Iván Matos** (Pontevedra) - Mestre carpinteiro con pino de Oregón
- **Xaneco** (Pontevedra) - Artista visionario del ciruelo

### Historias adicionales

- **Cesar Arias** - Especialista en ciprés
- **Roi Earan** - Especialista en cerezo
- **Inazio** - Artesán del chopo

## 🛠️ Tecnologías utilizadas

- **React 18** con TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilos
- **Lucide React** para iconos
- **Fuentes personalizadas**: Archivo (principal) y Crimson Text

## 🚀 Instalación y desarrollo

### Prerrequisitos

- Node.js 18+ o Bun
- npm, yarn o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ruralhackers/chelo-catro.git
cd chelo-catro

# Instalar dependencias
npm install
# o
bun install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
# o
bun dev

# El proyecto estará disponible en http://localhost:5173
```

### Build para producción

```bash
# Crear build de producción
npm run build
# o
bun build

# Preview del build
npm run preview
# o
bun preview
```

## 🌐 Idiomas soportados

El proyecto soporta tres idiomas:

- **Gallego (gl)** - Idioma principal
- **Español (es)** - Traducción completa
- **Inglés (en)** - Traducción completa

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes React
│   ├── Home.tsx        # Página principal
│   ├── Navigation.tsx  # Navegación
│   ├── MainStories.tsx # Historias principales
│   ├── AdditionalStories.tsx # Historias adicionales
│   ├── Documentary.tsx # Sección documental
│   ├── Collaborations.tsx # Colaboraciones
│   ├── Contact.tsx     # Contacto
│   └── ...
├── context/            # Contextos React
│   └── LanguageContext.tsx # Contexto de idiomas
├── data/               # Datos estáticos
│   ├── stories.ts      # Historias y colaboraciones
│   └── translations.ts # Traducciones
├── hooks/              # Hooks personalizados
│   ├── useParallax.ts  # Efecto parallax
│   └── useScrollAnimation.ts # Animaciones de scroll
├── types/              # Tipos TypeScript
│   └── index.ts        # Definiciones de tipos
└── public/             # Assets públicos
    └── archivo/        # Fuentes Archivo (14 archivos optimizados)
```

## 🎨 Fuentes utilizadas

### Archivo (Principal) - 14 archivos optimizados
- Archivo-Thin.ttf (100)
- Archivo-Regular.ttf (400)
- Archivo-Medium.ttf (500)
- Archivo-SemiBold.ttf (600)
- Archivo-Bold.ttf (700)
- Archivo-ExtraBold.ttf (800)
- Archivo-Black.ttf (900)
- Archivo-Italic.ttf (400, italic)
- Archivo-BoldItalic.ttf (700, italic)
- Archivo-MediumItalic.ttf (500, italic)
- Archivo-SemiBoldItalic.ttf (600, italic)
- Archivo-ExtraBoldItalic.ttf (800, italic)
- Archivo-BlackItalic.ttf (900, italic)
- Archivo-ThinItalic.ttf (100, italic)

### Crimson Text (Serif)
- Importada via @fontsource/crimson-text

### Inter (Sans-serif)
- Importada via @fontsource/inter

## 🤝 Colaboradores

- **Esteban Zapata Blanco** - Compositor
- **Saúl Nogareda Candal** - Violonchelo
- **BELE** - Escola de música
- **Ensaia** - Talento Galego
- **Nerea Pallares** - Poeta
- **Laura Calvo** - Artista
- **Yago Fandiño** - Comunicación

## 📄 Licencia

Este proyecto es parte de Rural Hackers y está bajo licencia específica del proyecto cultural.

## 🔗 Enlaces

- **Sitio web**: https://unchelocatrohistorias.com
- **Instagram**: [@unchelocatrohistorias](https://instagram.com/unchelocatrohistorias)

## 📞 Contacto

Para más información sobre el proyecto, contacta con Rural Hackers.

---

*Desarrollado con ❤️ por Rural Hackers para preservar y difundir la cultura gallega rural.*
