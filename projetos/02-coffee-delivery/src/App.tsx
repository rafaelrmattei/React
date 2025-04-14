import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ThemeContextProvider } from "./contexts/ThemeContext"

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}