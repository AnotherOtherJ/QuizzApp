import navlogo from "@assets/images/navlogo.webp";
import { Link } from "react-router-dom";

import StyledNav from "./Nav.style";

type Props = { something?: string };
const Nav = (props: Props) => {
  return (
    <StyledNav>
      <img src={navlogo} />
      <div>
        <Link to="/play">Play</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/settings">Settings</Link>
      </div>
    </StyledNav>
  );
};
export default Nav;
