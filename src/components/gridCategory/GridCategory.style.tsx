import styled from "@emotion/styled";
import { motion } from "framer-motion";

const PRIMARY_COLOR = "#4527a0";
const SECONDARY_COLOR = "#7953d2";

export const GridLabel = styled(motion.label)`
  input {
    display: none;
  }
  input:checked + div {
    background-color: ${SECONDARY_COLOR};
  }
`;

export const GridElement = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: ${PRIMARY_COLOR};
  transition: background-color ease-out 100ms;
  &:hover {
    background-color: ${SECONDARY_COLOR};
  }
  &:active {
    background-color: ${PRIMARY_COLOR};
  }
`;

export const GridCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  user-select: none;
`;
