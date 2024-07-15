import React from 'react';
import './index.css';
import ItemListContainer from './components/ItemlListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nav from './components/Navbar/Nav';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <div className="call">
          <h1>Sabor & Arte</h1>
          <p>Somos una empresa donde cocinar es nuestra pasión y nuestra comida se basa en una comida rica, abundante y casera.</p>
        </div>
      </main>
      <section>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings={"Lista de productos"} />} />
          <Route path='category/:category' element={<ItemListContainer />} />
          <Route path='detail/:id' element={<ItemDetailContainer />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
