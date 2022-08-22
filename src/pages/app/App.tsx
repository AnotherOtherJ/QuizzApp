import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "@/components/nav/Nav";

import WelcomePage from "../WelcomePage";

const Error404Page = lazy(() => import("../Error404Page"));
const GamePage = lazy(() => import("../GamePage"));
const SettingsPage = lazy(() => import("../SettingsPage"));
const AboutPage = lazy(() => import("../AboutPage"));

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/play"
          element={
            <Suspense>
              <GamePage />
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
