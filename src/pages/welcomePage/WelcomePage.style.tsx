import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Input = styled.input`
  -webkit-appearance: none;
  margin-right: 15px;
  width: 300px;
  height: 8px;
  border-radius: 5px;
  background-image: linear-gradient(
    ${({ theme: { primary } }) => primary},
    ${({ theme: { primary } }) => primary}
  );
  background-color: ${({ theme: { inputBackground } }) => inputBackground};
  background-repeat: no-repeat;
  background-size: 0% 100%;
  position: relative;
  border: none;
  &:focus {
    outline: none;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${({ theme: { primary } }) => primary};
    cursor: ew-resize;
    box-shadow: 0 0 0px 1px ${({ theme: { inputBoxShadow } }) => inputBoxShadow};
    transition: box-shadow 0.3s ease-in-out;
    position: relative;
    &:hover {
      box-shadow: 0px 0px 0px 15px ${({ theme: { inputBoxShadow } }) => inputBoxShadow};
    }
  }
  &::-webkit-slider-thumb:active {
    box-shadow: 0px 0px 0px 15px ${({ theme: { inputBoxShadowActive } }) => inputBoxShadowActive};
  }
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
  //special firefox treatment...
  &::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border: none;
    border-radius: 50%;
    background-color: ${({ theme: { primary } }) => primary};
    cursor: ew-resize;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ theme: { primary } }) => primary};
  &:hover {
    background-color: ${({ theme: { secondary } }) => secondary};
  }
  &:active {
    background-color: ${({ theme: { primary } }) => primary};
  }
`;
