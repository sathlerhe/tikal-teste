import { Link } from "react-router-dom";

import { Container, Nav } from "./styles";

const HeaderUnlogged: React.FC = () => {
  const links = [
    {
      link: "/student-login",
      name: "Sou Aluno",
    },
    {
      link: "/professor-login",
      name: "Sou Professor",
    },
  ];

  return (
    <Container>
      <img src="/assets/logo.svg" alt="Escola Mundial" />
      <Nav>
        {links?.map((link, index) => (
          <Link to={link?.link} key={index}>
            {link?.name}
          </Link>
        ))}
      </Nav>
    </Container>
  );
};

export default HeaderUnlogged;
