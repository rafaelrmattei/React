import { BannerContainer, BannerContent, InfoText, Heading, Infos, Info } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <InfoText>
          <Heading>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </Heading>

          <Infos>
            <Info iconColor="yellow-dark">
              <span id="cart">
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </Info>
            <Info iconColor="base-text">
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </Info>
            <Info iconColor="yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </Info>
            <Info iconColor="purple">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </Info>
          </Infos>
        </InfoText>

        <img src="/images/banner-index.svg" alt="Coffee Delivery" />
      </BannerContent>

      <img src="/images/banner-background.svg" id="bg-img" alt="" />
    </BannerContainer>
  )
}