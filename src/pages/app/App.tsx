import Nav from "@components/nav/Nav";
import { lazy, Suspense } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import WelcomePage from "../WelcomePage";

const Error404Page = lazy(() => import("../Error404Page"));
const GamePage = lazy(() => import("../GamePage"));
const SettingsPage = lazy(() => import("../SettingsPage"));
const AboutPage = lazy(() => import("../AboutPage"));

const App = () => {
  const [api, setApi] = useState<{ category: number; questions: number }>({
    category: 27,
    questions: 5,
  });
  return (
    <>
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
        <Route
          path="/settings"
          element={
            <Suspense>
              <SettingsPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </>
  );
};

export default App;
