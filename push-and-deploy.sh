#!/bin/bash

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== GitHub Push & Deploy Script ===${NC}\n"

# Check if git is initialized
if [ ! -d .git ]; then
  echo -e "${YELLOW}Initializing Git repository...${NC}"
  git init
  echo -e "${GREEN}✓ Git repository initialized${NC}\n"
fi

# Check if GitHub remote exists
if ! git remote | grep -q "origin"; then
  echo -e "${YELLOW}GitHub remote 'origin' not found.${NC}"
  echo -e "${YELLOW}Please enter your GitHub username (default: atty57):${NC}"
  read github_username
  github_username=${github_username:-atty57}
  
  echo -e "${YELLOW}Please enter your repository name (default: portfolio):${NC}"
  read repo_name
  repo_name=${repo_name:-portfolio}
  
  git remote add origin "https://github.com/$github_username/$repo_name.git"
  echo -e "${GREEN}✓ Added remote: https://github.com/$github_username/$repo_name.git${NC}\n"
fi

# Ask for commit message
echo -e "${YELLOW}Enter a commit message for your changes:${NC}"
read commit_message
commit_message=${commit_message:-"Update portfolio website"}

# Add all changes
echo -e "${YELLOW}Adding all changes to git...${NC}"
git add .
echo -e "${GREEN}✓ Changes added${NC}\n"

# Commit changes
echo -e "${YELLOW}Committing changes with message: \"$commit_message\"${NC}"
git commit -m "$commit_message"
echo -e "${GREEN}✓ Changes committed${NC}\n"

# Push to GitHub
echo -e "${YELLOW}Pushing changes to GitHub...${NC}"
echo -e "${YELLOW}This will trigger automatic deployment to GitHub Pages${NC}"
git push -u origin main

if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ Changes pushed successfully!${NC}\n"
  echo -e "${BLUE}===============================================${NC}"
  echo -e "${GREEN}  Your changes have been pushed to GitHub!${NC}"
  echo -e "${GREEN}  The automatic deployment process has begun.${NC}"
  echo -e "${YELLOW}  Your site will be live in a few minutes at:${NC}"
  echo -e "${BLUE}  https://atty57.github.io/portfolio${NC}"
  echo -e "${BLUE}===============================================${NC}\n"
  echo -e "${YELLOW}Note: You can check the deployment status in the Actions tab of your GitHub repository.${NC}"
else
  echo -e "${RED}✗ Failed to push changes to GitHub.${NC}"
  echo -e "${YELLOW}Please check your GitHub credentials and try again.${NC}"
  exit 1
fi