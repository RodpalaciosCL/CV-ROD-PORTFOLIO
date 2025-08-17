import { Request, Response, NextFunction } from 'express';

export function domainRedirects(req: Request, res: Response, next: NextFunction) {
  const host = req.get('host');
  
  // Check if the request is coming from one of the domains we want to redirect
  if (host === 'metso.mineria.digital' || host === 'ey.mineria.digital' || host === 'bhp.mineria.digital') {
    // Get the current path and query string
    const path = req.path;
    const query = req.url.includes('?') ? req.url.substring(req.url.indexOf('?')) : '';
    
    // Construct the redirect URL
    const redirectUrl = `https://rodrigo.mineria.digital${path}${query}`;
    
    // Perform a 301 permanent redirect
    return res.redirect(301, redirectUrl);
  }
  
  // If not a redirect domain, continue to next middleware
  next();
}
