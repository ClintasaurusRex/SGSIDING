import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";
import Loading from "./components/ui/Loading";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useLoading } from "./hooks/useLoading";

function App() {
  const isLoading = useLoading();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
