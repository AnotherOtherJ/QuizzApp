import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  align-items: center;
  padding: 5px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    &:last-child {
      margin-left: auto;
    }
  }
  img {
    height: 30px;
    aspect-ratio: 1;
  }
`;

export default StyledNav;
