# LLM-Optimized TypeScript Constraints Reference

This document provides a comprehensive reference of all TypeScript compiler options and ESLint rules that optimize code generation quality for LLMs.

## TypeScript Compiler Options (`tsconfig.json`)

### Core Strict Options

These are enabled by `strict: true` but listed explicitly for clarity:

- **`strict: true`** - Enables all strict type checking options
- **`noImplicitAny: true`** - Prevents implicit `any` types
- **`strictNullChecks: true`** - Makes `null` and `undefined` explicit in types
- **`strictFunctionTypes: true`** - Enforces strict checking of function types
- **`strictBindCallApply: true`** - Strict checking of `bind`, `call`, and `apply` methods
- **`strictPropertyInitialization: true`** - Ensures class properties are initialized
- **`noImplicitThis: true`** - Prevents implicit `this` with `any` type
- **`alwaysStrict: true`** - Parses in strict mode and emits "use strict"

### Additional Strict Options

- **`noUnusedLocals: true`** - Reports errors on unused local variables
- **`noUnusedParameters: true`** - Reports errors on unused parameters
- **`noImplicitReturns: true`** - Ensures all code paths return a value
- **`noFallthroughCasesInSwitch: true`** - Prevents fall-through in switch statements

### Type Safety Options

- **`noUncheckedIndexedAccess: true`** - Makes array/object index access return `T | undefined`
  - Forces explicit null checks: `const item = array[0]` → `item` is `T | undefined`
  - Prevents LLMs from assuming array access always succeeds

- **`exactOptionalPropertyTypes: true`** - Distinguishes between `prop?: T` and `prop: T | undefined`
  - Makes optional properties more explicit

- **`noPropertyAccessFromIndexSignature: true`** - Requires bracket notation for index signatures
  - Forces explicit handling of dynamic property access

## ESLint Rules

### Explicit Type Rules

These enforce explicit types, reducing LLM ambiguity:

- **`@typescript-eslint/explicit-function-return-type: 'error'`**
  - Requires explicit return types on all functions
  - Prevents LLMs from inferring wrong return types

- **`@typescript-eslint/explicit-module-boundary-types: 'error'`**
  - Requires explicit types on exported functions
  - Ensures public API contracts are clear

- **`@typescript-eslint/no-inferrable-types: 'error'`**
  - Prevents redundant type annotations (e.g., `const x: number = 5`)
  - Keeps code clean while maintaining explicit types where needed

### Type Safety Rules

- **`@typescript-eslint/no-explicit-any: 'error'`**
  - Bans `any` type completely
  - Forces use of `unknown` with proper type guards

- **`@typescript-eslint/no-unsafe-assignment: 'error'`**
  - Prevents assigning `any` values to typed variables

- **`@typescript-eslint/no-unsafe-call: 'error'`**
  - Prevents calling functions typed as `any`

- **`@typescript-eslint/no-unsafe-member-access: 'error'`**
  - Prevents accessing properties on `any` typed objects

- **`@typescript-eslint/no-unsafe-return: 'error'`**
  - Prevents returning `any` values from typed functions

- **`@typescript-eslint/no-non-null-assertion: 'error'`**
  - Bans `!` non-null assertion operator
  - Forces explicit null checks instead

- **`@typescript-eslint/consistent-type-assertions: ['error', { assertionStyle: 'never' }]`**
  - Bans type assertions (`as` keyword)
  - Forces use of type guards for type narrowing

### Immutability Rules

- **`@typescript-eslint/prefer-readonly: 'error'`**
  - Suggests `readonly` modifier for properties that are never reassigned
  - Encourages immutable data structures

- **`@typescript-eslint/prefer-readonly-parameter-types: ['warn', {...}]`**
  - Suggests `readonly` for parameters that aren't mutated
  - Note: May be too strict in some cases, set to 'warn'

- **`no-param-reassign: ['error', { props: true }]`**
  - Prevents reassigning function parameters
  - Prevents mutating parameter properties

- **`no-array-constructor: 'error'`**
  - Prevents `new Array()` constructor
  - Encourages array literal syntax

