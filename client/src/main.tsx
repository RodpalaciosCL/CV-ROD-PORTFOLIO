import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Domain redirect script - Version 3.0
(function() {
  console.log('Redirect script loaded - Version 3.0');
  const host = window.location.hostname;
  const redirectDomains = ['bhp.mineria.digital', 'ey.mineria.digital', 'metso.mineria.digital'];
  
  console.log('Current host:', host);
  console.log('Redirect domains:', redirectDomains);
  
  if (redirectDomains.includes(host)) {
    console.log('Redirecting to rodrigo.mineria.digital');
    const currentPath = window.location.pathname + window.location.search + window.location.hash;
    const redirectUrl = 'https://rodrigo.mineria.digital' + currentPath;
    console.log('Redirect URL:', redirectUrl);
    window.location.replace(redirectUrl);
  } else {
    console.log('No redirect needed');
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
