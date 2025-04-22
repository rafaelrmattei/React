import { Container, Description, Profile, Name, Extras } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { memo, useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface Profile {
  html_url?: string;
  name?: string;
  avatar?: string;
  bio?: string;
  login?: string;
  followers?: number;
}

function HeaderComponent() {
  const [profile, setProfile] = useState<Profile>({});

  const getProfile = useCallback(async () => {
    const response = await api.get("users/rafaelrmattei");
    if (response.status === 200) {
      setProfile({
        html_url: response.data.html_url,
        name: response.data.name,
        avatar: response.data.avatar_url,
        bio: response.data.bio,
        login: response.data.login,
        followers: response.data.followers,
      });
    }
  }, []);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <Container>
      <img src={profile.avatar} alt={profile.name} />

      <Profile>
        <Name>
          <h1>{profile.name}</h1>
          <NavLink to={profile.html_url || "#"} target="_blank">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </Name>

        <Description>{profile.bio}</Description>

        <Extras>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{profile.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{profile.followers === 1 ? `${profile.followers} seguidor` : `${profile.followers} seguidores`}</span>
          </div>
        </Extras>
      </Profile>
    </Container>
  );
}

export const Header = memo(HeaderComponent);
