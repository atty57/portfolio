/**
 * Complete GitHub Pages Deployment Script
 * 
 * This script automates the entire GitHub Pages deployment process.
 * It:
 * 1. Builds the app with the correct base path (/portfolio/)
 * 2. Copies the index.gh-pages.html to index.html in the build folder
 * 3. Adds a 404.html page that handles client-side routing
 * 4. Deploys to the gh-pages branch
 * 
 * Usage: node github-pages-deploy.js
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

console.log(`${colors.blue}======================================================${colors.reset}`);
console.log(`${colors.blue}      Portfolio GitHub Pages Deployment Script        ${colors.reset}`);
console.log(`${colors.blue}======================================================${colors.reset}\n`);

// Check if gh-pages package is installed
try {
  console.log(`${colors.yellow}Checking for gh-pages package...${colors.reset}`);
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  if (!packageJson.devDependencies?.['gh-pages'] && !packageJson.dependencies?.['gh-pages']) {
    console.log(`${colors.yellow}Installing gh-pages package...${colors.reset}`);
    execSync('npm install --save-dev gh-pages', { stdio: 'inherit' });
  }
  console.log(`${colors.green}✓ gh-pages package is installed${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}✗ Error checking gh-pages package: ${error.message}${colors.reset}`);
  process.exit(1);
}

// Build the project with GitHub Pages config
try {
  console.log(`${colors.yellow}Building project for GitHub Pages...${colors.reset}`);
  console.log(`${colors.cyan}This will create a production build optimized for GitHub Pages${colors.reset}`);
  execSync('npx vite build --config vite.config.gh-pages.ts', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Build completed successfully${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}✗ Build failed: ${error.message}${colors.reset}`);
  process.exit(1);
}

// Replace index.html with GitHub Pages specific version
try {
  console.log(`${colors.yellow}Configuring build for GitHub Pages routing...${colors.reset}`);
  
  // Copy the GitHub Pages specific index.html
  if (fs.existsSync('./client/index.gh-pages.html')) {
    fs.copyFileSync(
      './client/index.gh-pages.html',
      './dist/public/index.html'
    );
    console.log(`${colors.green}✓ Updated index.html with base tag for GitHub Pages${colors.reset}`);
  } else {
    console.log(`${colors.yellow}! Warning: index.gh-pages.html not found. Base path may not be set correctly.${colors.reset}`);
  }
  
  // Copy 404.html from public folder if it exists
  if (fs.existsSync('./public/404.html')) {
    fs.copyFileSync(
      './public/404.html',
      './dist/public/404.html'
    );
    console.log(`${colors.green}✓ Added 404.html for client-side routing support${colors.reset}\n`);
  } else {
    console.log(`${colors.yellow}! Warning: 404.html not found. SPA routing may not work correctly.${colors.reset}\n`);
  }
} catch (error) {
  console.error(`${colors.red}✗ Error configuring build: ${error.message}${colors.reset}`);
  process.exit(1);
}

// Deploy to GitHub Pages
try {
  console.log(`${colors.yellow}Deploying to GitHub Pages...${colors.reset}`);
  console.log(`${colors.cyan}This will publish your portfolio to the gh-pages branch${colors.reset}`);
  
  // Import the gh-pages package
  const ghpages = await import('gh-pages');
  
  // Deploy to gh-pages branch
  ghpages.publish('dist/public', {
    branch: 'gh-pages',
    message: 'Auto-deploy: ' + new Date().toISOString(),
    user: {
      name: 'Atharva Vichare',
      email: 'atharvavichare57@gmail.com'
    }
  }, function(err) {
    if (err) {
      console.error(`${colors.red}✗ Deployment failed: ${err}${colors.reset}`);
      process.exit(1);
    } else {
      console.log(`${colors.green}✓ Successfully deployed to GitHub Pages!${colors.reset}\n`);
      console.log(`${colors.blue}===============================================${colors.reset}`);
      console.log(`${colors.green}  Your portfolio is now live at:${colors.reset}`);
      console.log(`${colors.cyan}  https://atty57.github.io/portfolio${colors.reset}`);
      console.log(`${colors.blue}===============================================${colors.reset}\n`);
      console.log(`${colors.yellow}Note: It may take a few minutes for changes to propagate.${colors.reset}`);
      console.log(`${colors.yellow}If this is your first deployment, you need to configure GitHub Pages in your repository settings:${colors.reset}`);
      console.log(`${colors.cyan}  1. Go to your GitHub repository${colors.reset}`);
      console.log(`${colors.cyan}  2. Navigate to Settings > Pages${colors.reset}`);
      console.log(`${colors.cyan}  3. Set the source to "Deploy from a branch"${colors.reset}`);
      console.log(`${colors.cyan}  4. Select the "gh-pages" branch and click Save${colors.reset}\n`);
    }
  });
} catch (error) {
  console.error(`${colors.red}✗ Deployment failed: ${error.message}${colors.reset}`);
  process.exit(1);
}