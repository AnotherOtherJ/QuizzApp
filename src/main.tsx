import App from "@pages/app/App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import GlobalTheme from "./assets/styles/GlobalTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <GlobalTheme />
    <App />
  </BrowserRouter>,
);
