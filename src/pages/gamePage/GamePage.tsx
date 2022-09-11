import AnswerButton, { ButtonLabel as AnswerLabel } from "@components/button/Button.style";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { shuffle } from "lodash";
import { useMemo, useRef, useState } from "react";

import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import Fallback from "@/components/fallback/Fallback";
import StyledPageWrapper from "@/components/pageWrapper/PageWrapper.style";
import parseText from "@/helpers/parseText";
import useFetch from "@/hooks/useFetch";
import type { Api } from "@/types";

import { Answers, Questions, QuestionText, ResultButton, Results } from "./GamePage.style";

const GamePage = ({ api }: Api) => {
  const [questions, error] = useFetch({ api });
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    new Array(api.questions).fill(""),
  );
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const wrapper = useRef<HTMLDivElement>(null);
  const [points, setPoints] = useState<number | undefined>();

  const handleAnswer = (
    e: React.BaseSyntheticEvent<MouseEvent, EventTarget & HTMLDivElement>,
    index: number,
  ) => {
    const answer = e.target.textContent as string;
    let splicing: string[];
    setSelectedAnswers(prev => {
      splicing = [...prev];
      splicing.splice(index, 1, answer);
      return splicing;
    });
    wrapper.current?.scrollBy({
      top: 5,
      behavior: "smooth",
    });
  };

  const handleCheck = () => {
    let tempPoints = 0;
    correctAnswers.forEach((correct, index) =>
      correct === selectedAnswers[index] ? tempPoints++ : tempPoints,
    );
    setPoints(tempPoints);
  };

  const question_answers = useMemo(
    () =>
      questions.map((q, index) => {
        const answers = shuffle([q.correct_answer, ...q.incorrect_answers]);
        questions ? setIsLoaded(true) : setIsLoaded(false);
        setCorrectAnswers(prev => [...prev, q.correct_answer]);
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
    [questions],
  );

  if (error) {
    return (
      <ErrorMessage errorContent="Sorry, We're experiencing issues right now. Please check later :)" />
    );
  }

  return (
    <StyledPageWrapper ref={wrapper}>
      {isLoaded ? (
        <>
          {question_answers}
          <Results>
            <LazyMotion features={domAnimation}>
              <AnimatePresence mode="wait">
                {points !== undefined ? (
                  <m.div key="0" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    You made whole {points}/{api.questions}
                  </m.div>
                ) : (
                  <m.div key="1" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Congratulations! You completed the Quizz! Check your answers below
                    <ResultButton onClick={handleCheck}>Check</ResultButton>
                  </m.div>
                )}
              </AnimatePresence>
            </LazyMotion>
          </Results>
        </>
      ) : (
        <Fallback />
      )}
    </StyledPageWrapper>
  );
};
export default GamePage;
