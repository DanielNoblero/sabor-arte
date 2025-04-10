export default {
    presets: [
      '@babel/preset-env',   // Para transformar el código moderno de JS
      '@babel/preset-react'  // Para transformar JSX y otras características de React
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs', // Asegura la compatibilidad con CommonJS en Jest
    ],
  };