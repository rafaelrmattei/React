import { ReactNode, useState } from "react"
import { ThemeContext } from "./ThemeContext"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../styles/global"
import { defaultTheme } from "../../styles/themes/default"
import { darkTheme } from "../../styles/themes/dark"

interface ThemeContextProviderProps {
  children: ReactNode
}

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