/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { MetaProvider } from "@solidjs/meta";

const root = document.getElementById("root");

render(
  () => (
    <MetaProvider>
      <App />
    </MetaProvider>
  ),
  root!,
);
