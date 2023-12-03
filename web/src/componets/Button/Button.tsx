import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant: "primary" | "delete";
  fontSize?: "md" | "lg" | "xl"
}

function Button({ children, variant, fontSize, ...rest }: IButton) {
  return <ButtonStyled variant={variant} fontSize={fontSize} {...rest}>{children}</ButtonStyled>;
}

export default Button;
