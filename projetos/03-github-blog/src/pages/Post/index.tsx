import { NavLink } from "react-router-dom";
import { Header, Links, Title, Extras, Content } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Post() {
  return (
    <div>
      <Header>
        <Links>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </NavLink>
          <NavLink to="https://github.com" target="_blank">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </Links>

        <Title>JavaScript data types and data structures</Title>

        <Extras>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </div>
        </Extras>
      </Header>

      <Content>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list
        the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo = ‘bar’; // foo is now a string foo = true; // foo is now a boolean
      </Content>
    </div>
  );
}
