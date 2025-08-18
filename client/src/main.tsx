import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// SIMPLE REDIRECT - WORKING VERSION
(function() {
  const host = window.location.hostname;
  
  if (host === 'bhp.mineria.digital' || host === 'ey.mineria.digital' || host === 'metso.mineria.digital') {
    const currentPath = window.location.pathname + window.location.search + window.location.hash;
    const redirectUrl = 'https://rodrigo.mineria.digital' + currentPath;
    window.location.replace(redirectUrl);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
