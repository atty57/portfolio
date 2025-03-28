# Deploying to GitHub Pages

This guide provides detailed step-by-step instructions for deploying your portfolio website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step 1: Prepare Your Repository

1. Create a new repository on GitHub named `portfolio` (or any name you prefer)
2. Initialize your local project with Git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Connect your local repository to the GitHub repository:
   ```bash
   git remote add origin https://github.com/atty57/portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Configure for GitHub Pages

GitHub Pages requires some specific configuration to work correctly:

1. Install the GitHub Pages deployment package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update your package.json to add deployment scripts:
   ```bash
   npm pkg set scripts.predeploy="npm run build"
   npm pkg set scripts.deploy="gh-pages -d dist/public"
   npm pkg set homepage="https://atty57.github.io/portfolio"
   ```

## Step 3: Build and Deploy

### Method 1: Using npm scripts

1. Build and deploy in one command:
   ```bash
   npm run deploy
   ```

### Method 2: Using the provided deployment script

1. Run the deployment script:
   ```bash
   node deploy-to-gh-pages.js
   ```

### Method 3: Manual deployment

1. Build the project with GitHub Pages specific config:
   ```bash
   npx vite build --config vite.config.gh-pages.ts
   ```

2. Deploy to GitHub Pages:
   ```bash
   npx gh-pages -d dist/public
   ```

## Step 4: Verify Deployment

1. Visit your GitHub repository settings
2. Scroll down to the "GitHub Pages" section
3. Verify that it shows your site is published at `https://atty57.github.io/portfolio`

## Important Notes for GitHub Pages

1. **Assets Path**: All asset paths need to be relative. The `vite.config.gh-pages.ts` file handles this for you by setting the correct base path.

2. **Static Files**: All static files are placed in the `dist/public` directory after building.

3. **Single Page Application (SPA) Routing**: GitHub Pages doesn't support client-side routing out of the box. To fix this, you could:
   - Use hash-based routing (add `<base href="/portfolio/">` to index.html)
   - Create a 404.html page that redirects to the main page with the correct route

4. **Custom Domain**: If you want to use a custom domain:
   - Add a CNAME file to your build directory
   - Configure your domain's DNS settings
   - Enable custom domain in GitHub Pages settings

## Troubleshooting

- **404 Errors**: Check that your repository name in the vite config base path matches your actual repository name
- **Missing assets**: Ensure paths to assets are relative
- **Deployment fails**: Check GitHub Actions tab for error details

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)