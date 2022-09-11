import styled from "@emotion/styled";

type WrapperProps = {
  animate?: boolean;
};
/** Styled Component
 * @param {boolean} [animate] - will change overflow to hidden if true
 */
const StyledPageWrapper = styled.div<WrapperProps>`
  width: 100%;
  max-width: 1500px;
  height: 100%;
  display: flex;
  font-size: 40px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  overflow: ${({ animate }) => (animate ? "hidden" : "auto")};
  padding: 0 20px 10px 20px;
  scroll-snap-type: y mandatory;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    align-items: stretch;
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
