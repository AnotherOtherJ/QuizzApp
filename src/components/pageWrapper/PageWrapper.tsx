import StyledPageWrapper from "./PageWrapper.style";

type Props = { children?: React.ReactNode };
const PageWrapper = ({ children }: Props) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};
export default PageWrapper;
