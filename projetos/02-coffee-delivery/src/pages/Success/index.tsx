import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { Container, Title, GradientBorder, Content, Resume, Banner, Icon } from "./styles";

export function Success() {
  return (
    <Container>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </Title>

      <Content>
        <GradientBorder>
          <Resume>
            <div className="item">
              <Icon backgroundColor="yellow">
                <MapPin size={16} weight="fill" />
              </Icon>
              <div>
                <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>

            <div className="item">
              <Icon backgroundColor="purple">
                <Timer size={16} weight="fill" />
              </Icon>
              <div>
                <span>Previsão de entrega</span>
                <span><strong>20 min - 30 min</strong></span>
              </div>
            </div>

            <div className="item">
              <Icon backgroundColor="yellow-dark">
                <CurrencyDollar size={16} />
              </Icon>
              <div>
                <span>Pagamento na entrega</span>
                <span><strong>Cartão de Crédito</strong></span>
              </div>
            </div>
          </Resume>
        </GradientBorder>

        <Banner>
          <img src="/images/banner-success.svg" alt="Sucesso!" />
        </Banner>
      </Content>
    </Container>
  )
}