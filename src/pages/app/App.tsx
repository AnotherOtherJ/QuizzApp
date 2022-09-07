import Nav from "@components/nav/Nav";
import { ThemeProvider } from "@emotion/react";
import { lazy, Suspense } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import GlobalTheme, { colors } from "@/assets/styles/GlobalTheme";
import Fallback from "@/components/fallback/Fallback";
import useTheme from "@/hooks/useTheme";

import WelcomePage from "../welcomePage/WelcomePage";

const Error404Page = lazy(() => import("../error404Page/Error404Page"));
const GamePage = lazy(() => import("../gamePage/GamePage"));
const AboutPage = lazy(() => import("../aboutPage/AboutPage"));

const App = () => {
  const [api, setApi] = useState<{ category: number; questions: number }>({
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
        <Route
          path="/play"
          element={
            <Suspense fallback={<Fallback />}>
              <GamePage api={api} />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Fallback />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
