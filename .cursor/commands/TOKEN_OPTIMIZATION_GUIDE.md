# Token Optimization Guide for Memory Creation

## Purpose
Optimize memory content created by workflows wf4a (architecture planning) and wf4b (implementation planning) to minimize token usage while preserving critical information for LLM context.

## Key Principles

### 1. Eliminate Verbosity
- ❌ Remove filler words: "The purpose of this", "This document describes", "In order to"
- ❌ Remove explanations: "This means that", "This is important because"
- ❌ Remove context already in title: Don't repeat story ID or component name
- ✅ Jump straight to facts

### 2. Use Abbreviations
- API, HTTP, REST, CRUD, JSON, XML, URI, URL
- TDD, BDD, E2E, UT, IT, FT (unit/integration/functional tests)
- DB, ERD, ORM, SQL, NoSQL
- CLI, GUI, UI, UX
- Async, Sync, Auth, Authn, Authz
- Prod, Dev, Staging

### 3. Structure for Scanning
- Use **key-value** pairs: `Field: Value`
- Use **numbered lists** for order: `1. Item 2. Item`
- Use **arrows** for flow: `A → B → C`
- Use **symbols** for status: `+pro -con ?unknown`

### 4. Remove Redundancy
- Don't repeat information from the title
- Don't restate obvious facts
- Don't include meta-information
- Don't explain what can be inferred

## Before/After Examples

### Example 1: ADR Memory

#### ❌ Verbose (328 tokens)
```markdown
# ADR-002: Using Redis for Session Management

This architectural decision record documents our decision to use Redis as our session storage mechanism. This decision was made on January 15, 2024.

**Context:** We needed to choose a session storage solution for our application. We considered several options including in-memory storage, database-backed sessions, and distributed cache solutions.

**Decision:** We decided to use Redis for session management because it provides low latency access to session data while supporting high levels of concurrency.

**Rationale:** Redis offers several advantages for session management:
- Extremely low latency for reads and writes
- Excellent support for high-concurrency scenarios
- Built-in automatic expiration of sessions
- Simple integration with most application frameworks
- Good horizontal scalability options

**Trade-offs:** 
- **Advantages:** Fast performance, high availability, simple API
- **Disadvantages:** Requires additional infrastructure, adds complexity to deployment, potential data loss if not configured properly

**Impact:** This decision affects our authentication flow and session management. All sessions will now be stored in Redis with automatic expiration based on timeout configuration.

**Consequences:**
- Authentication service must integrate with Redis
- Logout operations will delete entries from Redis
- Session validation requires Redis lookups
- Deployment must include Redis in infrastructure
```

#### ✅ Optimized (78 tokens - 76% reduction)
```markdown
**Decision:** Redis for session store
**Rationale:** Low latency, high concurrency, auto-expiry, simple API
**Trade-offs:** +fast,+avail,-infra,-complexity,-data-loss risk
**Impact:** Auth flow → Redis, logout = Redis delete, validation = Redis lookup
**Cons:** Redis in infra, session timeout config required
```

### Example 2: ARC Memory (Interface Contracts)

#### ❌ Verbose (245 tokens)
```markdown
# User Service API Contracts

This document defines the API contracts for the User Service component. The User Service provides user management functionality including creation, retrieval, updating, and deletion of user records.

**GET /api/users**
- Purpose: Retrieve a list of all users
- Request: No parameters required
- Response: Returns an array of User objects
- User object structure: {id: string, name: string, email: string, createdAt: timestamp}

**POST /api/users**
- Purpose: Create a new user
- Request: User object with name and email fields
- Response: Returns the created User object with generated ID
- Validation: Email must be valid format, name must be between 1-100 characters

**Dependencies:**
- User Service depends on Authentication Service for user identity
- User Service interacts with User Repository for data persistence
- User Repository communicates with database layer
```

