import AnswerButton, { ButtonLabel as AnswerLabel } from "@components/button/Button.style";
import PageWrapper from "@components/pageWrapper/PageWrapper";
import { shuffle } from "lodash";
import { useMemo, useState } from "react";

import parseText from "@/helpers/parseText";
import useFetch from "@/hooks/useFetch";

import { Answers, Button, Questions, QuestionText } from "./GamePage.style";

type Props = {
  api: {
    category: number;
    questions: number;
  };
};

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
          <Questions key={index}>
            <QuestionText>{parseText(q.question)}</QuestionText>
            <Answers>
              {answers.map((a, i) => (
                <AnswerLabel key={i} onClick={() => handleAnswer(a)}>
                  <input type="radio" name={index.toString()} />
                  <AnswerButton>{parseText(a)}</AnswerButton>
                </AnswerLabel>
              ))}
            </Answers>
          </Questions>
        );
      }),
    [questions],
  );

  return (
    <PageWrapper>
      {question_answers}
      <Button>Check</Button>
    </PageWrapper>
  );
};
export default GamePage;
