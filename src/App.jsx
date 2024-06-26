import React from 'react';
import './index.css';
import Nav from './components/Nav';
import Main2 from './components/Main2';
import ProductosList from './components/ProductosList';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Nav />
      <Main2 />
      <section>
        <ProductosList />
      </section>
      <Footer />
    </>
  );
}

export default App;