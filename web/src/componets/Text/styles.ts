import styled from "styled-components";
import { IText } from "./Text";

function handleSize(size: string) {
  switch (size) {
    case "sm":
      return "10px";
    case "md":
      return "16px";
    case "lg":
      return "24px";
    case "xl":
      return "32px";
  }
}

function handleWeight(weight: string) {
  switch (weight) {
    case "regular":
      return 400;
    case "bold":
      return 700;
    case "black":
      return 900;
  }
}

function handleColor(color: string) {
  switch (color) {
    case "azul":
      return "#4ECDC4";
    case "branca":
      return "#F7FFF7";
    case "vermelha":
      return "#FF6B6B";
    case "black":
      return "#000";
    case undefined:
      return "#000";
  }
}

export const TextStyled = styled.span<IText>`
  font-size: ${({ size }) => handleSize(size)};
  font-weight: ${({ weight }) => handleWeight(weight)};
  color: ${({ color }) => handleColor(color)};
`;
