import styled from "@emotion/styled";

export const Answers = styled.div`
  display: flex;
  gap: 4px;
  user-select: none;
`;

export const Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border: 1px solid #fff;
  border-radius: 4px;
`;
export const AnswerLabel = styled.label`
  input {
    display: none;
  }
  input:checked + div {
    background: ${({ theme: { primary } }) => primary};
  }
`;
