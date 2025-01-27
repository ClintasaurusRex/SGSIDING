import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Siding from "./components/ui/Siding";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div>
        {/* <Siding /> */}
      </div>
    </>
  );
}

export default App;
