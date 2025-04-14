import { BrowserRouter } from "react-router-dom"
import { ThemeContextProvider } from "./contexts/ThemeContext"
import { Router } from "./Router"

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}