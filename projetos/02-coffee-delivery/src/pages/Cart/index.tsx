import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Trash } from "phosphor-react";
import { Container, Content, Resume, Adress, Form, Payment, Title, Subtitle, Methods, Product, Totals } from "./styles";
import { useTheme } from "styled-components";
import { Radio } from "../../components/Form/Radio";
import { TextField } from "../../components/Form/TextField";
import { QuantityInput } from "../../components/Form/QuantityInput";

export function Cart() {
  const theme = useTheme();

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
            <TextField placeholder="CEP" containerProps={{ style: { gridArea: 'cep' } }}></TextField>
            <TextField placeholder="Rua" containerProps={{ style: { gridArea: 'street' } }}></TextField>
            <TextField placeholder="Número" containerProps={{ style: { gridArea: 'number' } }}></TextField>
            <TextField placeholder="Complemento" containerProps={{ style: { gridArea: 'fullAddress' } }} isOptional={true}></TextField>
            <TextField placeholder="Bairro" containerProps={{ style: { gridArea: 'neighborhood' } }}></TextField>
            <TextField placeholder="Cidade" containerProps={{ style: { gridArea: 'city' } }}></TextField>
            <TextField placeholder="UF" containerProps={{ style: { gridArea: 'state' } }}></TextField>
          </Form>
        </Adress>

        <Payment>
          <Subtitle>
            <CurrencyDollar size={22} color={theme["purple"]} />
            <div>
              <h3>Pagamento</h3>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </Subtitle>

          <Methods>
            <Radio name="payment-method" id="payment-cc">
              <CreditCard size={16} />
              <span><span>Cartão de </span>crédito</span>
            </Radio>
            <Radio name="payment-method" id="payment-cd">
              <Bank size={16} />
              <span><span>Cartão de </span>débito</span>
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
            <Product>
              <img src="/images/coffees/americano.png" alt="Americano" />

              <div>
                <div className="infos">
                  <span>Americano</span>
                  <strong>R$ 9,90</strong>
                </div>
                <div className="actions">
                  <QuantityInput></QuantityInput>
                  <button type="submit">
                    <Trash size={16} />
                    Remover
                  </button>
                </div>
              </div>
            </Product>

            <Product>
              <img src="/images/coffees/arabe.png" alt="Arabe" />

              <div>
                <div className="infos">
                  <span>Arabe</span>
                  <strong>R$ 19,80</strong>
                </div>
                <div className="actions">
                  <QuantityInput></QuantityInput>
                  <button type="submit">
                    <Trash size={16} />
                    Remover
                  </button>
                </div>
              </div>
            </Product>
          </div>

          <Totals>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </Totals>

          <input type="submit" value="Confirmar Pedido" />
        </Resume>
      </Content>
    </Container>
  )
}