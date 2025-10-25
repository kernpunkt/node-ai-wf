# Example Source Files

This directory contains example source files that demonstrate various patterns and utilities for the node-basic template repository.

## Files

- `math.ts` - Example math utility functions demonstrating basic arithmetic operations
- `string-utils.ts` - Example string manipulation utilities
- `logger.ts` - Example logging setup using Winston

## Purpose

These files serve as:

1. **Template Examples** - Show how to structure utility modules
2. **Test Examples** - Provide code to test the testing infrastructure
3. **Pattern Demonstrations** - Illustrate common Node.js patterns and best practices

## Usage

These files are included in the test suite to verify that the testing infrastructure works correctly, but they are excluded from coverage reporting since they are just examples.

## For Template Users

When using this template:

1. **Keep or Remove** - You can keep these examples or remove them based on your needs
2. **Reference** - Use them as reference for structuring your own modules
3. **Testing** - They demonstrate how to write comprehensive tests for your code

## Testing

The example files have corresponding test files in `/tests/`:
- `math.test.ts` - Tests for math utilities
- `string-utils.test.ts` - Tests for string utilities  
- `logger.test.ts` - Tests for logging functionality

Run tests with:
```bash
pnpm test
```
