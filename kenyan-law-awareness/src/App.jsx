import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Constitution from "./Pages/Constitution.jsx";
import Resources from "./Pages/Resources.jsx";

function App() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <nav>
        <h3>SHERIA</h3>

        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/constitution">Constitution</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <button>Learn More</button>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/constitution" element={<Constitution />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      
    </div>
  );
}

export default App;
