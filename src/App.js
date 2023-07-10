import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Products } from './Components/Products';
import { ProductDetails } from './Components/ProductDetails';
import { Cart } from './Components/Cart';
import About from './Components/About';
import { Register } from './Components/Register';
import { Login } from './Components/Login';
import Contact from './Components/Contact';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';

function App() {
  const location = useLocation();

  const isFooterVisible = ['/', '/products', '/about', '/contact'].includes(
    location.pathname
  );

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {isFooterVisible && <Footer />}
    </div>
  );
}

export default App;
