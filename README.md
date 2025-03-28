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

This portfolio is configured with **automatic deployment** to GitHub Pages! When you push changes to your GitHub repository, your website will be automatically built and deployed.

### Automatic Deployment (Recommended)

1. **Create a GitHub repository** named `portfolio`:
   - Go to GitHub and create a new repository

2. **Push your code to the repository**:
   ```bash
   git remote add origin https://github.com/atty57/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to Pages section
   - Under "Build and deployment", select "GitHub Actions" as the source
   - Your site will be automatically deployed!

That's it! The GitHub Actions workflow will handle everything for you. Your portfolio will be published at `https://atty57.github.io/portfolio` within a few minutes.

### Manual Deployment (Alternative)

If you prefer to deploy manually, you can use the included scripts:

1. **Using the deployment script**:
   ```bash
   node github-pages-deploy.js
   ```

2. **Or using the shell script**:
   ```bash
   ./deploy-to-github.sh
   ```

Your portfolio should now be live at `https://atty57.github.io/portfolio`!

