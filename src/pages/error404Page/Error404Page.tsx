import PageWrapper from "@components/pageWrapper/PageWrapper";

import { memo } from "react";

type Props = { something?: boolean };
const Error404Page = (props: Props) => {
  return <PageWrapper>Error404Page</PageWrapper>;
};
export default memo(Error404Page);
