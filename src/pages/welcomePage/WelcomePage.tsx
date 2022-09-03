import navlogo from "@assets/images/navlogo.webp";
import GridCategory from "@components/gridCategory/GridCategory";
import { GridCategories } from "@components/gridCategory/GridCategory.style";
import PageWrapper from "@components/pageWrapper/PageWrapper";
import { Link } from "react-router-dom";

import { Button, Input } from "./WelcomePage.style";
import type WelcomePageProps from "./WelcomePage.types";

const WelcomePage = ({ setApi, api }: WelcomePageProps) => {
  const categories = [
    { name: "Animals", value: 27 },
    { name: "Music", value: 12 },
    { name: "Movies", value: 11 },
    { name: "Video Games", value: 15 },
  ];

  const handleCategoryOnChange = (category: number) => {
    setApi({ ...api, category });
  };

  const handleQuestionsNumberOnInput = (
    questions: number,
    target: EventTarget & HTMLInputElement,
  ) => {
    setApi({ ...api, questions: Math.round(questions) });
    const min = +target.min;
    const max = +target.max;
    const val = +target.value;
    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  };

  return (
    <PageWrapper>
      <div>
        Welcome on Your Quizz App <img src={navlogo} alt="mini-logo" title="" />
      </div>
      <div>Please choose your game parameters</div>
      <label>
        <Input
          type="range"
          min={5}
          max={15}
          step={0.1}
          defaultValue={api.questions}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleQuestionsNumberOnInput(+e.target.value, e.target)
          }
        />
        Questions {api.questions}
      </label>
      <GridCategories>
        {categories.map((category, i) => (
          <GridCategory
            key={i}
            name={category.name}
            value={category.value}
            onChange={handleCategoryOnChange}
          />
        ))}
      </GridCategories>
      <Link to="/play">
        <Button>Play</Button>
      </Link>
    </PageWrapper>
  );
};
export default WelcomePage;
