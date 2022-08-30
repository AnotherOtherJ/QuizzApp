import PageWrapper from "@components/pageWrapper/PageWrapper";
import styled from "@emotion/styled";
import { isEmpty, shuffle } from "lodash";
import { useEffect, useMemo, useState } from "react";

import parseText from "@/helpers/parseText";
import useFetch from "@/hooks/useFetch";

type Props = {
  api: {
    category: number;
    questions: number;
  };
};

const Answers = styled.div`
  display: flex;
  gap: 4px;
  user-select: none;
`;

const Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border: 1px solid #fff;
  border-radius: 4px;
`;
const AnswerLabel = styled.label`
  input {
    display: none;
  }
  input:checked + div {
    background: whitesmoke;
  }
`;
const GamePage = ({ api }: Props) => {
  const [someState, setState] = useState<string | undefined>();

  const handleAnswer = (a: string) => {
    console.log(a);
    setState(a);
  };
  const [questions, error] = useFetch(api);
  console.log(questions);

  const question_answers = useMemo(
    () =>
      questions.map((q, index) => {
        const answers = shuffle([q.correct_answer, ...q.incorrect_answers]);
        console.log(answers);
        return (
          <div key={index}>
            {parseText(q.question)}
            <Answers>
              {answers.map((a, i) => (
                <AnswerLabel key={i} onClick={() => handleAnswer(a)}>
                  <input type="radio" name={index.toString()} />
                  <Answer>{parseText(a)}</Answer>
                </AnswerLabel>
              ))}
            </Answers>
          </div>
        );
      }),
    [questions],
  );

  return (
    <PageWrapper flexStart>
      {question_answers}
      <div>Check</div>
    </PageWrapper>
  );
};
export default GamePage;
