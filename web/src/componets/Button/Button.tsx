import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant: "primary" | "delete" 
}

function Button({ children, variant, ...rest }: IButton) {
  return <ButtonStyled variant={variant} {...rest}>{children}</ButtonStyled>;
}

export default Button;
