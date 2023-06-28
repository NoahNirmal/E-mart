import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import { Products } from './Components/Products';
import { ProductDetails } from './Components/ProductDetails';
import { Cart } from './Components/Cart';
function App() {
  return (
    <div className="app">
            <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>



      </Routes>
     
    </div>
  );
}

export default App;
