import { ReactNode } from "react";
import { Container } from "./styles";

interface IButton {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
const Button: React.FC<IButton> = ({ children, className, onClick }) => {
  return (
    <Container onClick={onClick} className={className}>
      {children}
    </Container>
  );
};

export default Button;
