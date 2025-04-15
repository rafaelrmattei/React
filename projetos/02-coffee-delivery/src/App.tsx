import { BrowserRouter } from "react-router-dom"
import { ThemeContextProvider } from "./contexts/Theme/ThemeContextProvider"
import { CartContextProvider } from "./contexts/Cart/CartContextProvider"
import { Router } from "./Router"

export function App() {
  return (
    <ThemeContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </CartContextProvider>
    </ThemeContextProvider>
  )
}