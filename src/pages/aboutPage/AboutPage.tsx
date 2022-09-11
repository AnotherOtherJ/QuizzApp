import { memo } from "react";

import StyledPageWrapper from "@/components/pageWrapper/PageWrapper.style";

import { StyledHref, StyledList } from "./AboutPage.style";

const AboutPage = () => {
  return (
    <StyledPageWrapper>
      <h1>About Quizz App</h1>
      <p>
        It&apos;s simple game using API from{" "}
        <StyledHref href="https://opentdb.com" target="_blank" rel="noopener noreferrer">
          OpenTriviaDatabase
        </StyledHref>{" "}
        and icons from{" "}
        <StyledHref href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
          Icons8
        </StyledHref>
        . You can select one of 4 categories and number of questions between 5 to 10
      </p>
      <p>Page built with:</p>
      <StyledList>
        <li>Vite</li>
        <li>React</li>
        <li>Lodash</li>
        <li>Emotion</li>
        <li>Typescript</li>
        <li>React-router</li>
        <li>Framer-motion</li>
        <li>Loadable-components</li>
      </StyledList>
    </StyledPageWrapper>
  );
};
export default memo(AboutPage);
