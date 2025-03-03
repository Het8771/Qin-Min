import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Single from "./components/Single";
import Chromatic from "./components/Chromatic";
import Diamond from "./components/Diamond";
import Earth from "./components/Earth";
import Forever from "./components/Forever";
import Multi from "./components/Multi";
import Book from "./components/Book";
import Opula from "./components/Opula";
import Rock from "./components/Rock";
import Foiltech from "./components/Foiltech";
import LUX from "./components/LUX";
import Stone from "./components/Stone";
import Wood from "./components/Wood";
import Serenity from "./components/Serenity";

 

function App() {

  return (
    <>
    <Router>
        <Header/>
        <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/About" element={<About/>} />
             <Route path="/Contact" element={<Contact/>} />
             <Route path="/Error" element={<Error/>} />
             <Route path="/Single" element={<Single/>} />
             <Route path="/chromatic" element={<Chromatic/>} />
             <Route path="/Diamond" element={<Diamond/>} />
             <Route path="/Earth" element={<Earth/>} />
             <Route path="/Forever" element={<Forever/>} />
             <Route path="/Multi" element={<Multi/>} />
             <Route path="/Book" element={<Book/>} />
             <Route path="/Opula" element={<Opula/>} />
             <Route path="/Rock" element={<Rock/>} />
             <Route path="/Foiltech" element={<Foiltech/>} />
             <Route path="/LUX" element={<LUX/>}/>
             <Route path="/Stone" element={<Stone/>}/>
             <Route path="/Wood" element={<Wood/>}/>
             <Route path="/Serenity" element={<Serenity/>}/>
            



        
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App;

