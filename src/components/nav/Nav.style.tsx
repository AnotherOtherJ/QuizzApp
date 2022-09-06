import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  padding: 5px;
  img {
    height: 30px;
    aspect-ratio: 1;
  }
  div {
    margin-left: auto;
    user-select: none;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 1.3rem;
`;

export const StyledLink = StyledDiv.withComponent(Link);

export default StyledNav;
