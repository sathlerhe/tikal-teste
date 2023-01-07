import { useState } from "react";

import Button from "../../components/Button";
import ImageContainer from "../../container/ImageContainer";
import { Container, LoginContainer, Input, InputContainer } from "./styles";

const StudentLogin: React.FC = () => {
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();

  return (
    <Container>
      <ImageContainer>
        <LoginContainer>
          <h2>Entrar como aluno</h2>

          <form>
            <InputContainer>
              <span>Email:</span>
              <Input
                type="email"
                placeholder="exemplo@email.com"
                onChange={(e) => setEmail(e?.target?.value)}
                required
              />
            </InputContainer>
            <InputContainer>
              <span>Senha:</span>
              <Input
                type="password"
                placeholder="Sua senha"
                onChange={(e) => setPassword(e?.target?.value)}
                required
              />
            </InputContainer>

            <Button className="login__button">Entrar</Button>
          </form>
        </LoginContainer>
      </ImageContainer>
    </Container>
  );
};

export default StudentLogin;
