import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Routes,Route, useLocation } from 'react-router-dom';
import { Products } from './Components/Products';
import { ProductDetails } from './Components/ProductDetails';
import { Cart } from './Components/Cart';
import About from './Components/About';
import { Register } from './Components/Register';
import { Login } from './Components/Login';
function App() {
  const location = useLocation()
  return (
    <div className="app">

      {/* {location.pathname !=="/login" && <Navbar/>} */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/register' element={<Register/>}/>



      </Routes>
     
    </div>
  );
}

export default App;
