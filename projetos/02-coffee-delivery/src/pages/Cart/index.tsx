import { useTheme } from "styled-components";
import { Radio } from "../../components/Form/Radio";
import { TextField } from "../../components/Form/TextField";
import { QuantityInput } from "../../components/Form/QuantityInput";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/Cart/CartContext";
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
} from "./styles";

export function Cart() {
  const theme = useTheme();
  const { items, itemsQuantity, handleUpdateItemQuantity, handleRemoveItem } =
    useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const deliveryFee = 6;

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

  useEffect(() => {
    const total = items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalItems(total);
    setTotalOrder(total + deliveryFee);
  }, [items, deliveryFee]);

  return (
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
            ></TextField>
            <TextField
              placeholder="Rua"
              containerProps={{ style: { gridArea: "street" } }}
            ></TextField>
            <TextField
              placeholder="Número"
              containerProps={{ style: { gridArea: "number" } }}
            ></TextField>
            <TextField
              placeholder="Complemento"
              containerProps={{ style: { gridArea: "fullAddress" } }}
              isOptional={true}
            ></TextField>
            <TextField
              placeholder="Bairro"
              containerProps={{ style: { gridArea: "neighborhood" } }}
            ></TextField>
            <TextField
              placeholder="Cidade"
              containerProps={{ style: { gridArea: "city" } }}
            ></TextField>
            <TextField
              placeholder="UF"
              containerProps={{ style: { gridArea: "state" } }}
            ></TextField>
          </Form>
        </Adress>

        <Payment>
          <Subtitle>
            <CurrencyDollar size={22} color={theme["purple"]} />
            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Subtitle>

          <Methods>
            <Radio name="payment-method" id="payment-cc">
              <CreditCard size={16} />
              <span>
                <span>Cartão de </span>crédito
              </span>
            </Radio>
            <Radio name="payment-method" id="payment-cd">
              <Bank size={16} />
              <span>
                <span>Cartão de </span>débito
              </span>
            </Radio>
            <Radio name="payment-method" id="payment-m">
              <Money size={16} />
              <span>Dinheiro</span>
            </Radio>
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
                        handleClickDecrementQuantity(item.id, item.quantity - 1)
                      }
                      incrementQuantity={() =>
                        handleClickIncrementQuantity(item.id, item.quantity + 1)
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
            disabled={itemsQuantity === 0}
          />
        </Resume>
      </Content>
    </Container>
  );
}
