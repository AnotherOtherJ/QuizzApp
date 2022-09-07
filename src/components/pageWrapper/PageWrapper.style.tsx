import styled from "@emotion/styled";

type WrapperProps = {
  animate?: boolean;
};

const StyledPageWrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: ${({ animate }) => (animate ? "hidden" : "auto")};
  padding: 0 20px 10px 20px;
  @media screen and (max-width: 768px) {
    padding: 5px;
    align-items: stretch;
    scroll-snap-type: y mandatory;
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
