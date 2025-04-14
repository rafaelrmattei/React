import { ShoppingCart } from "phosphor-react";
import { Container, Tags, Title, Description, Control, Price } from "./styles";
import { QuantityInput } from "../Form/QuantityInput";

interface CoffeeProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: CoffeeProps) {
  return (
    <Container>
      <img src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map(tag => (
          <span>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(coffee.price)}
          </span>
        </Price>

        <QuantityInput></QuantityInput>

        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>

      </Control>
    </Container>
  )
}