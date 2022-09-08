import Button from "@components/button/Button.style";
import styled from "@emotion/styled";

export const Questions = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  gap: 20px;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
export const QuestionText = styled.div`
  text-align: center;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

export const Answers = styled.div`
  display: flex;
  gap: 4px;
  user-select: none;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Results = Questions;

export const ResultText = QuestionText;

export const ResultButton = styled(Button)`
  flex: initial;
`;
