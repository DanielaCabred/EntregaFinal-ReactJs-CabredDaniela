import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import { CartProvider } from './Context/CartContext';
import Checkout from './Components/Checkout';
import ThankYou from './Components/ThankYou';


function App() {
  return (
    <div className= "container-fluid">
      <CartProvider>
      <BrowserRouter> 
      <Header/>
      <Carousel/>
      <Routes>
        <Route path = {'/'} element = {<ItemListContainer/>}/>
        <Route path = {'/category/:id'} element = {<ItemListContainer/>}/>
        <Route path = {'/cart'} element = {<Cart/>}/>
        <Route path = {'/item/:id'} element = {<ItemDetailContainer/>}/>
        <Route path={'/checkout'} element = {<Checkout/>}/>
        <Route path={'/thankyou/:id'} element = {<ThankYou/>}/>
        <Route path = '*'element ={<h1 className='text-center my-5'><strong>ERROR 404 NOT FOUND</strong> </h1>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
