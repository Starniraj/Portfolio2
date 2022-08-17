import "./App.css";
import Navigation from "./Component/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/about";
import Project from "./Pages/Project";
import Resume from "./Pages/Resume";
import Icon from "./Pages/Icon";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
        <br />
        <Icon />
      </div>
    </div>
  );
}

export default App;
