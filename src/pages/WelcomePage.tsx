import navlogo from "@assets/images/navlogo.webp";
import GridCategory from "@components/gridCategory/GridCategory";
import { GridCategories } from "@components/gridCategory/GridCategory.style";
import PageWrapper from "@components/pageWrapper/PageWrapper";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import type WelcomePageProps from "./WelcomePage.types";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #4527a0;
  &:hover {
    background-color: #7953d2;
  }
  &:active {
    background-color: #4527a0;
  }
`;
const Input = styled.input`
  -webkit-appearance: none;
  margin-right: 15px;
  width: 300px;
  height: 8px;
  border-radius: 5px;
  background-image: linear-gradient(#4527a0, #4527a0);
  background-color: rgba(69, 39, 160, 0.38);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  position: relative;
  &:focus {
    outline: none;
  }
  :before {
    width: 20px;
    height: 20px;
    background-color: white;
    top: 0;
    left: 0;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #4527a0;
    cursor: ew-resize;
    box-shadow: 0 0 0px 1px rgba(69, 39, 160, 0.2);
    transition: background 0.3s ease-in-out;
    transition: box-shadow 0.3s ease-in-out;
    position: relative;
  }
  &::-webkit-slider-thumb:hover {
    box-shadow: 0px 0px 0px 15px rgba(69, 39, 160, 0.2);
    position: relative;
    &:before {
      width: 50px;
      height: 20px;
      top: -20px;
      left: 0;
      position: absolute;
      background-color: white;
    }
  }
  &::-webkit-slider-thumb:active {
    box-shadow: 0px 0px 0px 15px rgba(69, 39, 160, 0.4);
  }
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;
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
        Questions
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
