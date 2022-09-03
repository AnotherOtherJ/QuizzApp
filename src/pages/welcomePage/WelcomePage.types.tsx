type WelcomePageProps = {
  setApi: React.Dispatch<
    React.SetStateAction<{
      category: number;
      questions: number;
    }>
  >;
  api: {
    category: number;
    questions: number;
  };
};

export default WelcomePageProps;
