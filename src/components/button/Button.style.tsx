import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme: { primary } }) => primary};
  transition: background-color ease-out 300ms;
  user-select: none;
  &:hover {
    background-color: ${({ theme: { secondary } }) => secondary};
  }
  &:active {
    background-color: ${({ theme: { primary } }) => primary};
  }
  flex: 1 1 0;
  text-align: center;
`;

export const ButtonLabel = styled.label`
  input {
    display: none;
  }
  input:checked + div {
    background-color: ${({ theme: { secondary } }) => secondary};
  }
  flex: 1 1 0;
  display: flex;
  align-items: stretch;
`;

export const ButtonLink = Button.withComponent(Link);

export default Button;
