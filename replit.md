# Portfolio Application - Static Site

## Overview

This is a static portfolio website designed to showcase professional experience across product management, engineering, and MBA projects. The site has been converted from a full-stack application to a static website that can be deployed to any hosting service with a custom domain. It provides a comprehensive and interactive representation of professional background and capabilities using static JSON data files.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend (Static Site)
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui
- **Data Management**: Static JSON files
- **Routing**: Wouter
- **Build Tool**: Vite for static site generation
- **Theme**: Custom light/dark mode

### Data Architecture
- **Storage**: Static JSON files in `client/public/data/`
- **Content**: Skills, Experiences, Projects stored as static data
- **Assets**: Resume and files in `attached_assets/`

### UI/UX Decisions
- Responsive design for desktop and mobile.
- Section-based navigation (Home, About, Product Management, Engineering, MBA Projects, Portfolio, Contact).
- Interactive components with real-time updates.
- Dark mode set as default.
- Modern glassmorphism design, gradient effects, and sophisticated visual hierarchy across sections.
- Animated background elements with unique design patterns for an engaging scrolling experience.
- Use of custom SVG company logos for authenticity.

### Technical Implementations
- Static data management with JSON files for easy content updates.
- Responsive design optimized for all devices.
- Resume download functionality with direct file access.
- Optimized build process for fast loading and SEO.

### System Design Choices
- Static site architecture for fast loading and global CDN deployment.
- Component-based React architecture for maintainability.
- Vite build optimization for minimal bundle sizes.
- Ready for deployment on any static hosting service.

## External Dependencies

### Frontend
- **React Ecosystem**: React, React DOM
- **UI Components**: Radix UI primitives, shadcn/ui
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Icons**: Lucide React, React Icons
- **Utilities**: date-fns

### Development Tools
- **Build**: Vite for static site generation
- **TypeScript**: Full type safety

### Deployment
- **Target**: Static hosting services (Netlify, Vercel, GitHub Pages)
- **Custom Domain**: Ready for deployment to personal domain
- **CDN**: Optimized for global content delivery
- **Build Process**: Custom script (`build-static.sh`) moves files from `dist/public` to `dist` for proper static deployment
- **Static Build**: All server dependencies removed, dev scripts cleaned for production deployment