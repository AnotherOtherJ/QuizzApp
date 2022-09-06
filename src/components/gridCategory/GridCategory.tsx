import GridElement, { ButtonLabel as GridLabel } from "@components/button/Button.style";

type Props = {
  value: number;
  name: string;
  onChange: (value: number) => void;
};
const GridCategory = ({ value, name, onChange }: Props) => {
  return (
    <GridLabel>
      <input type="radio" value={value} name="category" onChange={() => onChange(value)} />
      <GridElement>{name}</GridElement>
    </GridLabel>
  );
};
export default GridCategory;
