# Story Boundaries Guide

## Purpose
Prevent LLMs from implementing features that belong to other stories by explicitly defining what IS and IS NOT included in each story.

## Problem
When implementing stories, LLMs often implement related features that belong to other stories, causing:
- Scope creep
- Duplicate work
- Unclear ownership
- Integration issues

## Solution
Every story MUST include an explicit "Story Boundaries" section that defines:
- ✅ What IS included (in scope)
- ❌ What IS NOT included (out of scope, belongs to other stories)

## Story Boundaries Template

Every story created through wf2 or wf2a must include this section:

```markdown
## Story Boundaries

**IMPORTANT: This section explicitly defines what IS and IS NOT included in this story to prevent scope creep.**

**✅ In Scope - What this story DOES include:**
- [Specific features/functionality that should be implemented]
- [Specific components or areas that should be covered]

**❌ Out of Scope - What this story DOES NOT include (belongs to other stories):**
- [Features or functionality explicitly excluded]
- [Components or areas that should NOT be implemented in this story]
- [Related functionality that belongs to other stories (reference those stories)]

**⚠️ Implementation Focus:**
- Only implement features listed in "In Scope"
- Do NOT implement features listed in "Out of Scope"
- If uncertain whether something should be included, check this section first
```

## Example: User Authentication Stories

### Story 1: User Registration (STORY-101)

```markdown
## Story Boundaries

**✅ In Scope - What this story DOES include:**
- User can register with email and password
- Email validation (format checking)
- Password strength validation (min length, complexity)
- Password hashing using bcrypt
- User record creation in database
- Confirmation email sending

**❌ Out of Scope - What this story DOES NOT include (belongs to other stories):**
- User login functionality (belongs to STORY-102)
- Password reset functionality (belongs to STORY-103)
- Email verification process (belongs to STORY-104)
- Session management (belongs to STORY-102)
- User profile creation (belongs to STORY-105)
- OAuth authentication (belongs to STORY-106)

**⚠️ Implementation Focus:**
- Only implement registration-related features
- Do NOT implement login, password reset, or profile features
- If implementing email-related features, only do confirmation email sending
```

### Story 2: User Login (STORY-102)

```markdown
## Story Boundaries

**✅ In Scope - What this story DOES include:**
- User can login with email and password
- Password verification against stored hash
- Session creation and management (JWT tokens)
- Session storage in Redis
- Session expiration handling
- Logout functionality (session invalidation)

**❌ Out of Scope - What this story DOES NOT include (belongs to other stories):**
- User registration (belongs to STORY-101)
- Password reset functionality (belongs to STORY-103)
- "Remember me" checkbox functionality (belongs to STORY-107)
- Multi-factor authentication (belongs to STORY-108)
- OAuth integration (belongs to STORY-106)
- Session storage in database (belongs to STORY-101 infrastructure setup)

**⚠️ Implementation Focus:**
- Only implement login and session management
- Do NOT implement registration, password reset, or MFA
- Session storage in Redis only (not database)
```

### Story 3: Password Reset (STORY-103)

```markdown
## Story Boundaries

**✅ In Scope - What this story DOES include:**
- User can request password reset via email
- Password reset token generation (secure random token)
- Password reset token storage with expiration
- Password reset email sending
- Password reset link validation
- New password update functionality

**❌ Out of Scope - What this story DOES NOT include (belongs to other stories):**
- User registration (belongs to STORY-101)
- User login (belongs to STORY-102)
- Password change when logged in (belongs to STORY-109)
- Email verification (belongs to STORY-104)
- Account recovery (belongs to STORY-110)
- Token storage in database (infrastructure belongs to STORY-101)

**⚠️ Implementation Focus:**
- Only implement password reset via email link
- Do NOT implement login, registration, or in-app password change
- Token validation and expiration only, not general authentication
```

## Benefits of Explicit Boundaries

### 1. Prevents Scope Creep
LLMs can check the "Out of Scope" section before implementing features, preventing them from adding functionality that belongs elsewhere.

### 2. Clear Ownership
Each feature is explicitly owned by one story, making it easier to track progress and assign work.

### 3. Better Estimation
Clear boundaries make stories easier to estimate because the scope is well-defined.

### 4. Improved Testability
Clear boundaries help identify what should and shouldn't be tested for each story.

