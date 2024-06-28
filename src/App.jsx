import React from 'react';
import './index.css';
import Nav from './components/Nav';
import ProductosList from './components/ProductosList';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
      <Nav />
      <main>
        <div class="call">
          <h1>Sabor & Arte</h1>
          <p>Somos una empresa donde cocinar es nuestra pasion y nuestra comida se basa en una comida rica, abundate y
            casera.</p>
        </div>
      </main>
      <ProductosList />
      <Footer />
    </>
  );
}

export default App;