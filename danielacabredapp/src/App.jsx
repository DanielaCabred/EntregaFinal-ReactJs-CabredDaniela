import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import ItemListContainer from './Components/ItemListContainer';
import ItemList from './Components/ItemList';
import ItemCount from './Components/ItemCount';
import Footer from './Components/Footer';


function App() {
  return (
    <div className= "container-fluid">
      <Header/>
      <Carousel/>
      <ItemListContainer greeting ={<ItemList/>}/>
      <ItemCount initial={1} stock={50} agregarAlCarrito={(cantidad) => console.log('cantidad agregada ' , cantidad)}/>
      <Footer/>
    </div>
  );
}

export default App;
