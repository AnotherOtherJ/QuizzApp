import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const GridLabel = styled(motion.label)`
  input {
    display: none;
  }
  input:checked + div {
    background-color: ${({ theme: { secondary } }) => secondary};
  }
`;

export const GridElement = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ theme: { primary } }) => primary};
  transition: background-color ease-out 100ms;
  &:hover {
    background-color: ${({ theme: { secondary } }) => secondary};
  }
  &:active {
    background-color: ${({ theme: { primary } }) => primary};
  }
`;

export const GridCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  user-select: none;
`;
