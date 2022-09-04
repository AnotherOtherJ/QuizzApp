import PageWrapper from "@components/pageWrapper/PageWrapper";
import { shuffle } from "lodash";
import { useMemo, useState } from "react";

import parseText from "@/helpers/parseText";
import useFetch from "@/hooks/useFetch";

import { Answer, AnswerLabel, Answers } from "./GamePage.style";

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
    <PageWrapper>
      {question_answers}
      <div>Check</div>
    </PageWrapper>
  );
};
export default GamePage;
