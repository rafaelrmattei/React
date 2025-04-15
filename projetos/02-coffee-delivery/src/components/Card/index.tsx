import { useContext, useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { Container, Tags, Title, Description, Control, Price } from "./styles";
import { QuantityInput } from "../Form/QuantityInput";
import { CartContext } from "../../contexts/Cart/CartContext";

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
  const { handleSetItems } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function handleIncrementQuantity() {
    setQuantity((state) => Math.max(1, state - 1));
  }

  function handleDecrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleAddItem() {
    handleSetItems({
      id: coffee.id,
      quantity: quantity
    })
  }

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

        <QuantityInput
          quantity={quantity}
          incrementQuantity={handleIncrementQuantity}
          decrementQuantity={handleDecrementQuantity}
        >
        </QuantityInput>

        <button onClick={handleAddItem}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </Control>
    </Container>
  )
}