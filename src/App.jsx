import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import { Footer } from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CategoryWrapper from './components/CategoryWrapper/CategoryWrapper';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ContactUs from './components/ContactUs/ContactUs';
import Main from './components/Main/main';

const App = () => {
  const location = useLocation();
  const showMain = location.pathname === '/' || location.pathname.startsWith('/detail') || location.pathname.startsWith('/category');

  return (
    <>
      <Nav />
      {showMain && <Main />}
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
    </>
  );
};

export default App;
