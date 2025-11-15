# Code Documentation Coverage - MCP Usage Guide

## Overview

This guide explains how to use the Memory Tools MCP server to create documentation memories that will be compatible with the code documentation coverage tool. The coverage tool analyzes your memories to identify which parts of your codebase are documented and which need attention.

## The Importance of Good Documentation

⚠️ **Critical Warning: Coverage ≠ Quality**

While the coverage tool helps identify undocumented areas, **coverage metrics alone do not guarantee good documentation**. The goal is to create documentation that provides genuine value to humans and LLMs, not just to satisfy coverage requirements.

### What Makes Documentation Valuable

**Good documentation provides insights that cannot be easily derived from reading the code:**

✅ **Explains the "Why" Behind the "What"**
```json
{
  "title": "Why we use bidirectional linking in MemoryService",
  "content": "# Bidirectional Linking Rationale\n\n**Problem:** Traditional one-way links create orphaned references when memories are deleted.\n\n**Solution:** Bidirectional linking ensures referential integrity and enables discovery of related content.\n\n**Trade-offs:**\n- Slightly more complex implementation\n- Better data consistency\n- Improved search and discovery\n\n**Implementation Details:**\nThe LinkService maintains both forward and reverse link maps, automatically updating both when links are created or removed.",
  "category": "DOC",
  "tags": ["architecture", "linking", "data-integrity"],
  "sources": ["src/memory/link-service.ts:1-50"]
}
```

✅ **Documents Complex Business Logic and Edge Cases**
```json
{
  "title": "Memory validation edge cases and business rules",
  "content": "# Memory Validation Business Rules\n\n**Critical Edge Cases:**\n\n1. **Circular References:** Prevent infinite loops in memory linking\n2. **Duplicate Prevention:** Allow same title if different categories\n3. **Content Sanitization:** Strip HTML but preserve markdown formatting\n4. **Size Limits:** 10MB max content size to prevent memory issues\n\n**Business Logic:**\n- Memories without categories default to 'general'\n- Auto-generated IDs use UUID v4 for collision resistance\n- Search indexing happens asynchronously to avoid blocking\n\n**Error Handling:**\n- Invalid JSON content returns 400, not 500\n- Missing required fields provide specific error messages\n- Network timeouts are retried with exponential backoff",
  "category": "DOC",
  "tags": ["validation", "business-rules", "edge-cases"],
  "sources": ["src/memory/memory-service.ts:25-75", "src/memory/types.ts:15-30"]
}
```

✅ **Explains Performance Characteristics and Trade-offs**
```json
{
  "title": "FlexSearch performance characteristics and optimization",
  "content": "# FlexSearch Performance Analysis\n\n**Performance Characteristics:**\n- **Indexing:** O(n) where n = number of tokens\n- **Search:** O(log n) for exact matches, O(n) for fuzzy\n- **Memory:** ~2-3x the original text size\n\n**Optimization Strategies:**\n1. **Tokenization:** Use 'forward' for speed, 'strict' for precision\n2. **Resolution:** Higher values = more memory, better recall\n3. **Depth:** Controls search depth vs performance trade-off\n\n**Real-world Performance:**\n- 10,000 memories: ~50ms search time\n- 100,000 memories: ~200ms search time\n- Index size: ~15MB for 10k memories\n\n**When to Use Each Mode:**\n- **Development:** Use 'tolerant' for quick iteration\n- **Production:** Use 'forward' for balanced performance\n- **High Precision:** Use 'strict' for exact matching",
  "category": "DOC",
  "tags": ["performance", "optimization", "flexsearch"],
  "sources": ["src/utils/flexsearch-config.ts:1-40", "src/memory/search-service.ts:25-60"]
}
```

### What Makes Documentation Useless

❌ **Avoid Documentation That Merely Restates the Obvious**

