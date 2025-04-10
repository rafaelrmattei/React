import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles.ts'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src="/images/coffee-delivery-logo.svg" alt="" />
      </NavLink>
      <nav>
        <NavLink to="#" title="Endereço de entrega">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </NavLink>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          <span></span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}