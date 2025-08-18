import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Domain redirect script - Version 7.0 - FIXED AFTER BREAK
(function() {
  console.log('Redirect script loaded - Version 7.0 - FIXED AFTER BREAK');
  const host = window.location.hostname;
  const redirectDomains = ['bhp.mineria.digital', 'ey.mineria.digital', 'metso.mineria.digital'];
  
  console.log('Current host:', host);
  console.log('Redirect domains:', redirectDomains);
  console.log('FIXED AFTER BREAK:', '2025-08-18-00-30');
  
  if (redirectDomains.includes(host)) {
    console.log('REDIRECTING NOW to rodrigo.mineria.digital');
    const currentPath = window.location.pathname + window.location.search + window.location.hash;
    const redirectUrl = 'https://rodrigo.mineria.digital' + currentPath;
    console.log('Redirect URL:', redirectUrl);
    
    // Force immediate redirect
    window.location.href = redirectUrl;
    window.location.replace(redirectUrl);
    window.location.assign(redirectUrl);
  } else {
    console.log('No redirect needed for:', host);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
