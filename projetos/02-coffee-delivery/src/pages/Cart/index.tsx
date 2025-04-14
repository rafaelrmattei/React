import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { Container, Content, Resume, Adress, Form, Payment, Title, Subtitle, Methods } from "./styles";
import { useTheme } from "styled-components";
import { Radio } from "../../components/Form/Radio";
import { TextField } from "../../components/Form/TextField";

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
              <span>Cartão de crédito</span>
            </Radio>
            <Radio name="payment-method" id="payment-cd">
              <Bank size={16} />
              <span>Cartão de débito</span>
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

        </Resume>
      </Content>
    </Container>
  )
}