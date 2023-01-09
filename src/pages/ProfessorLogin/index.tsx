import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import ImageContainer from "../../container/ImageContainer";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container, LoginContainer, Input, InputContainer } from "./styles";

const ProfessorLogin: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleProfLogin = async () => {
    if (email && password) {
      const isLogged = await auth.login(email, password, "professor");
      if (isLogged) {
        navigate("/dashboard");
      } else {
        alert("Login inválido.");
      }
    }
  };

  return (
    <Container>
      <ImageContainer>
        <LoginContainer>
          <h2>Entrar como professor</h2>

          <div>
            <InputContainer>
              <span>Email:</span>
              <Input
                type="email"
                placeholder="exemplo@email.com"
                onChange={(e) => setEmail(e?.target?.value)}
              />
            </InputContainer>
            <InputContainer>
              <span>Senha:</span>
              <Input
                type="password"
                placeholder="Sua senha"
                onChange={(e) => setPassword(e?.target?.value)}
              />
            </InputContainer>

            <Button onClick={handleProfLogin} className="login__button">
              Entrar
            </Button>
          </div>
        </LoginContainer>
      </ImageContainer>
    </Container>
  );
};

export default ProfessorLogin;
