import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.documentElement.classList.add("light");
createRoot(document.getElementById("root")!).render(<App />);
