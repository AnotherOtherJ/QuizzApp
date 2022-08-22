import navlogo from "@assets/images/navlogo.webp";
import PageWrapper from "@components/pageWrapper/PageWrapper";

type Props = {
  something?: React.ReactNode;
};
const WelcomePage = (props: Props) => {
  return (
    <PageWrapper>
      <div>
        Welcome on Your Quizz App <img src={navlogo} />
      </div>
    </PageWrapper>
  );
};
export default WelcomePage;
