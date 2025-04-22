import { NavLink } from "react-router-dom";
import { Issue } from "../..";
import { Container, Header, Description } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { memo } from "react";

interface IssueProps {
  issue: Issue;
}

function CardComponent({ issue }: IssueProps) {
  return (
    <Container>
      <NavLink to={`/issue/${issue.number}`}>
        <Header>
          <h1>{issue.title}</h1>
          <span>
            {issue.updated_at &&
              formatDistanceToNow(new Date(issue.updated_at), {
                addSuffix: true,
                locale: ptBR,
              })}
          </span>
        </Header>
        <Description>{issue.body}</Description>
      </NavLink>
    </Container>
  );
}

export const Card = memo(CardComponent);
