import { createContext } from "react"

interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)