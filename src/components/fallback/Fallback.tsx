import styled from "@emotion/styled";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { memo } from "react";

import StyledPageWrapper from "../pageWrapper/PageWrapper.style";
import HourGlass from "./HourGlass";

const Div = styled(m.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Svg = styled(m.div)``;
const variants = {
  animate: {
    rotate: 360,
    transition: { type: "spring", mass: 2, stiffness: 50, velocity: 5, repeat: Infinity },
  },
};
const Fallback = () => {
  return (
    <StyledPageWrapper animate>
      <LazyMotion features={domAnimation}>
        <Div>
          <Svg animate="animate" variants={variants}>
            <HourGlass />
          </Svg>
          Loading...
        </Div>
      </LazyMotion>
    </StyledPageWrapper>
  );
};

export default memo(Fallback);
