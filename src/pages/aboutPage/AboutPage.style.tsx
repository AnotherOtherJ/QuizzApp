import styled from "@emotion/styled";

export const StyledHref = styled.a`
  text-decoration: underline;
  transition: color 400ms;
  :hover {
    color: ${({ theme: { primary } }) => primary};
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