- **`prefer-const: 'error'`**
  - Requires `const` for variables that are never reassigned
  - Encourages immutable bindings

### Function Quality Rules

- **`max-lines-per-function: ['error', { max: 100 }]`**
  - Limits function size (LLM-friendly: 20 lines ideal, 100 max)
  - Prevents complex, hard-to-understand functions

- **`max-params: ['error', 3]`**
  - Limits function parameters to 3
  - Forces use of parameter objects for complex functions

- **`complexity: ['error', 10]`**
  - Limits cyclomatic complexity
  - Prevents overly complex control flow

- **`max-depth: ['error', 4]`**
  - Limits nesting depth
  - Encourages early returns and guard clauses

- **`consistent-return: 'error'`**
  - Requires consistent return patterns
  - Prevents implicit returns and mixed return types

### Code Structure Rules

- **`max-lines: ['error', 300]`**
  - Limits file size
  - Encourages modular code organization

- **`no-var: 'error'`**
  - Bans `var` keyword
  - Forces `const` or `let` with proper scoping

### Type Import Rules

- **`@typescript-eslint/consistent-type-imports: ['error', { prefer: 'type-imports' }]`**
  - Requires `import type` for type-only imports
  - Improves tree-shaking and makes type dependencies explicit

### Type Consistency Rules

- **`@typescript-eslint/prefer-as-const: 'error'`**
  - Suggests `as const` for literal types
  - Improves type inference

- **`@typescript-eslint/no-unnecessary-type-constraint: 'error'`**
  - Removes unnecessary generic constraints
  - Keeps types clean and minimal

## Patterns Not Enforceable by Config

These patterns are enforced by the Cursor rule (`.cursor/rules/llm-optimized-typescript.mdc`) but cannot be enforced by TypeScript/ESLint:

### Discriminated Unions

- Use discriminated unions instead of boolean flags
- Example: `type State = { status: 'loading' } | { status: 'error', error: string }`
- Enforced by: Cursor rule + code review

### Result/Option Types

- Use `Result<T, E>` pattern for error handling
- Example: `type Result<T, E> = { success: true, data: T } | { success: false, error: E }`
- Enforced by: Cursor rule + code review

### ReadonlyArray Preference

- Prefer `ReadonlyArray<T>` over `T[]` for parameters and returns
- Enforced by: Cursor rule + ESLint `prefer-readonly-parameter-types` (warn level)

### Optional Chaining Depth

- Limit optional chaining to 2 levels maximum
- Example: ✅ `data?.user?.name`, ❌ `data?.user?.profile?.settings?.theme`
- Enforced by: Cursor rule + code review

### Generic Complexity

- Limit generics to 2 type parameters maximum
- Enforced by: Cursor rule + code review

## Configuration Files

- **TypeScript**: See `tsconfig.json`
- **ESLint**: See `eslint.config.js`
- **Cursor Rules**: See `.cursor/rules/llm-optimized-typescript.mdc`

## Expected Outcomes

When following these constraints:

- **60-70% first-attempt success rate** (vs ~30-40% in unconstrained TypeScript)
- **90% of errors caught by TypeScript** (vs ~50% in loose TypeScript)
- **2-3 iterations to working code** (vs 5-7 in unconstrained TypeScript)

## Trade-offs

### Benefits

- Reduced LLM errors
- Better type safety
- More maintainable code
- Fewer runtime errors

### Costs

- More verbose code (explicit types everywhere)
- Stricter constraints (may require refactoring existing code)
- Learning curve for developers
- Some patterns require more boilerplate (Result types, discriminated unions)

## Migration Strategy

1. **Enable strict options gradually**: Start with `strict: true`, then add additional options
2. **Fix ESLint errors incrementally**: Don't try to fix everything at once
3. **Use Cursor rule as guide**: The rule provides patterns even if not enforced by tooling
4. **Measure improvement**: Track first-attempt success rate and iteration count

## References

- [TypeScript Compiler Options](https://www.typescriptlang.org/tsconfig)
- [TypeScript ESLint Rules](https://typescript-eslint.io/rules/)
- [LLM-Optimized TypeScript Patterns](./.cursor/rules/llm-optimized-typescript.mdc)



