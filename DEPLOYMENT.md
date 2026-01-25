# Static Portfolio Deployment Guide

## Overview

Your portfolio is now configured as a static website that can be deployed to any hosting service, including your own custom domain. All backend dependencies have been removed, and the site uses static JSON files for data.

## Build Process

To build the site for production:

```bash
npx vite build
```

This will create a `dist` folder containing all the static files ready for deployment.

## Deployment Options

### 1. Netlify (Recommended)
- Connect your GitHub repository to Netlify
- Build command: `npx vite build`
- Publish directory: `dist`
- Automatic deployments on every push

### 2. Vercel
- Import project from GitHub
- Framework preset: Vite
- Build command: `npx vite build`
- Output directory: `dist`

### 3. GitHub Pages
- Enable GitHub Pages in repository settings
- Use GitHub Actions for deployment
- Build and deploy the `dist` folder

### 4. Custom Domain/Server
- Build the project locally: `npx vite build`
- Upload the contents of the `dist` folder to your web server
- Point your domain to the uploaded files
- Ensure your server serves the `index.html` for all routes (for SPA routing)

## Environment Configuration

### For Custom Domain Deployment:
1. Update any absolute URLs in the code to relative URLs
2. Ensure all asset paths are relative
3. Configure your server to serve `index.html` for all routes (SPA fallback)

### Server Configuration Examples:

#### Apache (.htaccess)
```apache
RewriteEngine On
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## File Structure

The built files will include:
- `index.html` - Main entry point
- `assets/` - Compiled CSS, JS, and other assets
- `data/` - Static JSON files (skills, experiences, projects)
- `attached_assets/` - Resume and other files

## Domain Configuration

1. **DNS Setup**: Point your domain's A record to your hosting service IP, or CNAME to your hosting provider
2. **SSL Certificate**: Most hosting providers offer free SSL certificates
3. **CDN**: Consider using a CDN for better global performance

## Performance Optimization

The site is already optimized with:
- Vite's built-in code splitting
- Optimized asset bundling
- Responsive images
- Efficient CSS and animations

## Maintenance

To update content:
1. Edit the JSON files in `client/public/data/`
2. Update the resume file in `attached_assets/`
3. Rebuild and redeploy

## Monitoring

Consider adding:
- Google Analytics for visitor tracking
- Performance monitoring tools
- Uptime monitoring for your domain

## Next Steps

1. Choose your hosting platform
2. Connect your repository or upload built files
3. Configure your custom domain
4. Test the deployment thoroughly
5. Set up monitoring and analytics