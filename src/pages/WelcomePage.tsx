import navlogo from "@assets/images/navlogo.webp";
import PageWrapper from "@components/pageWrapper/PageWrapper";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import GridCategory from "@/components/gridCategory/GridCategory";

type Props = {
  setApi: React.Dispatch<
    React.SetStateAction<{
      category: number;
      questions: number;
    }>
  >;
  api: {
    category: number;
    questions: number;
  };
};

const GridCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  user-select: none;
`;

const WelcomePage = ({ setApi, api }: Props) => {
  const categories = [
    { name: "Animals", value: 27 },
    { name: "Music", value: 12 },
    { name: "Movies", value: 11 },
    { name: "Video Games", value: 15 },
  ];

  const changeCategory = (category: number) => {
    setApi({ ...api, category });
  };

  return (
    <PageWrapper>
      <div>
        Welcome on Your Quizz App <img src={navlogo} alt="mini-logo" title="" />
      </div>
      <div>Please choose your game parameters</div>
      <input
        type="range"
        min={5}
        max={15}
        defaultValue={api.questions}
        onChange={e => setApi({ ...api, questions: +e.target.value })}
        id="myRange"
      />
      <GridCategories>
        {categories.map((category, i) => (
          <GridCategory
            key={i}
            name={category.name}
            value={category.value}
            onChange={changeCategory}
          />
        ))}
      </GridCategories>
      <Link to="/play">Play</Link>
    </PageWrapper>
  );
};
export default WelcomePage;
