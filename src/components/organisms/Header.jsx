import {useContext} from "react";
import Moavle from "../molecules/Moavle"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../../styles/Header.css"
import { ThemeContext } from "../../contexts/ThemeContextHelper";
import { Products } from "./Products";
import { products as initialProducts } from '../../mocks/products.json'


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
                  <Link to="/Products" className={'a-' + className}>Products</Link>
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
          <Route path="/products" element={<Products products={initialProducts} />} />
          <Route path="/" element={<Moavle/>} />
        </Routes>
      </Router> 
    </div>
  );
}
