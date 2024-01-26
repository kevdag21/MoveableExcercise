import './styles/index.css'
import Header from "./components/organisms/Header";
import { CartProvider } from "./contexts/CartProvider";
import { Cart } from "./components/organisms/Cart";

export default function App() {
  return(     
       <CartProvider>
         <Cart />
        <Header/>
      </CartProvider>
  );
}
