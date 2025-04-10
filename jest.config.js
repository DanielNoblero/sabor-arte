export default {
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest', // Usar babel para transformar JSX y JS
      '\\.css$': 'jest-transform-stub', // Manejar archivos CSS
    },
    testEnvironment: 'jest-environment-jsdom', // Ambiente de pruebas de jsdom
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'jest-transform-stub', // Mapear archivos CSS
      '\\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg)$': 'jest-transform-stub', // Mapear imágenes
    },
    extensionsToTreatAsEsm: ['.jsx'], // Solo tratar .jsx como ESM
  };