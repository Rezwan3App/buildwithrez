import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.documentElement.classList.add("light");
// Prerendered home HTML is for crawlers and first paint; the client renders fresh over it
// (hydrating would mismatch on reduced-motion and other client-only branches).
createRoot(document.getElementById("root")!).render(<App />);
