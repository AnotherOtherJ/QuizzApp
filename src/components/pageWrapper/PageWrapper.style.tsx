import styled from "@emotion/styled";
const StyledPageWrapper = styled.div`
  width: 100%;
  height: 5000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  padding: 0 20px 10px 20px;
  @media screen and (max-width: 768px) {
    padding: 5px;
    align-items: stretch;
    scroll-snap-type: y mandatory;
  }
  img {
    height: 30px;
    aspect-ratio: 1;
    display: inline-block;
  }
  scrollbar-width: thin;
  scrollbar-color: ${({ theme: { primary, background } }) => `${primary} ${background}`};

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme: { background } }) => background};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { primary } }) => primary};
    border-radius: 20px;
    :hover {
      background-color: ${({ theme: { secondary } }) => secondary};
    }
  }
`;

export default StyledPageWrapper;
