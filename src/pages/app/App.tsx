import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import WelcomePage from "../WelcomePage";

const Error404Page = lazy(() => import("../Error404Page"));
const GamePage = lazy(() => import("../GamePage"));
const SettingsPage = lazy(() => import("../SettingsPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/play" element={<GamePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};

export default App;
