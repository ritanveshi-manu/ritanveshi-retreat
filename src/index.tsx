import { BrowserRouter, useHistory } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";

// const AppRouter = () => {
//   const history = useHistory();

//   useEffect(() => {
//     // Navigate to the initial route
//     history.push("/");
//   }, [history]);

//   return <Router />;
// };

const App = () => (
  <BrowserRouter basename="/ritanveshi-retreat">
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

const container = document.getElementById("root");
const root = createRoot(container!); // Create a root.
root.render(<App />); // Initial render.
