import {Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProductRegistration from './components/ProductRegistration';
import ProductDetails from './components/ProductDetails';
import ProductEdit from './components/ProductEdit';
function App() {
  return (
    <div className='container'>
    <div>
      <Navbar/>
    </div>
    <div><h2>Product crud application</h2>
         <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/register" element={<ProductRegistration/>}/>
          <Route path="/prodetails" element={<ProductDetails/>}/>
          <Route path="/prodetails/edit/:Prodid" element={<ProductEdit/>}/>
          </Routes>   
    </div>
    </div>
  );
}

export default App;
