import { useTheme } from "styled-components";
import { Radio } from "../../components/Form/Radio";
import { TextField } from "../../components/Form/TextField";
import { QuantityInput } from "../../components/Form/QuantityInput";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/Cart/CartContext";
import { LocationContext } from "../../contexts/Location/LocationContext";
import { OrderContext } from "../../contexts/Order/OrderContext";
import { Order } from "../../contexts/Order/OrderContextProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from "phosphor-react";
import {
  Container,
  Content,
  Resume,
  Adress,
  Form,
  Payment,
  Title,
  Subtitle,
  Methods,
  Product,
  Totals,
  ButtonRemoveItem,
  Error,
} from "./styles";

const newCartFormValidationScheme = zod.object({
  cep: zod.string().nonempty("Campo cep é obrigatório"),
  street: zod.string().nonempty("Campo rua é obrigatório"),
  number: zod.string().nonempty("Campo número é obrigatório"),
  complement: zod.string().optional(),
  neighborhood: zod.string().nonempty("Campo bairro é obrigatório"),
  city: zod.string().nonempty("Campo cidade é obrigatório"),
  state: zod.string().nonempty("Campo UF é obrigatório"),
  paymentMethod: zod
    .string({
      required_error: "Selecione uma forma de pagamento",
      invalid_type_error: "Selecione uma forma de pagamento",
    })
    .min(1, "Selecione uma forma de pagamento"),
});

type CartFormData = zod.infer<typeof newCartFormValidationScheme>;

export function Cart() {
  const theme = useTheme();
  const {
    items,
    itemsQuantity,
    handleUpdateItemQuantity,
    handleRemoveItem,
    handleCleanCart,
  } = useContext(CartContext);
  const { handleAddOrder } = useContext(OrderContext);
  const { location } = useContext(LocationContext);
  const [totalItems, setTotalItems] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const { register, handleSubmit, formState, setValue } = useForm<CartFormData>(
    {
      resolver: zodResolver(newCartFormValidationScheme),
      defaultValues: {
        cep: "",
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
        paymentMethod: "",
      },
    }
  );
  const deliveryFee = 6;
  const isSubmitDisabled = itemsQuantity === 0;
  const navigate = useNavigate();

  function handleClickRemoveItem(id: string) {
    handleRemoveItem(id);
  }

  function handleClickIncrementQuantity(id: string, quantity: number) {
    handleUpdateItemQuantity(id, quantity);
  }

  function handleClickDecrementQuantity(id: string, quantity: number) {
    if (quantity > 0) {
      handleUpdateItemQuantity(id, quantity);
    }
  }

  function handleSubmitAddOrder(order: CartFormData) {
    const newOrder: Order = {
      items: items,
      adress: {
        cep: order.cep,
        street: order.street,
        number: order.number,
        neighborhood: order.neighborhood,
        city: order.city,
        state: order.state,
      },
      paymentMethod: order.paymentMethod,
    };

    handleAddOrder(newOrder);
    handleCleanCart();

    navigate("/success");
  }

  useEffect(() => {
    const total = items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalItems(total);
    setTotalOrder(total + deliveryFee);
    if (location[0]) {
      setValue("city", location[0].city || "");
      setValue("state", location[0].state || "");
    }
  }, [items, deliveryFee, location, setValue]);

  return (
    <form onSubmit={handleSubmit(handleSubmitAddOrder)} action="">
      <Container>
        <Content>
          <Title>Complete seu pedido</Title>

          <Adress>
            <Subtitle>
              <MapPinLine size={22} color={theme["yellow-dark"]} />
              <div>
                <h3>Endereço de Entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </Subtitle>

            <Form>
              <TextField
                placeholder="CEP"
                containerProps={{ style: { gridArea: "cep" } }}
                error={formState.errors.cep?.message}
                {...register("cep")}
              ></TextField>
              <TextField
                placeholder="Rua"
                containerProps={{ style: { gridArea: "street" } }}
                error={formState.errors.street?.message}
                {...register("street")}
              ></TextField>
              <TextField
                placeholder="Número"
                containerProps={{ style: { gridArea: "number" } }}
                error={formState.errors.number?.message}
                {...register("number")}
              ></TextField>
              <TextField
                placeholder="Complemento"
                containerProps={{ style: { gridArea: "complement" } }}
                isOptional={true}
                {...register("complement")}
              ></TextField>
              <TextField
                placeholder="Bairro"
                containerProps={{ style: { gridArea: "neighborhood" } }}
                error={formState.errors.neighborhood?.message}
                {...register("neighborhood")}
              ></TextField>
              <TextField
                placeholder="Cidade"
                containerProps={{ style: { gridArea: "city" } }}
                error={formState.errors.city?.message}
                {...register("city")}
              ></TextField>
              <TextField
                placeholder="UF"
                containerProps={{ style: { gridArea: "state" } }}
                error={formState.errors.state?.message}
                {...register("state")}
              ></TextField>
            </Form>
          </Adress>

          <Payment>
            <Subtitle>
              <CurrencyDollar size={22} color={theme["purple"]} />
              <div>
                <h3>Pagamento</h3>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </Subtitle>

            <Methods>
              <Radio
                id="payment-cc"
                value="Cartão de crédito"
                {...register("paymentMethod")}
              >
                <CreditCard size={16} />
                <span>
                  <span>Cartão de </span>crédito
                </span>
              </Radio>
              <Radio
                id="payment-cd"
                value="Cartão de débito"
                {...register("paymentMethod")}
              >
                <Bank size={16} />
                <span>
                  <span>Cartão de </span>débito
                </span>
              </Radio>
              <Radio
                id="payment-m"
                value="Dinheiro"
                {...register("paymentMethod")}
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
              <Error>{formState.errors.paymentMethod?.message}</Error>
            </Methods>
          </Payment>
        </Content>

        <Content>
          <Title>Cafés selecionados</Title>

          <Resume>
            <div>
              {items.map((item) => (
                <Product key={item.id}>
                  <img src={item.image} alt={item.title} />

                  <div>
                    <div className="infos">
                      <span>{item.title}</span>
                      <strong>
                        R${" "}
                        {new Intl.NumberFormat("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }).format(item.price * item.quantity)}
                      </strong>
                    </div>
                    <div className="actions">
                      <QuantityInput
                        quantity={item.quantity}
                        decrementQuantity={() =>
                          handleClickDecrementQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                        incrementQuantity={() =>
                          handleClickIncrementQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                      ></QuantityInput>
                      <ButtonRemoveItem
                        onClick={() => handleClickRemoveItem(item.id)}
                      >
                        <Trash size={16} />
                        Remover
                      </ButtonRemoveItem>
                    </div>
                  </div>
                </Product>
              ))}
            </div>

            <Totals>
              <div>
                <span>Total de itens</span>
                <span>
                  R${" "}
                  {new Intl.NumberFormat("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(totalItems)}
                </span>
              </div>

              <div>
                <span>Entrega</span>
                <span>
                  R${" "}
                  {new Intl.NumberFormat("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(deliveryFee)}
                </span>
              </div>

              <div>
                <strong>Total</strong>
                <strong>
                  R${" "}
                  {new Intl.NumberFormat("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(totalOrder)}
                </strong>
              </div>
            </Totals>

            <input
              type="submit"
              value="Confirmar Pedido"
              disabled={isSubmitDisabled}
            />
          </Resume>
        </Content>
      </Container>
    </form>
  );
}
