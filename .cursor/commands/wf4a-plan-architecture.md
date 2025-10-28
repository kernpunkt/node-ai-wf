# Workflow Step: Plan Architecture

## Purpose
Design system architecture and create architectural decisions.

## Input Required
- Story/Issue ID

## Process
1. **Analyze Requirements**
   - Use MCP tools to retrieve the specific story/issue
   - Analyze story requirements and acceptance criteria, mind story boundaries
   - Review story context and acceptance criteria
   - Find feature files with story ID prefix
   - Analyze BDD scenarios to better understand requirements

2. **Quality Gate: BDD Validation**
   - Validate BDD scenarios are complete and testable
   - Ensure scenarios provide sufficient detail for architecture design
   - Verify scenarios cover all functional requirements
   **⚠️ CRITICAL: If any quality gate criteria are NOT met, you MUST stop processing immediately and yield control back to the user. Do not proceed to the next step until all quality gates pass.**


3. **Review Existing Architecture**
   - Search existing ADR memories with status/active for architectural constraints
   - Analyze existing architectural decisions and patterns
   - Identify architectural dependencies and constraints

4. **Design System Architecture**
   - Design system interfaces and contracts
   - Define data models and relationships
   - Plan integration points between components
   - Create architectural diagrams using Mermaid

5. **Create Architectural Decisions**
   - Create new ADR memories for global architectural decisions if such arise
   - Tag ADRs with story ID and status/active
   - If new decisions supersede existing ADRs, edit old ADR to mark as superseded
   - Replace status/active tag of superseded ADRs with status:superseded
   - **⚠️ CRITICAL: Optimize for token efficiency**
     - Use concise decision statements
     - Format: **Decision:** [what], **Rationale:** [why], **Trade-offs:** [pros/cons]
     - Avoid verbose context, focus on decision and impact only
     - Example:
       ```markdown
       **Decision:** Use Redis for session store
       **Rationale:** Low latency, high concurrency, auto-expiry
       **Trade-offs:** +fast -additional infra -persistence concerns
       **Impact:** Session mgmt → Redis, logout = Redis delete
       ```

6. **Create Detailed Architectural Design**
   - **System interfaces and contracts:**
     - API contracts with Mermaid sequence diagrams for request/response flows
     - Service interfaces with Mermaid class diagrams showing interface definitions
     - Component communication with Mermaid sequence diagrams for interaction flows
   - **Data models and relationships:**
     - Database entities with Mermaid ER diagrams
     - TypeScript types/interfaces with Mermaid class diagrams
     - API schemas with Mermaid class diagrams showing JSON schema structure
     - Domain models with Mermaid class diagrams showing relationships
   - **Integration points between components:**
     - Component integration with Mermaid sequence diagrams for interaction flows
     - Data flow with Mermaid flowchart diagrams for data movement
     - Event flows with Mermaid sequence diagrams for event-driven interactions
     - API integration with Mermaid sequence diagrams for external API calls

7. **Store Architectural Knowledge**
   - Create ARC memories with detailed architectural design
   - Tag all ARC memories with story ID, component type, and status/active
   - Use Context7 MCP for package documentation research when needed
   - **⚠️ CRITICAL: Optimize for token efficiency**
     - Use concise bullet points instead of verbose prose
     - Eliminate filler words, introductions, and explanations
     - Focus on facts: interfaces, contracts, types, dependencies only
     - Use abbreviations: API, ERD, URI, HTTP, CRUD, etc.
     - Structure data as key-value pairs where possible
     - Avoid repeating information from titles in content
     - Example format:
       ```markdown
       **Contracts:** GET /api/users → User[], POST /api/users → User
       **Types:** User{id:string,name:string,email:string}
       **Deps:** AuthService → UserService → UserRepo
       **Diagrams:** [mermaid diagram code]
       ```

## Output
- ADR memories with architectural decisions
- ARC memories with detailed architectural design (interfaces, data models, integration points)
- Mermaid diagrams for visual architecture representation as part of ARC memories
- Architectural constraints and patterns documented

## Success Criteria
- ADR memories created for architectural decisions
- ARC memories created with detailed design
- Mermaid diagrams generated for key architectural components
- All architectural knowledge stored and tagged appropriately
- Architecture ready for implementation planning

## MCP Tools Required
- Memory Tools: For storing ADR and ARC memories
- Context7 MCP: For package documentation research
