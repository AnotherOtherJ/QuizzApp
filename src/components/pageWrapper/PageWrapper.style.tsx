import styled from "@emotion/styled";

const StyledPageWrapper = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
    height: calc(100% - 50px);
    padding: 5px;
    overflow: auto;
  }
  img {
    height: 30px;
    aspect-ratio: 1;
    display: inline-block;
  }
`;

export default StyledPageWrapper;
