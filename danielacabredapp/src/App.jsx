import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Footer from './Components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className= "container-fluid">
      <BrowserRouter>  
      <Header/>
      <Carousel/>
      <Routes>
        <Route path = {'/'} element = {<ItemListContainer/>}/>
        <Route path ={'/category/:id'} element = {<ItemListContainer/>}/>
        <Route path = {'/Item/:itemId'} element = {<ItemDetailContainer/>}/>
        <Route path = '*'element ={<h1 className='text-center my-5'><strong>ERROR 404 NOT FOUND</strong> </h1>}/>
      </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
