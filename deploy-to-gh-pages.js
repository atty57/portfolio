/**
 * GitHub Pages Deployment Script
 * 
 * This script automates the process of deploying your portfolio website to GitHub Pages.
 * It builds your project and publishes it to the gh-pages branch of your repository.
 * 
 * Run this with: node deploy-to-gh-pages.js
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
  red: '\x1b[31m'
};

console.log(`${colors.blue}=== GitHub Pages Deployment Script ===${colors.reset}\n`);

// Check if git is installed
try {
  console.log(`${colors.yellow}Checking git installation...${colors.reset}`);
  execSync('git --version', { stdio: 'ignore' });
  console.log(`${colors.green}✓ Git is installed${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}✗ Git is not installed. Please install git first.${colors.reset}`);
  process.exit(1);
}

// Check if gh-pages is installed
try {
  console.log(`${colors.yellow}Checking gh-pages package...${colors.reset}`);
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  if (!packageJson.devDependencies['gh-pages'] && !packageJson.dependencies['gh-pages']) {
    console.log(`${colors.yellow}Installing gh-pages package...${colors.reset}`);
    execSync('npm install --save-dev gh-pages', { stdio: 'inherit' });
  }
  console.log(`${colors.green}✓ gh-pages package is installed${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}✗ Error checking/installing gh-pages: ${error.message}${colors.reset}`);
  process.exit(1);
}

// Build the project
try {
  console.log(`${colors.yellow}Building the project...${colors.reset}`);
  execSync('npm run build', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Build completed successfully${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}✗ Build failed: ${error.message}${colors.reset}`);
  process.exit(1);
}

// Create CNAME file if needed (for custom domain)
// Uncomment and modify the following lines if you have a custom domain
/*
try {
  console.log(`${colors.yellow}Creating CNAME file for custom domain...${colors.reset}`);
  fs.writeFileSync('./dist/public/CNAME', 'yourdomain.com');
  console.log(`${colors.green}✓ CNAME file created${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}✗ Failed to create CNAME file: ${error.message}${colors.reset}`);
  process.exit(1);
}
*/

// Deploy to GitHub Pages
try {
  console.log(`${colors.yellow}Deploying to GitHub Pages...${colors.reset}`);
  
  // Import and use gh-pages directly
  const ghpages = await import('gh-pages');
  
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
      console.log(`${colors.green}✓ Successfully deployed to GitHub Pages!${colors.reset}`);
      console.log(`${colors.blue}Your website should be live at: ${colors.reset}${colors.green}https://atty57.github.io/portfolio${colors.reset}`);
      console.log(`${colors.yellow}Note: It might take a few minutes for the changes to propagate.${colors.reset}`);
    }
  });
} catch (error) {
  console.error(`${colors.red}✗ Deployment failed: ${error.message}${colors.reset}`);
  process.exit(1);
}