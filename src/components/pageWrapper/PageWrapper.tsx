import StyledPageWrapper from "./PageWrapper.style";

type Props = { children?: React.ReactNode; flexStart?: boolean };
const PageWrapper = ({ children, flexStart }: Props) => {
  return <StyledPageWrapper flexStart={flexStart ? true : false}>{children}</StyledPageWrapper>;
};
export default PageWrapper;
