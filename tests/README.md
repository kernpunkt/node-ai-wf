# Test Infrastructure

This directory contains the test suite for the node-basic project.

## Test Structure

- `setup.ts` - Global test setup and configuration
- `*.test.ts` - Individual test files for different modules
- `example.test.ts` - Basic example tests demonstrating test patterns
- `node-example.test.ts` - Node.js specific test examples

## Running Tests

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests in watch mode
pnpm test --watch
```

## Test Coverage

Coverage is configured to only include source files under `/src` directory, excluding the `/src/examples` directory. The coverage report shows:

- **Statements**: Percentage of code statements executed
- **Branches**: Percentage of conditional branches executed  
- **Functions**: Percentage of functions called
- **Lines**: Percentage of lines executed

**Note**: Example files in `/src/examples` are excluded from coverage since they are template examples, not production code.

## Writing Tests

### Basic Test Structure

```typescript
import { describe, it, expect } from 'vitest';

describe('Module Name', () => {
    it('should do something specific', () => {
        expect(actualValue).toBe(expectedValue);
    });
});
```

### Test Patterns

- Use descriptive test names that explain what is being tested
- Group related tests using `describe` blocks
- Test both happy path and edge cases
- Use appropriate assertions (`toBe`, `toEqual`, `toThrow`, etc.)

### Mocking

For external dependencies, use Vitest's mocking capabilities:

```typescript
import { vi } from 'vitest';

// Mock a module
vi.mock('module-name', () => ({
    default: vi.fn()
}));
```

## Test Files

- `math.test.ts` - Tests for example math utility functions
- `string-utils.test.ts` - Tests for example string utility functions  
- `logger.test.ts` - Tests for example logging functionality
- `utils.test.ts` - General utility function tests
- `node-example.test.ts` - Node.js specific functionality tests
- `example.test.ts` - Basic example tests demonstrating test patterns
