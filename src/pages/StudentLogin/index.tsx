import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import ImageContainer from "../../container/ImageContainer";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container, LoginContainer, Input, InputContainer } from "./styles";

const StudentLogin: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();

  const handleStudentLogin = async () => {
    if (email && password) {
      const isLogged = await auth.login(email, password, "student");
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
          <h2>Entrar como aluno</h2>

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

            <Button onClick={handleStudentLogin} className="login__button">
              Entrar
            </Button>
          </div>
        </LoginContainer>
      </ImageContainer>
    </Container>
  );
};

export default StudentLogin;
