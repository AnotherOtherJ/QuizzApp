import AnswerButton, { ButtonLabel as AnswerLabel } from "@components/button/Button.style";
import { shuffle } from "lodash";
import { SyntheticEvent, useMemo, useState } from "react";

import Fallback from "@/components/fallback/Fallback";
import StyledPageWrapper from "@/components/pageWrapper/PageWrapper.style";
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
  const [questions, error] = useFetch(api);
  const [isLoaded, setIsLoaded] = useState(false);
  const correct_answers: string[] = [];
  const selected_answers: string[] = new Array(api.questions);

  const handleAnswer = (e: SyntheticEvent, index: number) => {
    const element = e.target as HTMLElement;
    const answer = element.textContent as string;
    selected_answers.splice(index, 1, answer);
  };

  const handleCheck = () => {
    let points = 0;
    correct_answers.forEach((element, index) =>
      element === selected_answers[index] ? points++ : points,
    );
  };

  const question_answers = useMemo(
    () =>
      questions.map((q, index) => {
        const answers = shuffle([q.correct_answer, ...q.incorrect_answers]);
        questions ? setIsLoaded(true) : setIsLoaded(false);
        correct_answers.push(q.correct_answer);
        return (
          <Questions key={index}>
            <QuestionText>{parseText(q.question)}</QuestionText>
            <Answers>
              {answers.map((a, i) => (
                <AnswerLabel key={i}>
                  <input type="radio" name={index.toString()} />
                  <AnswerButton onClick={e => handleAnswer(e, index)}>{parseText(a)}</AnswerButton>
                </AnswerLabel>
              ))}
            </Answers>
          </Questions>
        );
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [questions],
  );

  return (
    <StyledPageWrapper>
      {isLoaded ? (
        <>
          {question_answers} <Button onClick={handleCheck}>Check</Button>
        </>
      ) : (
        <>
          {error ? (
            <div>Sorry, We&apos;re experiencing issues right now. Please check later :)</div>
          ) : (
            <Fallback />
          )}
        </>
      )}
    </StyledPageWrapper>
  );
};
export default GamePage;