**Bad Example - Just Describes What the Code Does:**
```json
{
  "title": "createMemory function documentation",
  "content": "# createMemory Function\n\nThis function creates a new memory. It takes a title, content, and category as parameters. It returns a Promise that resolves to the created memory.",
  "category": "DOC",
  "tags": ["function", "memory"],
  "sources": ["src/memory/memory-service.ts:25-35"]
}
```

**Good Example - Explains Why and How:**
```json
{
  "title": "createMemory validation and business logic",
  "content": "# createMemory: Validation and Business Logic\n\n**Purpose:** Creates validated memories with proper error handling and business rule enforcement.\n\n**Key Business Rules:**\n1. **Title Validation:** Must be 1-200 characters, no HTML\n2. **Content Sanitization:** Strips HTML but preserves markdown\n3. **Category Handling:** Defaults to 'general' if not specified\n4. **Duplicate Prevention:** Same title allowed in different categories\n\n**Error Scenarios:**\n- Invalid JSON: Returns 400 with specific field errors\n- Network failures: Retries with exponential backoff\n- Validation errors: Returns structured error messages\n\n**Performance Considerations:**\n- Async validation to avoid blocking\n- Batch processing for multiple memories\n- Indexing happens in background thread",
  "category": "DOC",
  "tags": ["validation", "business-logic", "error-handling"],
  "sources": ["src/memory/memory-service.ts:25-75"]
}
```

### Documentation Quality Checklist

Before creating documentation, ask yourself:

1. **Does this explain something not obvious from the code?**
   - ✅ Explains business rules, edge cases, or design decisions
   - ❌ Just restates what the function parameters are

2. **Would this help someone understand the system better?**
   - ✅ Provides context about why certain choices were made
   - ❌ Just lists method names and parameters

3. **Does this document complex logic or trade-offs?**
   - ✅ Explains performance characteristics, error handling, or architectural decisions
   - ❌ Just describes what the code does

4. **Would this be valuable for future maintenance?**
   - ✅ Documents edge cases, gotchas, or non-obvious behaviors
   - ❌ Just restates the obvious

### When to Document vs. When to Skip

**Document These:**
- Architectural decisions and their rationale
- Complex business logic and edge cases
- Performance characteristics and trade-offs
- Error handling strategies
- Integration patterns and dependencies
- Security considerations
- Testing strategies and coverage gaps

**Skip These:**
- Simple getter/setter methods with obvious purposes
- Standard CRUD operations without special logic
- Configuration files that are self-explanatory
- Boilerplate code with no business logic
- Comments that just restate what the code does

### Quality Over Quantity

Remember: **One high-quality documentation memory is worth ten trivial ones.** Focus on creating documentation that provides genuine insights and helps both humans and LLMs understand the deeper aspects of your codebase.

## Memory Categories for Code Documentation

When creating memories for code documentation, use these specific categories:

### 1. **DEF** - Project Definitions and Goals
Use for project-level definitions, goals, user personas, MVP scope, and overall project vision.

**Example:**
```json
{
  "title": "Project MVP scope and user personas",
  "content": "# Project MVP: Memory Management System\n\n**Project Goal:** Create a memory-based documentation system optimized for LLM consumption.\n\n**User Personas:**\n- **Developers:** Need quick access to architectural decisions and implementation patterns\n- **LLMs:** Require structured, searchable documentation for code understanding\n- **Project Managers:** Need visibility into project progress and architectural decisions\n\n**MVP Scope:**\n- Core memory CRUD operations\n- FlexSearch integration for semantic search\n- Basic linking between memories\n- Simple web interface for memory management\n\n**Success Criteria:**\n- 90%+ code coverage through memory documentation\n- Sub-200ms search response times\n- Intuitive memory linking and discovery\n- LLM-friendly documentation format",
  "category": "DEF",
  "tags": ["project-goals", "mvp", "user-personas", "scope"],
  "sources": ["README.md", "docs/", "package.json"]
}
```

