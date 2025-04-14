import { createContext, ReactNode, useState } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global"
import { defaultTheme } from "../styles/themes/default"
import { darkTheme } from "../styles/themes/dark"

interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
}

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleTheme() {
    if (isDarkMode) {
      setIsDarkMode(false)
    } else {
      setIsDarkMode(true)
    }
  }

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleTheme
    }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}