import styled from "styled-components";
import { small_space } from "../variables/spacing";
import { white, primary, secondary, support } from "../variables/colors";
import { body_2 } from "../variables/font-sizes";

export const Button = styled.button`
  font-size: ${body_2};
  padding: 6px ${small_space};
  font-weight: 500;
  min-width: ${props => (props.width ? props.width : "140px")};
  height: 36px;
  border: none;
  outline: none;
  border-radius: 20px;
  ${"" /* box-shadow: 0 0.8rem 2.5rem 0 rgba(40, 51, 63, 0.11); */}
  transition: all 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
    box-shadow: 0 6px 10px 0 rgba(40, 51, 63, 0.11);
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${primary};
  color: ${white};
`;

export const ButtonSecondary = styled(Button)`
  background-color: ${secondary};
  color: ${white};
`;

export const TextButton = styled(Button)`
  background-color: transparent;
  color: ${props => (props.color ? props.color : primary)};
  padding: 0;
  min-width: auto;
  box-shadow: none;
`;

export const ButtonTertiary = styled(Button)`
  background-color: ${white}
  color: ${primary};
  border: 1px solid ${primary};
  font-size: ${body_2};
`;

export const DeleteActionBtn = styled.button`
  width: 24px;
  height: 24px;
  background: ${support};
  color: ${white};
  font-weight: 900;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
`;
