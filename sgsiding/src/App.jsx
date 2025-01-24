import React from "react";
import "./App.css";
import { Button } from "./components/ui/button";
// import { NavbarWithMegaMenu } from "./components/ui/Navbar";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <NavbarWithMegaMenu /> */}
      <Button onClick={() => console.log("Clicked")}>Click me</Button>
    </>
  );
}

export default App;
