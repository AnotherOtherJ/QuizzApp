import styled from "@emotion/styled";

type StyledPageWrapperProps = {
  flexStart?: boolean;
};

const StyledPageWrapper = styled.div`
  width: 60%;
  height: 70%;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: ${({ flexStart }: StyledPageWrapperProps) => (flexStart ? "flex-start" : "center")};
  justify-content: space-evenly;
  img {
    height: 30px;
    aspect-ratio: 1;
    display: inline-block;
  }
`;

export default StyledPageWrapper;
