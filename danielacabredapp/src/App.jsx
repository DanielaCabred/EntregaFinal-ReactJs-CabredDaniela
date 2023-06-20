import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import { CartProvider } from './Context/CartContext';


function App() {
  return (
    <div className= "container-fluid">
      <BrowserRouter> 
      <CartProvider>
      <Header/>
      <Carousel/>
      <Routes>
        <Route path = {'/'} element = {<ItemListContainer/>}/>
        <Route path ={'/category/:id'} element = {<ItemListContainer/>}/>
        <Route path = {'/Item/:itemId'} element = {<ItemDetailContainer/>}/>
        <Route parth = {'/Cart'} element = {<Cart/>}/>
        <Route path = '*'element ={<h1 className='text-center my-5'><strong>ERROR 404 NOT FOUND</strong> </h1>}/>
      </Routes>
      <Footer/>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
