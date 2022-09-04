import navlogo from "@assets/images/navlogo.webp";

import StyledNav, { StyledLink } from "./Nav.style";

type Props = {
  darkModeOnClick: () => void;
};

const Nav = ({ darkModeOnClick }: Props) => {
  return (
    <StyledNav>
      <img src={navlogo} alt="logo" />
      <StyledLink to="/">Play</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <div onClick={darkModeOnClick}>Switch Theme</div>
    </StyledNav>
  );
};
export default Nav;
