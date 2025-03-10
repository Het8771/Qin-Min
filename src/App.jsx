import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Export from "./components/Export";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Blog from "./components/Blog";
import Singlep from "./components/Singlep";
import Singleb from "./components/Singleb";


function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Export" element={<Export/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Singlep" element={<Singlep/>} />
        <Route path="/Singleb" element={<Singleb/>} />
           
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App;

