import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const GridLabel = styled(motion.label)`
  input {
    display: none;
  }
  input:checked + div {
    background-color: #3498db;
  }
`;

export const GridElement = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #1b1c1f;
  transition: background-color ease-out 100ms;
  &:hover {
    background-color: #3498db;
  }
`;