### 2. **ARC** - Story-Specific Architectural Decisions
Use for architectural decisions and component design specific to individual user stories.

**Example:**
```json
{
  "title": "Memory CRUD operations architecture for STORY-123",
  "content": "# Memory CRUD Architecture for STORY-123\n\n**Story Context:** User needs to create, read, update, and delete memories through a web interface.\n\n**Architectural Decisions for This Story:**\n- **API Design:** RESTful endpoints following OpenAPI 3.0 specification\n- **Data Validation:** JSON Schema validation for request/response\n- **Error Handling:** HTTP status codes with structured error responses\n- **Authentication:** JWT-based authentication for memory operations\n\n**Component Design:**\n- **MemoryController:** Handles HTTP requests and responses\n- **MemoryService:** Business logic for CRUD operations\n- **MemoryRepository:** Data access layer with database abstraction\n- **ValidationService:** Input validation and sanitization\n\n**Integration Points:**\n- Frontend communicates via REST API\n- Database operations use repository pattern\n- Validation happens at service layer\n- Error responses follow consistent format\n\n**Story-Specific Considerations:**\n- Optimized for web interface requirements\n- Supports real-time updates via WebSocket\n- Implements optimistic locking for concurrent edits",
  "category": "ARC",
  "tags": ["story_id:STORY-123", "component:backend", "status:active", "architecture", "crud"],
  "sources": ["src/controllers/memory-controller.ts", "src/services/memory-service.ts", "src/repositories/memory-repository.ts"]
}
```

### 3. **ADR** - Architecture Decision Records
Use for overarching architectural decisions that apply across multiple user stories and explain the "why" behind architectural choices.

**Example:**
```json
{
  "title": "ADR-001: Memory-based documentation over traditional docs",
  "content": "# ADR-001: Memory-Based Documentation Architecture\n\n**Date:** 2024-01-15\n**Status:** Active\n\n**Context:** Need to choose between traditional documentation (README, wiki, etc.) and a memory-based system for LLM-friendly documentation.\n\n**Decision:** Use memory-based documentation with structured JSON format and semantic search capabilities.\n\n**Rationale:**\n- **LLM Compatibility:** Memories can be directly ingested by LLMs without parsing\n- **Semantic Search:** FlexSearch enables natural language queries across documentation\n- **Structured Data:** JSON format allows for precise source mapping and coverage analysis\n- **Version Control:** Git-friendly format enables tracking documentation changes\n- **Bidirectional Linking:** Enables discovery of related documentation\n\n**Trade-offs:**\n- **Learning Curve:** Team needs to learn new documentation format\n- **Tooling:** Requires custom tools for coverage analysis and management\n- **Migration:** Existing documentation needs conversion\n- **Search Dependency:** Relies on FlexSearch for effective discovery\n\n**Consequences:**\n- All user stories must follow memory-based documentation approach\n- Documentation tooling must support JSON format and FlexSearch\n- Team training required for new documentation patterns\n- Coverage analysis tool must parse memory sources\n\n**Supersedes:** None\n**Superseded by:** None",
  "category": "ADR",
  "tags": ["architecture", "documentation", "memory-system", "llm-integration", "active"],
  "sources": ["src/memory/", "src/utils/flexsearch.ts", "src/memory/memory-service.ts"]
}
```

### 4. **IMP** - Implementation Plans and Strategies
Use for detailed implementation plans, testing strategies, and development approaches that guide the implementation of specific user stories.

