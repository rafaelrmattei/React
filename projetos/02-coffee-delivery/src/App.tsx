import { ThemeContextProvider } from "./contexts/Theme/ThemeContextProvider"
import { LocationContextProvider } from "./contexts/Location/LocationContextProvider";
import { CartContextProvider } from "./contexts/Cart/CartContextProvider"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ToastContainer } from 'react-toastify';

export function App() {
  return (
    <ThemeContextProvider>
      <LocationContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Router></Router>
          </BrowserRouter>
        </CartContextProvider>
      </LocationContextProvider>
      <ToastContainer />
    </ThemeContextProvider>
  )
}