import './App.css'
import { db } from './services/firebase';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { CartProvider } from './context/CartContext';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartContainer } from './components/Cart/CartContainer';
import { Contacto } from './components/Contacto';
import { Checkout } from './components/Checkout';


function App() {

  return (
    <>

      <CartProvider>

        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a TechStore!' />} />
          <Route path='/category/:type' element={<ItemListContainer greeting='Estas en la categoría ' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/cart' element={<CartContainer/>} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>


      </CartProvider>
    </>
  )
}

export default App