**Example:**
```json
{
  "title": "Memory CRUD operations implementation plan",
  "content": "# Memory CRUD Implementation Plan\n\n**Implementation Strategy:**\n- **TDD Approach:** Write unit tests first, then implement functionality\n- **BDD Integration:** Use Cucumber scenarios for end-to-end validation\n- **Component-First:** Implement core services before integration\n\n**Testing Strategy:**\n- **Unit Tests:** Test individual service methods in isolation\n- **Integration Tests:** Test service interactions and data flow\n- **BDD Tests:** Validate complete user workflows\n- **Mock Strategy:** Mock external dependencies, test real business logic\n\n**Implementation Order:**\n1. **MemoryService:** Core CRUD operations with validation\n2. **SearchService:** FlexSearch integration and indexing\n3. **LinkService:** Bidirectional linking management\n4. **FileService:** Persistent storage with atomic operations\n5. **Integration:** Connect all services with proper error handling\n\n**Quality Gates:**\n- All unit tests pass before integration\n- BDD scenarios validate complete workflows\n- Code coverage > 90% for business logic\n- Performance tests validate search response times\n\n**Error Handling:**\n- Structured error responses with specific field errors\n- Graceful degradation for non-critical failures\n- Comprehensive logging for debugging\n- User-friendly error messages",
  "category": "IMP",
  "tags": ["implementation", "testing", "strategy", "planning"],
  "sources": ["tests/", "src/memory/", "features/"]
}
```

### 5. **DOC** - Documentation about features, business logic, edge-cases, classes and functions
Use for documenting specific code elements, functions, classes or features, business logic, edge cases.

**Example:**
```json
{
  "title": "MemoryService validation and error handling patterns",
  "content": "# MemoryService: Validation and Error Handling Architecture\n\n**Purpose:** Core service for memory operations with comprehensive validation and robust error handling.\n\n**Critical Business Rules:**\n\n**Memory Creation Validation:**\n- **Title Requirements:** 1-200 characters, no HTML tags, must be unique within category\n- **Content Sanitization:** Strips HTML but preserves markdown formatting\n- **Category Handling:** Defaults to 'general' if not specified, validates against allowed categories\n- **Size Limits:** 10MB max content size to prevent memory issues\n\n**Error Handling Strategy:**\n- **Validation Errors:** Return 400 with specific field errors and suggestions\n- **Network Failures:** Implement exponential backoff with max 3 retries\n- **Concurrent Access:** Use optimistic locking to prevent race conditions\n- **Partial Failures:** Rollback changes if any part of the operation fails\n\n**Performance Optimizations:**\n- **Async Validation:** Non-blocking validation to maintain responsiveness\n- **Batch Operations:** Process multiple memories in single transaction\n- **Background Indexing:** Search index updates happen asynchronously\n- **Caching Strategy:** LRU cache for frequently accessed memories\n\n**Edge Cases Handled:**\n- **Circular References:** Detect and prevent infinite loops in memory linking\n- **Duplicate Prevention:** Allow same title across different categories\n- **Content Encoding:** Handle UTF-8, HTML entities, and special characters\n- **Memory Limits:** Graceful degradation when approaching system limits\n\n**Integration Points:**\n- **SearchService:** Automatic indexing of new memories\n- **LinkService:** Bidirectional link management\n- **FileService:** Persistent storage with atomic writes\n- **ValidationService:** Centralized validation logic",
  "category": "DOC",
  "tags": ["validation", "error-handling", "business-logic", "performance", "architecture"],
  "sources": ["src/memory/memory-service.ts:25-75", "src/memory/types.ts:15-30", "src/memory/validation-service.ts"]
}
```

### 6. **CRV** - Code Review Findings and Recommendations
Use for documenting code review findings, recommendations for improvement, code quality assessments, and adherence to standards and best practices.

