import { InputHTMLAttributes } from "react"
import { Container } from "./styles"
import { Plus, Minus } from "phosphor-react"

interface QuantityInputProps extends InputHTMLAttributes<HTMLInputElement> {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({ quantity, incrementQuantity, decrementQuantity, ...props }: QuantityInputProps) {
  return (
    <Container>
      <button onClick={incrementQuantity}>
        <Minus size={14} />
      </button>

      <input type="number" min="1" value={quantity} {...props} />

      <button onClick={decrementQuantity}>
        <Plus size={14} />
      </button>
    </Container>
  )
}