import navlogo from "@assets/images/navlogo.webp";
import { memo } from "react";

import StyledNav, { StyledDiv, StyledLink } from "./Nav.style";

type Props = {
  darkModeOnClick: () => void;
};

const Nav = ({ darkModeOnClick }: Props) => {
  return (
    <StyledNav>
      <img src={navlogo} alt="logo" />
      <StyledLink to="/">Play</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledDiv onClick={darkModeOnClick}>Switch Theme</StyledDiv>
    </StyledNav>
  );
};
export default memo(Nav);