**Example:**
```json
{
  "title": "Code review findings for MemoryService implementation STORY-123",
  "content": "# Code Review: MemoryService Implementation for STORY-123\n\n**Review Date:** 2024-01-20\n**Reviewer:** Development Team\n**Status:** Approved with Recommendations\n\n**Code Quality Assessment:**\n- **Overall Quality:** Good adherence to clean code principles\n- **Test Coverage:** 92% coverage with comprehensive unit and integration tests\n- **Performance:** Meets requirements with <200ms response times\n- **Security:** No critical vulnerabilities identified\n\n**Issues Found:**\n\n**Critical Issues:**\n- None\n\n**Major Issues:**\n1. **Error Handling:** Missing error handling for edge case when database connection is lost during transaction (line 45-50)\n   - **Recommendation:** Add connection retry logic with exponential backoff\n   - **Priority:** High\n\n2. **Function Complexity:** `validateMemoryContent()` exceeds complexity threshold (complexity: 12, max: 10)\n   - **Recommendation:** Split into smaller functions: `sanitizeContent()`, `checkSizeLimits()`, `validateFormatting()`\n   - **Priority:** Medium\n\n**Minor Issues:**\n1. **Naming:** Variable `tmp` on line 78 should be renamed to `temporaryMemoryCache` for clarity\n2. **Documentation:** Missing JSDoc comment for `processMemoryBatch()` method\n3. **Type Safety:** Consider using `unknown` instead of `any` in error handler (line 120)\n\n**Positive Findings:**\n- Excellent use of TypeScript types and interfaces\n- Comprehensive error messages that are user-friendly\n- Good separation of concerns between service and repository layers\n- Well-structured test suite with good coverage\n- Performance optimizations (async validation, batch processing) are well-implemented\n\n**Recommendations:**\n1. **Refactoring:** Extract validation logic into separate ValidationService to improve testability\n2. **Testing:** Add edge case tests for concurrent memory creation scenarios\n3. **Performance:** Consider adding caching layer for frequently accessed memories\n4. **Documentation:** Add ADR documenting the decision to use optimistic locking\n\n**Standards Compliance:**\n- ✅ Follows TypeScript coding standards\n- ✅ Adheres to clean code principles\n- ✅ Meets function complexity requirements (except one function)\n- ✅ Proper error handling patterns\n- ✅ Comprehensive test coverage\n\n**Follow-up Actions:**\n- [ ] Address major issues before merge\n- [ ] Update documentation per recommendations\n- [ ] Add missing edge case tests\n- [ ] Create ADR for optimistic locking decision",
  "category": "CRV",
  "tags": ["story_id:STORY-123", "code-review", "code-quality", "refactoring", "status:approved"],
  "sources": ["src/memory/memory-service.ts:1-150", "tests/memory/memory-service.test.ts:1-100"]
}
```

### 7. **SEC** - Security Considerations and Audits
Use for security assessments, vulnerability analysis, and security best practices documentation.

**Example:**
```json
{
  "title": "Memory system security assessment and best practices",
  "content": "# Memory System Security Assessment\n\n**Security Considerations:**\n- **Input Validation:** All user inputs validated and sanitized\n- **Data Protection:** Sensitive data encrypted at rest and in transit\n- **Access Control:** Role-based access control for memory operations\n- **Audit Logging:** Comprehensive logging of all security-relevant operations\n\n**Vulnerability Assessment:**\n- **SQL Injection:** Protected by parameterized queries and input validation\n- **XSS Prevention:** Content sanitization removes HTML tags while preserving markdown\n- **CSRF Protection:** Token-based protection for state-changing operations\n- **Data Exposure:** Sensitive data not logged or exposed in error messages\n\n**Security Best Practices:**\n- **Principle of Least Privilege:** Services have minimal required permissions\n- **Defense in Depth:** Multiple layers of security controls\n- **Secure Defaults:** Secure configurations by default\n- **Regular Updates:** Dependencies kept up to date with security patches\n\n**Compliance Requirements:**\n- **Data Retention:** Configurable retention policies for different data types\n- **Right to Erasure:** Complete data deletion capabilities\n- **Data Portability:** Export capabilities for user data\n- **Audit Trail:** Immutable audit logs for compliance reporting\n\n**Security Testing:**\n- **Penetration Testing:** Regular security assessments\n- **Vulnerability Scanning:** Automated vulnerability detection\n- **Code Review:** Security-focused code reviews\n- **Threat Modeling:** Regular threat model updates",
  "category": "SEC",
  "tags": ["security", "vulnerability", "compliance", "audit"],
  "sources": ["src/memory/", "src/utils/", "tests/security/"]
}
```

