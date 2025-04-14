import { useState } from "react"
import { Container } from "./styles"
import { Plus, Minus } from "phosphor-react"

export function QuantityInput() {
  const [quantityCount, setQuantityCount] = useState(0)

  function handlePrev() {
    setQuantityCount((state) => Math.max(0, state - 1));
  }

  function handleNext() {
    setQuantityCount((state) => state + 1)
  }

  return (
    <Container>
      <button
        className="prev"
        onClick={handlePrev}
        aria-label="Diminuir quantidade"
      >
        <Minus size={14} />
      </button>

      <input
        type="number"
        min="0"
        value={quantityCount === 0 ? "" : quantityCount}
        readOnly
      >
      </input>

      <button
        className="next"
        onClick={handleNext}
        aria-label="Aumentar quantidade"
      >
        <Plus size={14} />
      </button>
    </Container>
  )
}