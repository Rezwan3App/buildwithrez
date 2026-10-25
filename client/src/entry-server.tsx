import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export function render() {
  return renderToString(
    <Router ssrPath="/">
      <App />
    </Router>,
  );
}
