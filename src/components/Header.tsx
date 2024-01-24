import React, {useContext, useState} from "react";
import Moavle from "./Moavle";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../pages/About";
import "../styles/Header.css"
import { ThemeContext } from "../contexts/ThemeContextHelper";

export default function Header() {
  const theme = useContext(ThemeContext)
  //Asign theme to create styles
  const className = theme.theme;

  return(
    <div> 
      <Router>
        <nav className={'nav-' + className}>
          <ul>
              <li>
                  <Link to="/" className={'a-' + className}>Demo Moveable</Link>
              </li>
                <li>
                  <Link to="/about" className={'a-' + className}>About Moveable</Link>
              </li>
              <input
                type="checkbox"
                checked={ theme.theme === 'dark'}
                onChange={(e) => {
                  theme.setTheme(e.target.checked ? 'dark' : 'light')
                }}
              />
             <a className={'a-' + className}>Dark Mode</a>
          </ul>
        </nav> 
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Moavle/>} />
        </Routes>
      </Router> 
    </div>
  );
}
