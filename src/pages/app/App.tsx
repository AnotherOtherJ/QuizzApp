import Nav from "@components/nav/Nav";
import { ThemeProvider } from "@emotion/react";
import loadable from "@loadable/component";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import GlobalTheme, { colors } from "@/assets/styles/GlobalTheme";
import Fallback from "@/components/fallback/Fallback";
import useTheme from "@/hooks/useTheme";

import WelcomePage from "../welcomePage/WelcomePage";

const ErrorMessage = loadable(() => import("@/components/errorMessage/ErrorMessage"), {
  fallback: <Fallback />,
});
const GamePage = loadable(() => import("../gamePage/GamePage"), {
  fallback: <Fallback />,
});
const AboutPage = loadable(() => import("../aboutPage/AboutPage"), {
  fallback: <Fallback />,
});

const App = () => {
  const [api, setApi] = useState({
    category: 27,
    questions: 5,
  });
  const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
  const darkModeOnClick = () => {
    setIsDark(prev => !prev);
    localStorage.setItem("darkMode", isDark ? "false" : "true");
  };
  useTheme(setIsDark);

  return (
    <ThemeProvider theme={isDark ? colors.dark : colors.light}>
      <GlobalTheme />
      <Nav darkModeOnClick={darkModeOnClick} />
      <Routes>
        <Route path="/" element={<WelcomePage setApi={setApi} api={api} />} />
        <Route path="/play" element={<GamePage api={api} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="*"
          element={
            <ErrorMessage errorContent="Sorry, the page are you looking for does not exist" />
          }
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
