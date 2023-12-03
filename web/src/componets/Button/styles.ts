import styled from "styled-components";
import { IButton } from "./Button";
import { darken } from "polished";

function handleBackground(variant: string) {
  switch (variant) {
    case "primary":
      return "#4ECDC4";
    case "delete":
      return "#FF6B6B";
  }
}

function handleColor(variant: string) {
    switch (variant) {
      case "primary":
        return "#F7FFF7";
      case "delete":
        return "#F7FFF7";
    }
  }
  

export const ButtonStyled = styled.button<IButton>`
  border: 0;
  width: 25%;
  padding: 12px 2px;
  font-size: 24px;
  background-color: ${({ variant }) => handleBackground(variant)};

  color: ${({variant})=> handleColor(variant)};

  &:hover {
    background-color: ${({ variant }) =>
      darken(0.1, handleBackground(variant))};
  }
`;
