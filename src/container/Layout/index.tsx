import { ReactNode } from "react";

import HeaderLogged from "../HeaderLogged";
import HeaderUnlogged from "../HeaderUnlogged";
import { Container } from "./styles";

interface ILayout {
  children: ReactNode;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  const logged = true;
  return (
    <Container>
      {logged ? <HeaderLogged /> : <HeaderUnlogged />}
      {children}
    </Container>
  );
};

export default Layout;
