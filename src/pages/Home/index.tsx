import ImageContainer from "../../container/ImageContainer";
import { Container, LinkComponent, LinksContainer } from "./styles";

const Home: React.FC = () => {
  const links = [
    {
      link: "/student-login",
      name: "Entrar como aluno",
    },
    {
      link: "/professor-login",
      name: "Entrar como professor",
    },
  ];

  return (
    <Container>
      <ImageContainer>
        <LinksContainer>
          {links?.map((link, index) => (
            <LinkComponent to={link?.link}>{link?.name}</LinkComponent>
          ))}
        </LinksContainer>
      </ImageContainer>
    </Container>
  );
};

export default Home;
