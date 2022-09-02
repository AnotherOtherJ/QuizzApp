import navlogo from "@assets/images/navlogo.webp";
import { Link } from "react-router-dom";

import StyledNav from "./Nav.style";

const Nav = () => {
  return (
    <StyledNav>
      <img src={navlogo} alt="logo" />
      <div>
        <Link to="/">Play</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>Switch Theme</div>
    </StyledNav>
  );
};
export default Nav;
