import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";


const App = () => (
  <BrowserRouter basename="/">
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

const container = document.getElementById("root");
const root = createRoot(container!); // Create a root.
root.render(<App />); // Initial render.
