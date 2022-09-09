import { useEffect, useState } from "react";

type Api = {
  category: number;
  questions: number;
};

type QuestionsProps = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: [string];
};
/**
 * Hook which will pull data according to arguments
 * and return questions Object and error if is any.
 */
const useFetch = (api: Api): [QuestionsProps[], boolean] => {
  const [question, setQuestions] = useState<QuestionsProps[]>([]);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${api.questions}&category=${api.category}`,
    );

    const data = await response.json();
    if (data.response_code === 0) {
      setQuestions(data.results);
    } else {
      throw new Error("no data returned");
    }
  };
  useEffect(() => {
    fetchData().catch(() => setError(true));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);
  return [question, error];
};

export default useFetch;
