import { Header, Profile, Name, Description, Extras, Form, Posts } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Card } from "./components/Card";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Header>
        <img src="https://github.com/rafaelrmattei.png" alt="" />

        <Profile>
          <Name>
            <h1>Cameron Williamson</h1>
            <NavLink to="https://github" target="_blank">
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </NavLink>
          </Name>

          <Description>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
            pulvinar vel mass.
          </Description>

          <Extras>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>cameronwll</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </div>
          </Extras>
        </Profile>
      </Header>

      <Form>
        <div>
          <h1>Publicações</h1>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </Form>

      <Posts>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Posts>
    </div>
  );
}
