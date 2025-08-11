import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log('🟢 Test API called');
  return res.json({
    message: 'API is working on Vercel!',
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url
  });
}
