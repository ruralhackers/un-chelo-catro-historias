/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'negro': '#000000',
        'gris-bacalao': '#1C1C1C',
        'mine-shaft': '#3D3D3D',
        'roca': '#7D7D7D',
        'caliz-plata': '#B0B0B0',
      },
      fontFamily: {
        'serif': ['Crimson Text', 'serif'],
        'sans': ['Archivo', 'Inter', 'sans-serif'],
        'archivo': ['Archivo', 'sans-serif'],
        'archivo-thin': ['Archivo', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
      },
    },
  },
  plugins: [],
};
