import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Constitution from "./Pages/Constitution.jsx";
import Wakili from "./Pages/Wakili.jsx";
function App() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <nav>
        <h3>SHERIA</h3>

        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/constitution">Constitution</NavLink>
          <NavLink to="/wakili">Wakili</NavLink>
          <a
            href="https://judiciary.go.ke/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Learn More</button>
          </a>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/constitution" element={<Constitution />} />
        <Route path="/wakili" element={<Wakili />} />
      </Routes>
    </div>
  );
}

export default App;
