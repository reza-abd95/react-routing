import {

  Routes,
  Route,
} from "react-router-dom";
import './styles/App.css'

import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { ProductsDetails } from "./components/ProductsDetails";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";


function App() {
  return (
    <div className="app">

        <Header/> 
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:id" element={<ProductsDetails/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound/>}/>
           
          </Routes>
        <Footer/>
        


    </div>

  );
}
export default App
