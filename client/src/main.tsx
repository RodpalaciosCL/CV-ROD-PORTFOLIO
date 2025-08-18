import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// SEVERE BREAKING CHANGE - THIS WILL DEFINITELY FAIL
const BROKEN_VARIABLE = undefined;
BROKEN_VARIABLE.someMethod(); // This will break the build
BROKEN_VARIABLE.anotherMethod(); // This will definitely break
throw new Error("FORCED BUILD FAILURE"); // This will definitely break

// Domain redirect script - Version 9.0 - SEVERE BREAK
(function() {
  console.log('Redirect script loaded - Version 9.0 - SEVERE BREAK');
  const host = window.location.hostname;
  const redirectDomains = ['bhp.mineria.digital', 'ey.mineria.digital', 'metso.mineria.digital'];
  
  console.log('Current host:', host);
  console.log('Redirect domains:', redirectDomains);
  console.log('SEVERE BREAK:', '2025-08-18-00-40');
  
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
