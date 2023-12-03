import styled from "styled-components";
import { IButton } from "./Button";
import { darken } from "polished";
import { TemaPadrao } from "../../styles/global";

function handleBackground(variant: string | undefined) {
  switch (variant) {
    case "primary":
      return TemaPadrao.primary;
    case "delete":
      return TemaPadrao.delete;
    case undefined:
      return "#000"
  }
}

function handleColor(variant: string) {
  switch (variant) {
    case "primary":
      return TemaPadrao.text;
    case "delete":
      return TemaPadrao.text;
  }
}

function handleFontSize(size: string | undefined) {
  switch (size) {
    case "md":
      return "16px";
    case "lg":
      return "20px";
    case "xl":
      return "24px";
    default:
      return "16px"
  }
}

export const ButtonStyled = styled.button<IButton>`
  border: 0;
  width: 100%;
  padding: 12px 2px;
  text-transform: capitalize;
  font-size: ${({ fontSize }) => handleFontSize(fontSize)};
  background-color: ${({ variant }) => handleBackground(variant)};
  border-radius: 8px;
  font-weight: bold;
  transition: background-color .15s cubic-bezier(0.165, 0.84, 0.44, 1);
  color: ${({ variant }) => handleColor(variant)};

  &:hover {
    background-color: ${({ variant }) =>
    darken(0.15, handleBackground(variant))};
  }
`;
