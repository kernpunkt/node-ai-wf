# Dependency Management

This template repository is configured to help you maintain up-to-date dependencies while ensuring stability and compatibility.

## Version Strategy

### Current Approach: No Major Version Locking
- **Greater-than-or-equal (`>=`)**: Used for all dependencies to allow any version updates including major versions
- **No major version restrictions**: Allows breaking changes and new features
- **Stable releases only**: No beta or alpha versions included
- **Template-optimized**: Always gets the absolute latest stable versions

### Why This Approach for Templates?
- ✅ **Always latest**: Gets the newest features and improvements
- ✅ **Security**: Automatic security patches and fixes
- ✅ **Template-friendly**: New projects get cutting-edge versions
- ✅ **Future-proof**: No need to manually update major versions
- ⚠️ **Breaking changes possible**: May require code updates when major versions change
- ⚠️ **Testing required**: Need to test after dependency updates

### Alternative Approaches

#### Conservative Approach (Caret Ranges)
```json
{
  "dependencies": {
    "winston": "^3.17.0"  // Allows 3.17.0 to 3.x.x (latest)
  }
}
```
- ✅ **Stability**: Major version changes are controlled
- ✅ **Compatibility**: Maintains API compatibility within major versions
- ❌ **Outdated**: May miss new features and improvements

#### Aggressive Approach (Latest)
```json
{
  "dependencies": {
    "winston": "latest"  // Always gets absolute latest
  }
}
```
- ✅ **Always cutting-edge**: Gets newest features immediately
- ❌ **High risk**: Frequent breaking changes
- ❌ **Unpredictable**: Builds may fail unexpectedly

## Available Scripts

### Check for Updates
```bash
pnpm run deps:check
```
Shows which dependencies have newer versions available without making changes. Uses pnpm's native `outdated` command.

### Update All Dependencies
```bash
pnpm run deps:update
```
Updates all dependencies to their latest versions using pnpm's native `update --latest` command.

### Interactive Update
```bash
pnpm run deps:update-interactive
```
Allows you to selectively choose which dependencies to update using pnpm's interactive mode.

### Preview Updates (Dry Run)
```bash
pnpm run deps:update-check
```
Shows what would be updated without actually making changes (dry run mode).

## Best Practices for Template Usage

### When Using This Template
1. **Clone the repository**
2. **Install dependencies**: `pnpm install`
3. **Check for updates**: `pnpm run deps:check`
4. **Update if needed**: `pnpm run deps:update`

### Regular Maintenance
- **Monthly**: Run `pnpm run deps:check` to see available updates
- **Quarterly**: Run `pnpm run deps:update` to get latest stable versions
- **Before major releases**: Update dependencies and test thoroughly

## Version Range Examples

### Current Template Configuration
```json
{
  "dependencies": {
    "winston": ">=3.17.0"  // Allows 3.17.0 and above (any major version)
  },
  "devDependencies": {
    "typescript": ">=5.9.2"  // Allows 5.9.2 and above (any major version)
  }
}
```

### Alternative Configurations

#### Conservative (Major Version Locked)
```json
{
  "dependencies": {
    "winston": "^3.17.0"  // Allows 3.17.0 to 3.x.x (latest)
  }
}
```

#### Aggressive (Always Latest)
```json
{
  "dependencies": {
    "winston": "latest"  // Always gets absolute latest
  }
}
```

## Troubleshooting

### If Updates Break Something
1. **Check the changelog** of the updated package
2. **Revert the specific package**: `pnpm add package@previous-version`
3. **Report issues** to the package maintainer
4. **Consider switching to caret ranges** for problematic packages

### For Major Version Updates (Common with >= ranges)
- **Review breaking changes** in the package documentation
- **Update code** to match new API requirements
- **Test thoroughly** before deploying
- **Use `pnpm run deps:check`** to see what will be updated before running `pnpm run deps:update`

### Handling Breaking Changes
Since this template uses `>=` ranges, major version updates are common:
1. **Read migration guides** for major version changes
2. **Update your code** to match new APIs
3. **Run tests** to ensure everything still works
4. **Consider pinning specific versions** for critical packages if needed

## Tools Used

- **pnpm native commands**: Built-in dependency management using `pnpm outdated` and `pnpm update --latest`
- **pnpm**: Fast, disk space efficient package manager with excellent dependency management
- **Greater-than-or-equal ranges (`>=`)**: Allows all version updates including major versions

## Alternative Tools

### Universal Package Manager Tools
If you want a tool that works across different package managers:

#### `ni` - Universal Package Manager
```bash
# Install globally
pnpm add -g ni

# Commands that auto-detect package manager
ni          # Install dependencies (works with npm, pnpm, yarn)
nu          # Update dependencies (like ncu -u)
nci         # Clean install
```

#### `npm-check-updates` (if needed)
```bash
# Install globally
pnpm add -g npm-check-updates

# Use with pnpm
ncu -p pnpm
```

## Understanding pnpm's Behavior

### Why No `node_modules` Initially?
When you run `pnpm install` for the first time, you might not see a `node_modules` folder immediately. This is **normal pnpm behavior**:

1. **pnpm uses a global store**: Dependencies are stored in `~/.pnpm/store/` by default
2. **Symbolic links**: `node_modules` contains symbolic links to the global store
3. **Lazy creation**: The `node_modules` folder is created when you actually add dependencies

### pnpm Directory Structure
```
your-project/
├── node_modules/           # Symbolic links to global store
│   ├── winston -> ../../node_modules/.pnpm/winston@3.17.0/node_modules/winston
│   ├── typescript -> ../../node_modules/.pnpm/typescript@5.9.2/node_modules/typescript
│   └── .bin/              # Executable binaries
├── package.json
└── pnpm-lock.yaml         # Lock file (created after first install)
```

### Global Store Location
```bash
# Check where pnpm stores packages globally
pnpm store path
# Output: /Users/username/Library/pnpm/store/v10
```

### Benefits of pnpm's Approach
- ✅ **Disk space efficient**: Each package version stored only once globally
- ✅ **Fast installs**: Symbolic links are created instantly
- ✅ **Strict dependency resolution**: Prevents phantom dependencies
- ✅ **Consistent across projects**: Same package versions shared between projects

## Security Considerations

- **Regular updates**: Keep dependencies current to receive security patches
- **Audit dependencies**: Run `pnpm audit` regularly
- **Lock files**: Commit `pnpm-lock.yaml` to ensure consistent installs across environments
