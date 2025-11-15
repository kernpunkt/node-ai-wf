---
id: 7a0cf607-5c13-4db5-b08e-40e0a977ef27
title: ADR: LLM-Optimized TypeScript Constraints
tags:
  - architecture
  - typescript
  - llm-optimization
  - code-quality
  - active
category: ADR
created_at: '2025-01-27T00:00:00.000Z'
updated_at: '2025-01-27T00:00:00.000Z'
last_reviewed: '2025-01-27T00:00:00.000Z'
links: []
sources:
  - tsconfig.json
  - eslint.config.js
  - .cursor/rules/llm-optimized-typescript.mdc
  - docs/LLM_OPTIMIZED_CONSTRAINTS.md
---

# ADR: LLM-Optimized TypeScript Constraints

**Status:** Active

**Context:** LLMs make errors in TS: implicit types, mutations, any types, complex patterns. Need constraints to reduce errors.

**Decision:** Enforce strict TS/ESLint config + Cursor rules for LLM-friendly patterns.

**Constraints:**
- **Types:** Explicit on all function boundaries, ReadonlyArray<T> not T[], no any/unknown without validation
- **Immutability:** No mutations (.push/.pop/.splice), readonly params, spread operators only
- **State:** Discriminated unions not boolean flags, Result<T,E> not exceptions
- **Functions:** Max 20 lines, complexity 10, 3 params max, pure functions preferred
- **Forbidden:** any, type assertions (as), non-null (!), optional chaining >2 levels, generics >2 params

**TS Config:** strict:true, noUncheckedIndexedAccess, exactOptionalPropertyTypes, noPropertyAccessFromIndexSignature, noUnusedLocals/Parameters, noImplicitReturns

**ESLint Rules:** explicit-function-return-type:error, no-explicit-any:error, no-unsafe-*:error, no-non-null-assertion:error, consistent-type-assertions:never, prefer-readonly:error, no-param-reassign:error

**Expected:** 60-70% first-attempt success (vs 30-40%), 90% errors caught by TS (vs 50%), 2-3 iterations (vs 5-7)

**Trade-offs:** More verbose code, stricter constraints, learning curve, some boilerplate (Result types)

**Consequences:** All code must follow patterns, explicit types everywhere, immutable patterns only, Result types for errors

