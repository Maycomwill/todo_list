import { TextStyled } from "./styles";

export interface IText {
  children: string;
  color: "azul" | "branca" | "vermelha" | "black";
  weight: "regular" | "bold" | "black";
  size: "sm" | "md" | "lg" | "xl";
}

export default function Text({ children, color, weight, size }: IText) {
  return (
    <TextStyled color={color} weight={weight} size={size}>
      {children}
    </TextStyled>
  );
}
