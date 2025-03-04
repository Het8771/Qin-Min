import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/ContactUs";
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
import CarvingMatt from "./components/CarvingMatt";
import Grano from "./components/Grano";
import Highgloss from "./components/Highgloss";
import Highpolished from "./components/Highpolished";
import Luxsurface from "./components/Luxsurface";
import Polished from "./components/Polished";
import Superwhite from "./components/Superwhite";

function App() {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/About" element={<About/>} />
             <Route path="/ContactUs" element={<Contact/>} />
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
             <Route path="/1200x2400/CarvingMatt" element={<CarvingMatt />} />
             <Route path="/1200x2400/Grano" element={<Grano/>} />
             <Route path="/1200x2400/Highgloss" element={<Highgloss/>} />
             <Route path="/1200x2400/Highpolished" element={<Highpolished/>} />
             <Route path="/1200x2400/Luxsurface" element={<Luxsurface/>} />
             <Route path="/1200x2400/Polished" element={<Polished/>} />
             <Route path="/1200x2400/Superwhite" element={<Superwhite/>} />
             <Route path="/1200x1800/CarvingMatt" element={<CarvingMatt />} />
             <Route path="/1200x1800/Grano" element={<Grano/>} />
             <Route path="/1200x1800/Highgloss" element={<Highgloss/>} />
             <Route path="/1200x1800/Highpolished" element={<Highpolished/>} />
             <Route path="/1200x1800/Luxsurface" element={<Luxsurface/>} />
             <Route path="/1200x1800/Polished" element={<Polished/>} />
             <Route path="/1200x1800/Superwhite" element={<Superwhite/>} />
             <Route path="/800x2400/CarvingMatt" element={<CarvingMatt />} />
             <Route path="/800x2400/Grano" element={<Grano/>} />
             <Route path="/800x2400/Highgloss" element={<Highgloss/>} />
             <Route path="/800x2400/Highpolished" element={<Highpolished/>} />
             <Route path="/800x2400/Luxsurface" element={<Luxsurface/>} />
             <Route path="/800x2400/Polished" element={<Polished/>} />
             <Route path="/800x2400/Superwhite" element={<Superwhite/>} />
             <Route path="/800x1600/CarvingMatt" element={<CarvingMatt />} />
             <Route path="/800x1600/Grano" element={<Grano/>} />
             <Route path="/800x1600/Highgloss" element={<Highgloss/>} />
             <Route path="/800x1600/Highpolished" element={<Highpolished/>} />
             <Route path="/800x1600/Luxsurface" element={<Luxsurface/>} />
             <Route path="/800x1600/Polished" element={<Polished/>} />
             <Route path="/800x1600/Superwhite" element={<Superwhite/>} />
             <Route path="/600x1200/CarvingMatt" element={<CarvingMatt />} />
             <Route path="/600x1200/Grano" element={<Grano/>} />
             <Route path="/600x1200/Highgloss" element={<Highgloss/>} />
             <Route path="/600x1200/Highpolished" element={<Highpolished/>} />
             <Route path="/600x1200/Luxsurface" element={<Luxsurface/>} />
             <Route path="/600x1200/Polished" element={<Polished/>} />
             <Route path="/600x1200/Superwhite" element={<Superwhite/>} />
             <Route path="/600x600/CarvingMatt" element={<CarvingMatt />} />
             <Route path="/600x600/Grano" element={<Grano/>} />
             <Route path="/600x600/Highgloss" element={<Highgloss/>} />
             <Route path="/600x600/Highpolished" element={<Highpolished/>} />
             <Route path="/600x600/Luxsurface" element={<Luxsurface/>} />
             <Route path="/600x600/Polished" element={<Polished/>} />
             <Route path="/600x600/Superwhite" element={<Superwhite/>} />
             <Route path="/400x400/CarvingMatt" element={<CarvingMatt />} />
             <Route path="/400x400/Grano" element={<Grano/>} />
             <Route path="/400x400/Highgloss" element={<Highgloss/>} />
             <Route path="/400x400/Highpolished" element={<Highpolished/>} />
             <Route path="/400x400/Luxsurface" element={<Luxsurface/>} />
             <Route path="/400x400/Polished" element={<Polished/>} />
             <Route path="/400x400/Superwhite" element={<Superwhite/>} />
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App;

