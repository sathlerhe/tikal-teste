import { ReactNode } from "react";
import { Container, ImgContainer, ChildContainer } from "./styles";

interface IImageContainer {
  children: ReactNode;
}
const ImageContainer: React.FC<IImageContainer> = ({ children }) => {
  return (
    <Container>
      <ImgContainer
        style={{
          background: `url(/assets/school_img.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <ChildContainer>{children}</ChildContainer>
    </Container>
  );
};

export default ImageContainer;
