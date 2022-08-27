import styled from "@emotion/styled";

const StyledPageWrapper = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    height: 30px;
    aspect-ratio: 1;
  }
`;

export default StyledPageWrapper;
