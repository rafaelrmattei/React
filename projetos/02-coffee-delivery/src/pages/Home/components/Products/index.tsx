import { Card } from "../../../../components/Card";
import { coffees } from "../../../../../data.json"
import { Container, List } from "./styles";

export function Products() {
  return (
    <Container>
      <h2>Nossos cafés</h2>
      <List>
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </List>
    </Container>
  )
}