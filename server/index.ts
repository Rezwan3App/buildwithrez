import { createServer } from 'vite';
import path from 'path';
import express from 'express';
import fs from 'fs';

async function startServer() {
  try {
    // Create Express app for custom middleware
    const app = express();
    
    // Configure static file serving for attached_assets FIRST
    const attachedAssetsPath = path.join(process.cwd(), 'attached_assets');
    app.use('/attached_assets', (req, res, next) => {
      const filePath = path.join(attachedAssetsPath, req.url || '');
      
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        let contentType = 'application/octet-stream';
        
        if (ext === '.png') contentType = 'image/png';
        else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
        else if (ext === '.gif') contentType = 'image/gif';
        else if (ext === '.webp') contentType = 'image/webp';
        else if (ext === '.pdf') contentType = 'application/pdf';
        
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'public, max-age=86400');
        fs.createReadStream(filePath).pipe(res);
      } else {
        next();
      }
    });

    // Create Vite server in middleware mode with explicit config override
    const vite = await createServer({
      configFile: false, // Don't use vite.config.ts
      server: { 
        middlewareMode: true,
        host: '0.0.0.0',
        allowedHosts: ['localhost', '.replit.dev', '.replit.co', 'all']
      },
      root: path.resolve(process.cwd(), 'client'),
      publicDir: path.resolve(process.cwd(), 'client/public'),
      resolve: {
        alias: {
          "@": path.resolve(process.cwd(), "client", "src"),
          "@shared": path.resolve(process.cwd(), "shared"),
          "@assets": path.resolve(process.cwd(), "attached_assets"),
        },
      },
      plugins: [
        // Basic React plugin since we're bypassing config
        (await import('@vitejs/plugin-react')).default()
      ]
    });

    // Use Vite's middleware
    app.use(vite.middlewares);

    // Start the server
    app.listen(5000, '0.0.0.0', () => {
      console.log('Portfolio site is running on http://localhost:5000');
    });
    
    console.log('Portfolio site is running on http://localhost:5000');
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

startServer();