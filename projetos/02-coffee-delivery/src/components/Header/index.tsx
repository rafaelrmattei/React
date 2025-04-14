import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart, SunDim, Moon } from 'phosphor-react'
import { Container } from './styles.ts'
import { ThemeContext } from '../../contexts/ThemeContext.tsx'

export function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <Container>
      <NavLink to="/">
        <img src="/images/coffee-delivery-logo.svg" alt="" />
      </NavLink>
      <nav>
        <NavLink id="adress-button" to="#" title="Endereço de entrega">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </NavLink>
        <NavLink id="cart-button" to="/cart" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          <span></span>
        </NavLink>
        {isDarkMode ? (
          <button id="theme-button-light" onClick={toggleTheme} title="Trocar tema">
            <SunDim size={22} />
          </button>
        ) : (
          <button id="theme-button-dark" onClick={toggleTheme} title="Trocar tema">
            <Moon size={22} />
          </button>
        )}
      </nav>
    </Container>
  )
}