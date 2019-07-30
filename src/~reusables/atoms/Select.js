// styles
import styled from "styled-components";
import { small_space, medium_space_1 } from "../variables/spacing";
import { white, text, support } from "../variables/colors";
import { body_2 } from "../variables/font-sizes";

export const WhiteSelect = styled.select`
  font-size: ${body_2};
  box-shadow: 0 0.8rem 2.5rem 0 rgba(40, 51, 63, 0.05);
  transition: all 100ms ease-in-out;
  height: 40px;
  background-color: ${white};
  border: 1px solid ${white};
  padding-left: ${small_space};
  margin-bottom: ${props => (props.margin ? props.margin : medium_space_1)};
  color: ${text};
  font-weight: 500;
  border-radius: 4px;
  box-shadow: ${props =>
    props.hover ? "0px 2px 6px rgba(0, 0, 0, 0.11);" : "0 0 0 0"};

  :required:invalid {
    color: ${support};
  }
`;
