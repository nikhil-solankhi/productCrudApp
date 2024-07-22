import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ProductRegistration from "./components/ProductRegistraion/ProductRegistration";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductEdit from "./components/ProductEdit/ProductEdit";
import Carousel from "./components/Crousal";
function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        <div></div>
        <div>
          <h2>Product crud application</h2>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<ProductRegistration />} />
            <Route path="/prodetails" element={<ProductDetails />} />
            <Route path="/prodetails/edit/:Prodid" element={<ProductEdit />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