### 8. **TMO** - Threat Models
Use for documenting threat models that define security attack vectors, assets to protect, potential attackers, and mitigation strategies. Threat models serve as the foundation for security reviews (wf9) by establishing the security context and identifying what needs to be protected.

**Example:**
```json
{
  "title": "Memory system threat model and security boundaries",
  "content": "# Memory System Threat Model\n\n**Purpose:** Define security context, assets, attackers, and threats for comprehensive security assessment.\n\n**Assets to Protect:**\n- **User Data:** Memory content, personal information, sensitive notes\n- **Authentication Credentials:** User passwords, API keys, session tokens\n- **System Integrity:** Memory database, search indexes, file storage\n- **Privacy:** User data isolation, access control, data encryption\n\n**Potential Attackers:**\n- **External Attackers:** Malicious users attempting unauthorized access\n- **Insider Threats:** Authorized users with malicious intent\n- **Automated Attacks:** Bots, scrapers, automated exploit tools\n- **Advanced Persistent Threats:** Sophisticated attackers with resources and persistence\n\n**Attack Vectors and Entry Points:**\n- **Web Interface:** User input forms, API endpoints, authentication flows\n- **API Endpoints:** REST API, GraphQL queries, webhook handlers\n- **File Storage:** Memory persistence layer, backup systems, export functions\n- **Search Index:** FlexSearch index manipulation, query injection\n- **Network:** HTTP/HTTPS communication, WebSocket connections\n\n**Threat Scenarios:**\n- **Injection Attacks:** SQL injection, NoSQL injection, command injection via user input\n- **Authentication Bypass:** Session hijacking, token theft, password brute force\n- **Authorization Violations:** Privilege escalation, unauthorized data access\n- **Data Exposure:** Information disclosure in error messages, insecure data transmission\n- **Denial of Service:** Resource exhaustion, search index flooding, file system attacks\n- **Data Integrity:** Memory tampering, search index corruption, backup manipulation\n\n**Security Boundaries:**\n- **Authentication Boundary:** All operations require valid authentication\n- **Authorization Boundary:** Role-based access control for memory operations\n- **Data Boundary:** Encryption at rest and in transit for sensitive data\n- **Input Boundary:** All user inputs validated and sanitized at entry points\n- **Network Boundary:** HTTPS only, secure WebSocket connections\n\n**Mitigation Strategies:**\n- **Input Validation:** Comprehensive input sanitization and validation\n- **Authentication:** Multi-factor authentication, secure session management\n- **Authorization:** Principle of least privilege, role-based access control\n- **Encryption:** AES-256 for data at rest, TLS 1.3 for data in transit\n- **Monitoring:** Security event logging, anomaly detection, audit trails\n- **Testing:** Regular security testing, penetration testing, vulnerability scanning\n\n**Risk Assessment:**\n- **High Risk:** Authentication bypass, data breach, unauthorized access\n- **Medium Risk:** Data exposure, denial of service, input validation failures\n- **Low Risk:** Information disclosure in logs, minor configuration issues\n\n**Threat Model Framework:**\n- **STRIDE:** Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege\n- **OWASP Top 10:** Focus on injection, broken authentication, sensitive data exposure\n- **Attack Trees:** Document attack paths and mitigation strategies",
  "category": "TMO",
  "tags": ["threat-model", "security", "attack-vectors", "risk-assessment"],
  "sources": ["docs/security/", "src/memory/", "src/utils/"]
}
```

**Integration with Security Review (wf9):**
TMO memories serve as the foundation for security reviews by:
- Defining what assets need protection
- Identifying potential attackers and their capabilities
- Establishing security boundaries and entry points
- Providing threat scenarios to validate against
- Guiding security assessment focus areas
- Ensuring all identified threats have corresponding security controls

