import PageWrapper from "@components/pageWrapper/PageWrapper";
import { memo } from "react";

type Props = { something?: boolean };
const AboutPage = (props: Props) => {
  return <PageWrapper>AboutPage</PageWrapper>;
};
export default memo(AboutPage);
