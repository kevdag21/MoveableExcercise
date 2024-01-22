import React from "react";
import Moavle from "./Moavle";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../pages/About";
import "../styles/Header.css"

export default function App() {
  return(
    <Router>
      <nav>
        <ul>
             <li>
                <Link to="/">Inicio</Link>
             </li>
              <li>
                <Link to="/about">Acerca de</Link>
             </li>
              <li>
                <Link to="/moavle">Demo Moavle</Link>
             </li>
        </ul>
       </nav> 
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/moavle" element={<Moavle/>} />
        <Route path="/"></Route>
      </Routes>
    </Router>
  );
}
