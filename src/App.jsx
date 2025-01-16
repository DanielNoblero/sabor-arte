import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './components/Context/Autenticación';
import { CartProvider } from './components/Context/CartContex';
import Nav from './components/Navbar/Nav';
import { Footer } from './components/Footer/Footer';
import Main from './components/Main/main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CategoryWrapper from './components/CategoryWrapper/CategoryWrapper';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ContactUs from './components/ContactUs/ContactUs';
import Cart from './components/cart/cart';
import Checkout from './components/Checkout/Checkout';
import OrderConfirmation from './components/OrderConfirm/OrderConfirmation';
import './local/i18n';
import { ToastContainer } from 'react-toastify';
import UserProfile from './components/UserProfile/UserProfile';

const App = () => {
  const location = useLocation();

  // Excluye explícitamente las rutas de /signin, /signup y /profile del renderizado de Main
  const showMain = ['/', '/detail', '/category', '/cart'].some(path =>
    location.pathname.startsWith(path)
  ) && !['/signin', '/signup', '/profile'].includes(location.pathname);

  return (
    <AuthProvider>
      <CartProvider>
        <div className="app-container">
          <Nav />
          {showMain && <Main />}
          <section className="content">
            <Routes>
              <Route path="/" element={<ItemListContainer greetings={"Lista de productos"} />} />
              <Route path="category/:category" element={<CategoryWrapper />} />
              <Route path="detail/:id" element={<ItemDetailContainer />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </section>
          <Footer />
        </div>
        <ToastContainer />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
