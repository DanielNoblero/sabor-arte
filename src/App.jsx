import React from 'react';
import './index.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nav from './components/Navbar/Nav';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp'; 
import ContactUs from './components/ContactUs/ContactUs';
import CategoryWrapper from './components/CategoryWrapper/CategoryWrapper'

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
          <Route path='category/:category' element={<CategoryWrapper />} />
            <Route path='detail/:id' element={<ItemDetailContainer />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;