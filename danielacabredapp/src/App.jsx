import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import ItemListContainer from './Components/ItemListContainer';
import ItemList from './Components/ItemList';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Footer from './Components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className= "container-fluid">
      <Header/>
      <Carousel/>
      <BrowserRouter>
      <Routes>
        <Route path = {'/'} element = {<ItemListContainer/>}/>
        <Route path = {'/Item/:itemId'} element = {<ItemDetailContainer/>}/>
        <Route path = '*'element ={<h1>ERROR 404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
