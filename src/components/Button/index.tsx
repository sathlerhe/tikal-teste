import { ReactNode } from "react";
import { Container } from "./styles";

interface IButton {
  children: ReactNode;
  className?: string;
}
const Button: React.FC<IButton> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default Button;
