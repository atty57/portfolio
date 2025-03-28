#!/bin/bash

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== GitHub Pages Deployment Script ===${NC}\n"

# Check if gh-pages is installed
if ! npm list gh-pages | grep -q gh-pages; then
  echo -e "${YELLOW}Installing gh-pages package...${NC}"
  npm install --save-dev gh-pages
fi

# Build the project with GitHub Pages config
echo -e "${YELLOW}Building project for GitHub Pages...${NC}"
npx vite build --config vite.config.gh-pages.ts

if [ $? -ne 0 ]; then
  echo -e "${RED}Build failed! Aborting deployment.${NC}"
  exit 1
fi

echo -e "${GREEN}Build successful!${NC}"

# Deploy to GitHub Pages
echo -e "${YELLOW}Deploying to GitHub Pages...${NC}"
npx gh-pages -d dist/public

if [ $? -ne 0 ]; then
  echo -e "${RED}Deployment failed!${NC}"
  exit 1
fi

echo -e "${GREEN}Deployment successful!${NC}"
echo -e "${BLUE}Your portfolio website should now be live at:${NC}"
echo -e "${GREEN}https://atty57.github.io/portfolio${NC}"
echo -e "${YELLOW}Note: It may take a few minutes for changes to propagate.${NC}"