import { Link } from "react-router-dom";
import Button from "../../components/Button";

import { Container, NavContainer, Nav } from "./styles";

const HeaderLogged: React.FC = () => {
  const links = [
    {
      link: "#",
      name: "Menu Item",
    },
    {
      link: "#",
      name: "Menu Item",
    },
    {
      link: "#",
      name: "Menu Item",
    },
  ];

  return (
    <Container>
      <NavContainer>
        <img src="/assets/logo.svg" alt="Escola Mundial" />
        <Nav>
          {links?.map((link, index) => (
            <Link to={link?.link} key={index}>
              {link?.name}
            </Link>
          ))}
        </Nav>
      </NavContainer>

      <Button>Perfil</Button>
    </Container>
  );
};

export default HeaderLogged;