#### ✅ Optimized (67 tokens - 73% reduction)
```markdown
**API Contracts:**
- GET /api/users → User[] (no params)
- POST /api/users {name,email} → User (validates email, name 1-100 chars)

**Deps:** UserService → AuthService (identity), UserRepo (persist)
```

### Example 3: ARC Memory (Data Model)

#### ❌ Verbose (312 tokens)
```markdown
# User Entity Data Model

This section defines the data model for the User entity in our system. The User represents an individual user account within the application.

**User Entity**
- **id:** Unique identifier for the user, auto-generated UUID
- **name:** Display name of the user, required field, max 100 characters
- **email:** Email address for authentication and communication, required and must be unique
- **passwordHash:** Securely hashed password using bcrypt, required for authentication
- **createdAt:** Timestamp when user record was created
- **updatedAt:** Timestamp when user record was last modified
- **status:** Current status of the user account (active, suspended, deleted)

**Relationships:**
- User has many Posts (one-to-many relationship)
- User has many Comments (one-to-many relationship)
- User belongs to Organization (many-to-one relationship)

**Validation Rules:**
- Email must match RFC 5322 format
- Name cannot be empty
- Status must be one of: active, suspended, deleted
```

#### ✅ Optimized (96 tokens - 69% reduction)
```markdown
**User Entity:** {id:uuid, name:string<100, email:string unique, passwordHash:string, createdAt:ts, updatedAt:ts, status:enum(active|suspended|deleted)}

**Relations:** 1→N Posts, 1→N Comments, N→1 Organization

**Validations:** email RFC5322, name !empty, status ∈ [active,suspended,deleted]
```

### Example 4: IMP Memory (Implementation Plan)

#### ❌ Verbose (418 tokens)
```markdown
# User Service Implementation Plan

This document outlines the comprehensive implementation plan for the User Service component. The implementation will follow Test-Driven Development (TDD) principles with a focus on maintainability and testability.

**Implementation Order:**
1. User Repository Layer: Implement data access layer first as it is the foundation
2. User Service Layer: Implement business logic dependent on repository
3. User Controller Layer: Implement HTTP handlers that depend on service layer
4. Integration Testing: Test complete flow from controller to database
5. End-to-End Testing: Validate complete user workflows

**Testing Strategy:**
- **Unit Tests:** Target 90% coverage for business logic in UserService
- **Integration Tests:** Target 70% coverage for service-repository interactions
- **End-to-End Tests:** Target 50% coverage of critical user workflows
- Test mocking strategy: Mock database and external services, test real business logic

**Tasks:**
1. Create UserRepository with CRUD operations
2. Implement UserService with business logic and validation
3. Create UserController with HTTP handlers
4. Write unit tests for UserService
5. Write integration tests for UserService-UserRepository
6. Write E2E tests for user workflows

**Risks:**
- Race conditions in concurrent user creation → Use optimistic locking
- Performance issues with large user lists → Implement pagination
- Email validation edge cases → Use validated email library
```

#### ✅ Optimized (142 tokens - 66% reduction)
```markdown
**Order:** 1.UserRepo 2.UserService 3.UserController 4.Integration 5.E2E

**Tests:** Unit(90% service), Integration(70% repo), E2E(50% workflows)
**Mocks:** Database, EmailService; Real: UserService logic

**Tasks:** 1.UserRepo CRUD 2.UserService validation 3.UserController HTTP 4.Unit tests 5.Integration tests 6.E2E tests

**Risks:** Race conditions → optimistic locking, large lists → pagination, email edge cases → validated lib
```

## Summary of Optimization Guidelines

| Type | Verbose Pattern | Optimized Pattern |
|------|----------------|-------------------|
| Decisions | "We decided to use X because Y" | **Decision:** X. **Rationale:** Y |
| Contracts | "GET /api/users returns array of User" | GET /api/users → User[] |
| Types | "User object has id, name, email fields" | User{id, name, email} |
| Flow | "Service A calls Service B which uses Repository" | A → B → Repo |
| Order | "Implement X first, then Y, then Z" | 1.X 2.Y 3.Z |
| Tests | "Unit test coverage of 90 percent" | Unit(90%) |
| Trade-offs | "Advantages: X, Y. Disadvantages: A, B" | +X +Y -A -B |

