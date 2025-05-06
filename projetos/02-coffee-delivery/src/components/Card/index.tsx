import { useContext, useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { Container, Tags, Title, Description, Control, Price } from "./styles";
import { QuantityInput } from "../Form/QuantityInput";
import { CartContext } from "../../contexts/Cart/CartContext";
import { toast } from "react-toastify";

interface CoffeeProps {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
}

export function Card({ coffee }: CoffeeProps) {
  const { handleSetItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  function handleDecrementQuantity() {
    setQuantity((state) => Math.max(1, state - 1));
  }

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleAddItem() {
    handleSetItems({
      id: coffee.id,
      image: coffee.image,
      title: coffee.title,
      price: coffee.price,
      quantity: quantity,
    });
    setQuantity(1);
    toast.success(
      <div>
        <strong>{`${quantity}x ${coffee.title}`}</strong>
        <br />
        <span>Adicionado ao carrinho</span>
      </div>,
      {
        position: "top-right",
        autoClose: 1750,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      }
    );
  }

  return (
    <Container>
      <img src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(coffee.price)}
          </span>
        </Price>

        <QuantityInput
          quantity={quantity}
          incrementQuantity={handleIncrementQuantity}
          decrementQuantity={handleDecrementQuantity}
        ></QuantityInput>

        <button onClick={handleAddItem}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </Control>
    </Container>
  );
}
