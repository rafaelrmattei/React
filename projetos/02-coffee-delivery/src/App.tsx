import { BrowserRouter } from "react-router-dom"
import { ThemeContextProvider } from "./contexts/Theme/ThemeContextProvider"
import { CartContextProvider } from "./contexts/Cart/CartContextProvider"
import { Router } from "./Router"
import { ToastContainer } from 'react-toastify';

export function App() {
  return (
    <ThemeContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </CartContextProvider>
      <ToastContainer />
    </ThemeContextProvider>
  )
}