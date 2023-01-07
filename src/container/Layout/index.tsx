import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

import HeaderLogged from "../HeaderLogged";
import HeaderUnlogged from "../HeaderUnlogged";
import { Container } from "./styles";

interface ILayout {
  children: ReactNode;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  const auth = useContext(AuthContext);
  const isLogged = auth.user;
  return (
    <Container>
      {isLogged ? <HeaderLogged /> : <HeaderUnlogged />}
      {children}
    </Container>
  );
};

export default Layout;