## Source Reference Format

The `sources` array is crucial for coverage analysis. Use these formats:

### Basic File References
```json
"sources": ["src/index.ts"]
```
Covers the entire file.

### Line Range References
```json
"sources": ["src/memory/types.ts:15-30"]
```
Covers lines 15 through 30 (inclusive).

### Multiple Line Ranges
```json
"sources": ["src/memory/types.ts:15-30", "src/memory/types.ts:45-60"]
```
Covers multiple sections of the same file.

### Multiple File References
```json
"sources": [
  "src/memory/types.ts:1-50",
  "src/memory/memory-service.ts:25-75",
  "tests/memory/memory-service.test.ts:10-40"
]
```
**never** invent sources that do not exist in the filesystem.

## Workflow-Specific Memory Management

### Memory Tagging Strategy for BDD/TDD Workflow

The BDD/TDD workflow uses a sophisticated tagging strategy to enable efficient memory retrieval and cross-story context management:

#### Story ID Tags
Memories should be tagged with relevant story IDs for easy discovery:
```json
{
  "title": "Memory service architecture for STORY-123",
  "category": "ARC",
  "tags": ["story_id:STORY-123", "component:backend", "status:active", "architecture"],
  "sources": ["src/memory/"]
}
```

#### Component-Specific Tags
Tag memories by component type for targeted searches:
- `component:frontend` - Frontend-related architectural decisions
- `component:backend` - Backend service architecture
- `component:database` - Database design and data models
- `component:testing` - Testing strategies and patterns
- `component:integration` - Integration patterns and APIs

#### Status Tags
Use status tags to manage memory lifecycle:
- `status:active` - Currently applicable decisions and plans
- `status:superseded` - Replaced by newer decisions
- `status:deprecated` - No longer relevant but kept for historical context

#### Search Optimization Examples
```markdown
# Architecture Planning (wf4)
- Search ARC memories: story_id:STORY-123, component:frontend, status:active
- Search ADR memories: story_id:STORY-123, status:active, category:architecture

# Implementation Planning (wf4a)
- Search IMP memories: story_id:STORY-123, category:implementation, status:active
- Search IMP memories: story_id:STORY-123, category:testing, status:active

# Code Review (wf8)
- Search CRV memories: story_id:STORY-123, status:active, code-review
- Search DOC memories: story_id:STORY-123, status:active (for context)

# Security Review (wf9)
- Search TMO memories: story_id:STORY-123, status:active (threat model foundation)
- Search TMO memories: status:active (project-level threat model)
- Search SEC memories: story_id:STORY-123, status:active
- Search ARC memories: story_id:STORY-123, component:security, status:active
```

## Best Practices for Coverage-Compatible Documentation

### 1. **Be Specific with Sources**
Instead of:
```json
"sources": ["src/memory/"]
```

Use:
```json
"sources": [
  "src/memory/types.ts:1-50",
  "src/memory/memory-service.ts:25-75",
  "src/memory/file-service.ts:10-30"
]
```

### 2. **Document at the Right Level**
- **DEF**: Document project goals, user personas, and MVP scope
- **ADR**: Document overarching architectural decisions affecting multiple stories
- **ARC**: Document story-specific architectural decisions and component design
- **IMP**: Document implementation plans and testing strategies
- **DOC**: Document specific functions, classes, or features
- **CRV**: Document code review findings and recommendations
- **SEC**: Document security assessments and best practices

### 3. **Use Descriptive Titles**
Good:
```json
"title": "MemoryService.createMemory() method documentation"
```

Avoid:
```json
"title": "Memory service"
```

