# Atharva Vichare - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, projects, and skills. Built with React, TypeScript, and Tailwind CSS.


## 🚀 Features

- **Responsive Design**: Looks great on all devices - mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive UI**: Animated components using Framer Motion
- **Resume Download**: Direct download of resume in PDF format
- **Modern Stack**: Built with React, TypeScript and Tailwind CSS

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **UI Components**: Shadcn UI components
- **Routing**: Wouter for lightweight routing
- **Icons**: React Icons, Lucide React
- **Build Tools**: Vite, ESBuild

## 📋 Project Structure

```
├── client/              # Frontend React application
│   ├── src/             # Source files
│   │   ├── components/  # UI components
│   │   ├── data/        # Resume and other data
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   ├── pages/       # Page components
│   │   └── types/       # TypeScript interfaces
├── public/              # Static assets
│   └── resume.pdf       # Downloadable resume
└── server/              # Simple Express server
```

## 🏃‍♂️ Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5000`

## 🌐 Hosting on GitHub Pages

To host this portfolio on GitHub Pages, follow these steps:

1. **Modify package.json**:
   Add the following to your package.json file:
   ```json
   {
     "homepage": "https://atty57.github.io/portfolio",
     "scripts": {
       // existing scripts...
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist/public"
     }
   }
   ```

2. **Install GitHub Pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update vite.config.ts** (if needed):
   If you're deploying to a subdirectory (like `/portfolio`), set the base path in vite.config.ts:
   ```typescript
   export default defineConfig({
     // other config...
     base: '/portfolio/',
     // rest of config...
   });
   ```

4. **Create a GitHub repository**:
   - Create a new repository on GitHub named `portfolio`
   - Commit your project to this repository

5. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

6. **Configure GitHub Pages**:
   - Go to your GitHub repository settings
   - Scroll down to the GitHub Pages section
   - Select the `gh-pages` branch as the source
   - Save the changes

Your portfolio should now be live at `https://atty57.github.io/portfolio`!

