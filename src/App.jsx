import React from 'react';
import './index.css';
import Nav from './components/Nav';
import ProductosList from './components/ProductosList';
import { Footer, Header } from './components/Footer';


function App() {
  return (
    <>

      <Header />
      <Nav />
      <main>
      </main>
      <section>
        <ProductosList />
      </section>
      <Footer />
    </>
  );
}

export default App;