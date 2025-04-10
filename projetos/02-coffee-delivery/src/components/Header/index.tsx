import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer } from './styles.ts'
import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={CoffeeDeliveryLogo} alt="" />
      </NavLink>
      <nav>
        <NavLink to="#" title="Endereço de entrega">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </NavLink>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}