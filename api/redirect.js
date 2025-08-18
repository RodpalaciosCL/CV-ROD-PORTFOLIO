export default function handler(req, res) {
  const host = req.headers.host;
  
  // Check if the request is coming from one of the domains we want to redirect
  if (host === 'bhp.mineria.digital' || host === 'ey.mineria.digital' || host === 'metso.mineria.digital') {
    // Get the current path and query string
    const path = req.url;
    
    // Construct the redirect URL
    const redirectUrl = `https://rodrigo.mineria.digital${path}`;
    
    // Perform a 301 permanent redirect
    return res.redirect(301, redirectUrl);
  }
  
  // If not a redirect domain, continue to the main site
  return res.redirect(301, 'https://rodrigo.mineria.digital');
}
