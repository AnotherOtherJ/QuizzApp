import Nav from "@components/nav/Nav";
import { ThemeProvider } from "@emotion/react";
import { lazy, Suspense, useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import GlobalTheme, { colors } from "@/assets/styles/GlobalTheme";

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
  useEffect(() => {
    const checkScheme = (e: MediaQueryListEvent) =>
      e.matches ? setIsDark(true) : setIsDark(false);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", checkScheme);
    return () =>
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", checkScheme);
  }, []);

  return (
    <ThemeProvider theme={isDark ? colors.dark : colors.light}>
      <GlobalTheme />
      <Nav />
      <Routes>
        <Route path="/" element={<WelcomePage setApi={setApi} api={api} />} />
        <Route
          path="/play"
          element={
            <Suspense fallback={<div>loading</div>}>
              <GamePage api={api} />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense>
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