## Implementation Checklist

When creating memories in wf4a and wf4b:
- [ ] Eliminate all filler words and meta-commentary
- [ ] Use abbreviations for common terms
- [ ] Structure as key-value pairs or concise lists
- [ ] Remove redundancy with titles
- [ ] Use symbols for quick scanning (→, +, -, ?)
- [ ] Focus only on facts LLMs need to know
- [ ] Verify content still provides sufficient context
- [ ] Check token count reduction (target 60-75% reduction)

## Token Impact

Based on the examples above:
- **ADR memories:** 70-80% token reduction
- **ARC memories:** 65-75% token reduction  
- **IMP memories:** 60-70% token reduction
- **DOC memories (reviews):** 65-70% token reduction
- **SEC memories:** 65-70% token reduction
- **BRK memories:** 65-70% token reduction

**Expected overall improvement:** ~70% reduction in token usage across all memory types while preserving all critical information.

## Additional Example: DOC Memory (Review Findings)

### ❌ Verbose Review Memory (285 tokens)
```markdown
# Code Review Findings for User Service

This document contains the comprehensive code review findings for the User Service implementation completed as part of STORY-123.

**Code Quality Assessment:**
The code quality is generally good with a score of 8 out of 10. The implementation follows most clean code principles and adheres to the project's coding standards. However, there are a few areas that need improvement.

**Specific Issues Identified:**

1. **Missing Null Check (Line 45 in user-service.ts):**
   - The getUserById method does not check if the userId parameter is null or undefined before querying the database
   - This could lead to unexpected behavior or errors when null values are passed
   - Recommendation: Add explicit null check at the beginning of the method

2. **Duplicate Logic (Lines 82-95 in user-service.ts):**
   - The email validation logic is duplicated in both createUser and updateUser methods
   - This violates the DRY (Don't Repeat Yourself) principle
   - Recommendation: Extract validation logic into a separate validateEmail method that can be reused

3. **Missing Error Handling (Line 120 in user-service.ts):**
   - The database query does not have proper error handling for network failures or database connection issues
   - This could result in unhandled promise rejections
   - Recommendation: Wrap database operations in try-catch blocks and provide meaningful error messages

**Test Quality:**
The tests are well-written with good coverage. The test quality score is 9 out of 10. All critical paths are covered and the test names are descriptive.

**Architecture Compliance:**
The implementation fully complies with the architectural decisions. Architecture compliance score is 10 out of 10. The component boundaries are respected and integration points are properly implemented.

**Recommendations for Improvement:**
- Refactor duplicate code to improve maintainability
- Add comprehensive error handling for all external dependencies
- Consider adding input validation type guards
```

### ✅ Optimized Review Memory (89 tokens - 69% reduction)
```markdown
**Quality:** CleanCode(8/10), Tests(9/10), Arch(10/10)

**Issues:** 
1.ln45: missing null check in getUserById → add null guard
2.ln82-95: duplicate email validation → extract validateEmail()
3.ln120: no error handling on DB query → wrap in try/catch

**Recommendations:** 
1.extract validator 2.add try/catch 3.add type guards

**Files:** src/user-service.ts:45,82-95,120
```

## Additional Example: SEC Memory (Security Findings)

