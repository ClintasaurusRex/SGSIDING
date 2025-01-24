import "./App.css";
import { Button } from "./components/ui/button";
import Navbar from "./components/ui/Navbar";
import Siding from "./components/ui/Siding";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Siding />
      </div>
      <Button onClick={() => console.log("Clicked")}>Click me</Button>
    </>
  );
}

export default App;