### 4. **Include Code Examples**
```json
{
  "title": "FlexSearch configuration options",
  "content": "# FlexSearch Configuration\n\n**Tokenization Methods:**\n- `strict` - Exact matching\n- `forward` - Forward matching (default)\n- `reverse` - Reverse matching\n- `full` - Full matching\n- `tolerant` - Fuzzy matching\n\n**Example Configuration:**\n```typescript\nconst config = {\n  tokenize: 'forward',\n  resolution: 9,\n  depth: 3,\n  threshold: 1\n};\n```",
  "category": "DOC",
  "tags": ["flexsearch", "configuration", "search"],
  "sources": ["src/utils/flexsearch-config.ts:1-40"]
}
```

### 5. **Link Related Memories**
linking and unlinking must always be done by using the link_mem and unlink_mem tools.
This will create or remove bidirectional links in the yaml formatter as well as corresponding obsidian style links in the content within a section titled '## Related'
this section must never be edited by changing the content directly since it will lead to invalid links. Manually creating links in the content is only allowed for html links to external sources.

## Example: Complete Documentation Workflow

### Step 1: Document Architecture Decision
```json
{
  "title": "ADR-002: Using FlexSearch for full-text search",
  "content": "# ADR-002: FlexSearch for Search\n\n**Context:** Need fast, flexible full-text search for memories.\n\n**Decision:** Use FlexSearch for its speed and configurability.\n\n**Consequences:**\n- Fast search performance\n- Configurable search behavior\n- Lightweight implementation\n- Good TypeScript support",
  "category": "ADR",
  "tags": ["architecture", "search", "flexsearch"],
  "sources": ["src/utils/flexsearch.ts", "src/utils/flexsearch-config.ts"]
}
```

### Step 2: Document Implementation
```json
{
  "title": "SearchService implementation with FlexSearch",
  "content": "# SearchService Class\n\n**Purpose:** Provides full-text search capabilities using FlexSearch.\n\n**Key Methods:**\n- `initialize()` - Sets up FlexSearch index\n- `indexMemory()` - Adds memory to search index\n- `search()` - Performs full-text search\n\n**Configuration:**\nUses FlexSearch with forward tokenization and resolution 9.",
  "category": "DOC",
  "tags": ["search", "service", "flexsearch"],
  "sources": ["src/memory/search-service.ts:1-80"]
}
```

## Coverage Tool Integration

When you create memories following these patterns, the coverage tool will be able to:

1. **Identify documented code** by parsing the `sources` arrays
2. **Calculate coverage percentages** for files, functions, and classes
3. **Find undocumented sections** that need attention
4. **Generate reports** showing documentation gaps
5. **Provide recommendations** for improving coverage

## Tips for LLMs

1. **Always include specific source references** in the `sources` array if any exist
2. **Use the appropriate category** (DEF, ARC, ADR, IMP, DOC, CRV, SEC, TMO) for the type of documentation
3. **Be precise with line ranges** when documenting specific functions or classes
4. **Link related memories** to create a knowledge graph
5. **Include code examples** in your documentation content
6. **Use descriptive titles** that clearly indicate what's being documented
7. **Add relevant tags** for better categorization and search
8. **Use story ID tags** for workflow-based memory management
9. **Include component and status tags** for efficient memory retrieval

### Workflow-Specific Tips

- **DEF memories**: Focus on project goals, user personas, and MVP scope
- **ADR memories**: Document overarching architectural decisions affecting multiple stories
- **ARC memories**: Document story-specific architectural decisions and component design
- **IMP memories**: Include detailed implementation plans and testing strategies
- **DOC memories**: Document specific code elements, business logic, and edge cases
- **CRV memories**: Document code review findings, quality assessments, and recommendations for improvement
- **SEC memories**: Focus on security assessments, vulnerabilities, and best practices
- **TMO memories**: Document threat models defining assets, attackers, attack vectors, and mitigation strategies as foundation for security reviews

This approach ensures your documentation will be fully compatible with the coverage analysis tool and provides maximum value for understanding your codebase's documentation completeness while supporting the BDD/TDD workflow requirements.