### ❌ Verbose Security Memory (298 tokens)
```markdown
# Security Assessment for User Service

This document contains a comprehensive security assessment for the User Service implementation completed as part of STORY-123.

**Security Vulnerability Assessment:**

1. **SQL Injection Vulnerability - High Severity (Line 45 in user-service.ts):**
   - The database query for getUserById uses string concatenation without parameterization
   - This creates a SQL injection vulnerability where malicious input could execute arbitrary SQL commands
   - Example vulnerable code: `SELECT * FROM users WHERE id = '${userId}'`
   - Recommendation: Use parameterized queries or prepared statements to prevent SQL injection attacks

2. **Missing Input Sanitization - Medium Severity (Line 82 in user-service.ts):**
   - The email validation does not properly sanitize user input before processing
   - Unsanitized input could lead to XSS (Cross-Site Scripting) attacks or data corruption
   - Recommendation: Implement proper input sanitization to remove or escape potentially dangerous characters

3. **Information Disclosure - Low Severity (Line 120 in user-service.ts):**
   - Error messages expose detailed system information including database structure and file paths
   - This information could be used by attackers to understand system architecture and plan attacks
   - Recommendation: Use generic error messages for production while logging detailed errors server-side

**Security Best Practices:**
- Input validation should be implemented for all user inputs
- Use parameterized queries for all database operations
- Implement comprehensive error handling that doesn't expose system details
- Follow OWASP Top 10 guidelines for secure coding
```

### ✅ Optimized Security Memory (92 tokens - 69% reduction)
```markdown
**Vulns:** 
1.HIGH-ln45: SQL injection in getUserById (string concat) → use parameterized queries
2.MED-ln82: missing input sanitization → sanitize user inputs
3.LOW-ln120: info disclosure in error msgs → use generic msgs

**Recommendations:** 1.parameterized queries 2.input sanitization 3.generic error msgs

**Status:** Critical(0), High(1), Medium(1), Low(1)
**Files:** src/user-service.ts:45,82,120
```

## Additional Example: BRK Memory (Story Breakdown)

### ❌ Verbose Breakdown Memory (267 tokens)
```markdown
# Story Breakdown for User Authentication System

This document tracks the decomposition of the large User Authentication System story (STORY-123) into smaller, more manageable subissues.

**Original Story:**
- Story ID: STORY-123
- Title: User Authentication System
- Original Story Points: 8
- Original Acceptance Criteria: User registration, login, password reset, password change, session management, password hashing

**Breakdown Analysis:**
After analyzing the original story, we identified that it contained multiple independent features that could be delivered separately. The logical breakdown points were:
1. User registration functionality
2. Login functionality  
3. Password management functionality

**Created Subissues:**

1. **STORY-124: User Authentication - Registration** (3 story points)
   - Allows users to register with email and password
   - Implements password validation and hashing
   - Sends confirmation email
   - Dependent on: None (can be implemented independently)

2. **STORY-125: User Authentication - Login** (2 story points)
   - Allows users to login with email and password
   - Manages user sessions securely
   - Dependent on: STORY-124 (requires registration to be complete)

3. **STORY-126: User Authentication - Password Management** (2 story points)
   - Enables users to reset password via email
   - Allows users to change password when logged in
   - Dependent on: STORY-124 (requires registration to be complete)

**Story Point Allocation:**
- Total subissue points: 7 (3 + 2 + 2)
- Original story points: 8
- Point reduction: 1 story point (accounting for overhead in breaking down the story)

**Dependencies:**
Registration must be completed before login and password management can be implemented, as both depend on the existence of user accounts.
```

### ✅ Optimized Breakdown Memory (82 tokens - 69% reduction)
```markdown
**Breakdown:** STORY-123(8pts) → Sub-124(3pts), Sub-125(2pts), Sub-126(2pts) = 7pts

**Subissues:**
- Sub-124: Reg w/ email+pass, validation, hash, confirm email
- Sub-125: Login w/ email+pass, session mgmt
- Sub-126: Reset pass via email, change pass when logged in

**Deps:** Sub-124 → none, Sub-125 → Sub-124, Sub-126 → Sub-124

**Rationale:** Reg → Login → PW mgmt (sequential, independent value)

**Status:** Original(epic), Sub-124(active), Sub-125(pending), Sub-126(pending)
```