### 5. Better Integration
When all stories have clear boundaries, integration points become more obvious.

## Best Practices

### 1. Be Specific
✅ Good: "Email validation (RFC 5322 format checking, MX record verification)"
❌ Bad: "Email validation"

### 2. Reference Other Stories
✅ Good: "Email verification process (belongs to STORY-104)"
❌ Bad: "Email verification (handled elsewhere)"

### 3. Cross-Check In Scopes
Before creating a new story, check that its features aren't already in another story's "In Scope" section.

### 4. Update Boundaries When Breaking Down
When using wf2a to break down large stories, ensure each subissue has clear boundaries that don't overlap.

### 5. Be Explicit About Infrastructure
✅ Good: "Session storage in Redis (infrastructure setup in STORY-101)"
❌ Bad: "Session storage"

## Implementation Checklist

When creating or updating stories:
- [ ] Include "Story Boundaries" section
- [ ] List all in-scope features explicitly
- [ ] List all out-of-scope features with story references
- [ ] Check for overlap with other stories' "In Scope" sections
- [ ] Update boundaries when breaking down stories
- [ ] Reference related stories by ID
- [ ] Be specific, not vague
- [ ] Include implementation focus warning

## Integration with Workflows

### wf2 (Create User Stories)
- Must define boundaries when creating stories
- Must cross-reference other stories when defining boundaries
- Must validate no boundary overlap exists

### wf2a (Break Down Stories)
- Must define boundaries for each subissue
- Must cross-reference other subissues when defining boundaries
- Must validate no boundary overlap between subissues

### wf3+ (Implementation Workflows)
- LLMs should check boundaries before implementing features
- If a feature is in "Out of Scope", do NOT implement it
- If unsure, check boundaries section first

## Common Mistakes to Avoid

### Mistake 1: Vague Boundaries
```markdown
**✅ In Scope:** User authentication features
**❌ Out of Scope:** Other features
```
**Problem:** Too vague, doesn't help LLMs understand scope

### Mistake 2: Missing Story References
```markdown
**❌ Out of Scope:** Password reset functionality
```
**Problem:** Doesn't tell LLMs where password reset belongs

### Mistake 3: Overlapping Boundaries
```markdown
Story A In Scope: "User login, session management, password reset"
Story B In Scope: "Password reset, user profile"
```
**Problem:** Password reset is in scope of both stories

### Mistake 4: Including Related Infrastructure
```markdown
**✅ In Scope:** "Database setup, Redis configuration, authentication system"
```
**Problem:** Mixes feature implementation with infrastructure setup

## Example: Complete Story with Boundaries

```markdown
## User Story

**As a** user  
**I want** to register with email and password  
**So that** I can create an account

## Story Points

Estimate: 3 story points using Fibonacci scale

## Story Boundaries

**✅ In Scope - What this story DOES include:**
- User can enter email and password on registration form
- Email format validation (RFC 5322)
- Password strength validation (min 8 chars, uppercase, lowercase, number)
- Password hashing using bcrypt (10 rounds)
- User record creation in users table
- Confirmation email sending via SendGrid API
- Registration success/failure messages

**❌ Out of Scope - What this story DOES NOT include (belongs to other stories):**
- User login functionality (belongs to STORY-102)
- Email verification on click (belongs to STORY-104)
- Password reset (belongs to STORY-103)
- Session management (belongs to STORY-102)
- OAuth registration (belongs to STORY-106)
- User profile setup (belongs to STORY-105)
- Database infrastructure (belongs to STORY-101)

**⚠️ Implementation Focus:**
- Only implement registration form and backend logic
- Do NOT implement login, email verification, or OAuth
- Database already set up in STORY-101, use existing connection

## Acceptance Criteria

- [ ] User can submit registration form with valid email and password
- [ ] Email validation rejects invalid formats
- [ ] Password validation enforces strength requirements
- [ ] Password is hashed with bcrypt before storage
- [ ] User record is created in database
- [ ] Confirmation email is sent via SendGrid
- [ ] Success message displays after registration
- [ ] Error messages display for validation failures

## Dependencies

- Depends on: STORY-101 (Database infrastructure, SendGrid configuration)
```

This story is now crystal clear about what should and shouldn't be implemented!
