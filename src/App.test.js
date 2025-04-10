import React from 'react'; // Agrega esta línea
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);  // Cambia esto según tu contenido
  expect(linkElement).toBeInTheDocument();
});