import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Initiatives from "./components/Initiatives/Initiatives";
import Achievement from "./components/Achievement/Achievement";
import Events from "./components/Events/Events";
import Team from "./components/Team/Team";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Hero />
        <Initiatives />
        <Events />
        {/* <Achievement /> */}
        <Team />
        <Sponsors />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
