#!/usr/bin/env node

import { execSync } from 'child_process';
import { mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';

/**
 * Cross-platform script to get repository owner and write to .cursor/rules/repo-owner.mdc
 * This script works on all operating systems (Windows, macOS, Linux)
 */

function getRepoOwner() {
  try {
    // Get the origin URL from git
    const originUrl = execSync('git remote get-url origin', { 
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe']
    }).trim();
    
    if (!originUrl) {
      throw new Error('No origin remote found');
    }
    
    // Extract owner from different URL formats
    // Handle both SSH (git@github.com:owner/repo.git) and HTTPS (https://github.com/owner/repo.git) formats
    const match = originUrl.match(/github\.com[:/]([^/]+)\//);
    
    if (!match || !match[1]) {
      throw new Error(`Could not extract owner from URL: ${originUrl}`);
    }
    
    return match[1];
  } catch (error) {
    console.error('Error getting repository owner:', error.message);
    process.exit(1);
  }
}

function writeRepoOwnerFile(owner) {
  try {
    // Create the .cursor/rules directory if it doesn't exist
    const rulesDir = '.cursor/rules';
    mkdirSync(rulesDir, { recursive: true });
    
    // Write the content to the file
    const content = `---
alwaysApply: true
description: name of the current repositorys owner
---
the repo-owners name is ${owner}
`;
    
    writeFileSync('.cursor/rules/repo-owner.mdc', content, 'utf8');
    console.log(`Repository owner '${owner}' written to .cursor/rules/repo-owner.mdc`);
  } catch (error) {
    console.error('Error writing repo owner file:', error.message);
    process.exit(1);
  }
}

// Main execution
const repoOwner = getRepoOwner();
writeRepoOwnerFile(repoOwner);
