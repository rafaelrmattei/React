import { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { Plus, Minus } from "phosphor-react";

interface QuantityInputProps extends InputHTMLAttributes<HTMLInputElement> {
  quantity: number;
  decrementQuantity: () => void;
  incrementQuantity: () => void;
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
  ...props
}: QuantityInputProps) {
  return (
    <Container>
      <button type="button" onClick={decrementQuantity}>
        <Minus size={14} />
      </button>

      <input type="number" min="1" value={quantity} {...props} />

      <button type="button" onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </Container>
  );
}
