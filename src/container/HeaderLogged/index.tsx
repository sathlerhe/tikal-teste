import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import { Container, NavContainer, Nav } from "./styles";

const HeaderLogged: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

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
        <Link to="/dashboard">
          <img src="/assets/logo.svg" alt="Escola Mundial" />
        </Link>
        <Nav>
          {links?.map((link, index) => (
            <Link to={link?.link} key={index}>
              {link?.name}
            </Link>
          ))}
        </Nav>
      </NavContainer>

      <Button onClick={() => handleNavigate("/profile")}>Perfil</Button>
    </Container>
  );
};

export default HeaderLogged;
