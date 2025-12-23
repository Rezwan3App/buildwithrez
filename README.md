# Rezwan - Portfolio Website

A modern, interactive portfolio website showcasing Rezwan's multidisciplinary background in Product Management, Engineering, and MBA projects.

🌐 **Live Site:** [www.buildwithrez.com](https://www.buildwithrez.com)

## Overview

This portfolio website serves as both a resume and project showcase hub, highlighting professional experiences, projects, and skills across Product Management, Engineering, and Data Analytics domains.

## Features

- **Professional Experience Timeline** - Showcases roles at companies like Odynn, Rocket Mortgage, SBDC, and more
- **Project Portfolio** - Displays MBA projects, engineering work, and analytics projects with downloadable PDFs
- **Skills Showcase** - Organized by categories: Product, Design, Analytics, Technical, and Soft Skills
- **Responsive Design** - Fully responsive for mobile and desktop
- **Data-Driven Content** - Easy-to-update JSON-based content management

## Project Structure

```
buildwithrez/
├── assets/                 # Built React application (JS/CSS)
│   ├── index-Dq9p2ap2.js
│   └── index-Du-adPRM.css
├── attached_assets/        # Project files (PDFs, images)
│   ├── *.pdf              # Project documentation
│   └── *.png, *.jpg       # Project images
├── data/                   # Content data files
│   ├── experiences.json   # Professional experiences
│   ├── projects.json      # Portfolio projects
│   └── skills.json        # Skills inventory
├── index.html             # Main HTML entry point
├── CNAME                  # Custom domain configuration
└── README.md             # This file
```

## Content Management

The website uses JSON files for easy content updates:

### `data/experiences.json`
Contains professional work experiences with:
- Job title, company, description
- Start/end dates
- Achievements and metrics
- Tags and skills
- Experience type (product/engineering)

### `data/projects.json`
Contains portfolio projects with:
- Title, description, category
- Domain and tools used
- File URLs for PDFs/documents
- Image URLs
- External links
- Visibility flags

### `data/skills.json`
Contains skills inventory with:
- Skill name
- Category (product/design/analytics/technical/soft)
- Icon class (Font Awesome)

## Technologies

- **Frontend Framework:** React
- **Build Tool:** Vite (based on asset naming)
- **Styling:** CSS (bundled)
- **Deployment:** GitHub Pages
- **Domain:** Custom domain via CNAME

## Deployment

The site is deployed via GitHub Pages and uses a custom domain (`www.buildwithrez.com`) configured through the `CNAME` file.

## Updating Content

To update the website content:

1. **Add/Edit Experiences:** Modify `data/experiences.json`
2. **Add/Edit Projects:** Modify `data/projects.json` and upload files to `attached_assets/`
3. **Update Skills:** Modify `data/skills.json`

After updating JSON files, rebuild the React application and push changes to trigger a new deployment.

## Development

This appears to be a built/production version of a React application. For development:

1. Clone the repository
2. Install dependencies (if source code is available)
3. Run the development server
4. Make changes to source files
5. Build for production
6. Deploy the `dist/` folder contents

## Contact & Links

- **LinkedIn:** [rezwan-islam33](https://www.linkedin.com/in/rezwan-islam33)
- **Email:** rezwan99@gmail.com
- **Portfolio:** [www.buildwithrez.com](https://www.buildwithrez.com)

## License

This is a personal portfolio website. All rights reserved.

---

Built with ❤️ by Rezwan

