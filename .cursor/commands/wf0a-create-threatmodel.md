# Workflow Step 0a: Create Threat Model

## Purpose
Engage in a collaborative discussion with the user to understand security requirements, identify assets to protect, potential attackers, attack vectors, and create a comprehensive threat model that serves as the foundation for security reviews (wf9).

## Input Required
- Project context (may reference DEF memories from wf0)
- Optional: Story/Issue ID for story-specific threat models

## Process

### 1. Initial Discussion and Context Gathering
- Ask the user about their security concerns and requirements
- **Check if the user has any existing security documentation** (security policies, compliance requirements, previous threat models, etc.)
- Understand the system architecture and components (reference ARC memories if available)
- Identify the business context and security-critical aspects
- Determine compliance and regulatory requirements (GDPR, HIPAA, PCI-DSS, etc.)

### 2. Assets Discovery
Engage in a structured discussion to identify what needs protection:

#### Data Assets
- What sensitive data does the system handle?
- What user data requires protection?
- What business-critical information exists?
- What authentication credentials or secrets are stored?
- What intellectual property or proprietary information exists?

#### System Assets
- What system components are critical?
- What services or APIs need protection?
- What infrastructure components are security-sensitive?
- What third-party integrations handle sensitive data?

#### Business Assets
- What business processes are critical?
- What would cause business impact if compromised?
- What compliance requirements must be met?
- What reputation or trust factors are at stake?

### 3. Attacker Identification
Work with the user to identify potential attackers:

#### Attacker Types
- **External Attackers:** Malicious users, hackers, competitors
- **Insider Threats:** Authorized users with malicious intent, compromised accounts
- **Automated Attacks:** Bots, scrapers, automated exploit tools
- **Advanced Persistent Threats:** Sophisticated attackers with resources and persistence
- **State Actors:** Nation-state attackers (if applicable)

#### Attacker Capabilities
For each attacker type, identify:
- **Motivation:** What do they want to achieve?
- **Resources:** What tools, knowledge, and resources do they have?
- **Access Level:** What level of access might they obtain?
- **Persistence:** How persistent are they likely to be?

### 4. Attack Vector Analysis
Identify potential entry points and attack methods:

#### Entry Points
- **Web Interface:** User input forms, authentication flows, API endpoints
- **API Endpoints:** REST API, GraphQL queries, webhook handlers
- **File Storage:** Data persistence layer, backup systems, export functions
- **Network:** HTTP/HTTPS communication, WebSocket connections, network protocols
- **Third-Party Integrations:** External services, libraries, dependencies
- **Configuration:** Environment variables, configuration files, secrets management

#### Attack Methods
- **Injection Attacks:** SQL injection, NoSQL injection, command injection, XSS
- **Authentication Attacks:** Session hijacking, token theft, password brute force, credential stuffing
- **Authorization Attacks:** Privilege escalation, unauthorized data access, broken access control
- **Data Exposure:** Information disclosure, insecure data transmission, error message leaks
- **Denial of Service:** Resource exhaustion, rate limiting bypass, service disruption
- **Data Integrity:** Data tampering, corruption, manipulation

### 5. Threat Scenario Development
Work with the user to document specific threat scenarios:

#### Threat Categories
Use established frameworks to categorize threats:
- **STRIDE:** Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege
- **OWASP Top 10:** Focus on common web application vulnerabilities
- **Attack Trees:** Document attack paths and sequences

#### Threat Documentation
For each identified threat, document:
- **Threat Description:** What the threat is and how it works
- **Attack Vector:** How an attacker would exploit this
- **Impact:** What would happen if this threat is realized
- **Likelihood:** How likely is this threat to occur
- **Affected Assets:** What assets would be compromised

### 6. Security Boundaries Definition
Identify and document security boundaries:

#### Boundary Types
- **Authentication Boundary:** Where authentication is required
- **Authorization Boundary:** Where access control is enforced
- **Data Boundary:** Where data encryption and protection are applied
- **Input Boundary:** Where input validation and sanitization occur
- **Network Boundary:** Where network security controls are applied
- **Trust Boundary:** Where trust relationships change

#### Boundary Documentation
For each boundary, document:
- **Location:** Where the boundary exists in the system
- **Controls:** What security controls are in place
- **Assumptions:** What security assumptions are made
- **Weaknesses:** Known weaknesses or gaps

### 7. Mitigation Strategy Development
Work with the user to identify mitigation strategies:

#### Mitigation Categories
- **Prevention:** Controls that prevent threats from occurring
- **Detection:** Controls that detect when threats occur
- **Response:** Controls that respond to detected threats
- **Recovery:** Controls that enable recovery from threats

#### Mitigation Documentation
For each threat, document:
- **Mitigation Strategy:** How the threat is mitigated
- **Security Controls:** Specific controls implemented
- **Effectiveness:** How effective the mitigation is
- **Gaps:** Any remaining gaps or weaknesses

### 8. Risk Assessment
Work with the user to assess and prioritize risks:

#### Risk Factors
- **Impact:** What is the business impact if the threat is realized?
- **Likelihood:** How likely is the threat to occur?
- **Risk Level:** High, Medium, or Low based on impact and likelihood

#### Risk Prioritization
- **High Risk:** Threats that must be addressed immediately
- **Medium Risk:** Threats that should be addressed in near term
- **Low Risk:** Threats that can be addressed over time

### 9. Memory Creation
Once sufficient information has been gathered, create a TMO memory using the MCP memory tools:

#### Memory Configuration
- **Title**: Descriptive title (e.g., "Project threat model" or "STORY-123 threat model")
- **Category**: "TMO" (Threat Model)
- **Tags**: ["threat-model", "security", "attack-vectors", "risk-assessment"] plus story ID if applicable
- **Content**: Structured markdown content following the format below

#### Memory Content Structure
```markdown
# Threat Model: [Project/Story Name]

## Purpose
Brief description of the threat model's purpose and scope.

## Assets to Protect
### Data Assets
- **User Data:** [Description of user data and sensitivity]
- **Authentication Credentials:** [Description of credentials and secrets]
- **Business Data:** [Description of business-critical data]

### System Assets
- **Critical Components:** [List of critical system components]
- **Services/APIs:** [List of security-sensitive services]
- **Infrastructure:** [List of critical infrastructure components]

### Business Assets
- **Business Processes:** [List of critical business processes]
- **Compliance Requirements:** [List of compliance and regulatory requirements]

## Potential Attackers
### External Attackers
- **Description:** [Description of external attackers]
- **Motivation:** [What they want to achieve]
- **Capabilities:** [Resources, tools, knowledge level]

### Insider Threats
- **Description:** [Description of insider threats]
- **Motivation:** [What they want to achieve]
- **Capabilities:** [Access level, knowledge, resources]

### Automated Attacks
- **Description:** [Description of automated attacks]
- **Motivation:** [What they want to achieve]
- **Capabilities:** [Automation level, persistence]

### Advanced Persistent Threats
- **Description:** [Description of APT attackers]
- **Motivation:** [What they want to achieve]
- **Capabilities:** [Sophistication level, resources, persistence]

## Attack Vectors and Entry Points
### Web Interface
- **Entry Points:** [List of web interface entry points]
- **Attack Methods:** [List of potential attack methods]

### API Endpoints
- **Entry Points:** [List of API endpoint entry points]
- **Attack Methods:** [List of potential attack methods]

### File Storage
- **Entry Points:** [List of file storage entry points]
- **Attack Methods:** [List of potential attack methods]

### Network
- **Entry Points:** [List of network entry points]
- **Attack Methods:** [List of potential attack methods]

### Third-Party Integrations
- **Entry Points:** [List of third-party integration entry points]
- **Attack Methods:** [List of potential attack methods]

## Threat Scenarios
### Injection Attacks
- **Threat Description:** [Description of injection attack threats]
- **Attack Vector:** [How attackers would exploit this]
- **Impact:** [What would happen if realized]
- **Affected Assets:** [What assets would be compromised]

### Authentication Bypass
- **Threat Description:** [Description of authentication bypass threats]
- **Attack Vector:** [How attackers would exploit this]
- **Impact:** [What would happen if realized]
- **Affected Assets:** [What assets would be compromised]

### Authorization Violations
- **Threat Description:** [Description of authorization violation threats]
- **Attack Vector:** [How attackers would exploit this]
- **Impact:** [What would happen if realized]
- **Affected Assets:** [What assets would be compromised]

### Data Exposure
- **Threat Description:** [Description of data exposure threats]
- **Attack Vector:** [How attackers would exploit this]
- **Impact:** [What would happen if realized]
- **Affected Assets:** [What assets would be compromised]

### Denial of Service
- **Threat Description:** [Description of DoS threats]
- **Attack Vector:** [How attackers would exploit this]
- **Impact:** [What would happen if realized]
- **Affected Assets:** [What assets would be compromised]

### Data Integrity
- **Threat Description:** [Description of data integrity threats]
- **Attack Vector:** [How attackers would exploit this]
- **Impact:** [What would happen if realized]
- **Affected Assets:** [What assets would be compromised]

## Security Boundaries
### Authentication Boundary
- **Location:** [Where authentication is required]
- **Controls:** [What security controls are in place]
- **Assumptions:** [Security assumptions made]

### Authorization Boundary
- **Location:** [Where access control is enforced]
- **Controls:** [What security controls are in place]
- **Assumptions:** [Security assumptions made]

### Data Boundary
- **Location:** [Where data encryption is applied]
- **Controls:** [What security controls are in place]
- **Assumptions:** [Security assumptions made]

### Input Boundary
- **Location:** [Where input validation occurs]
- **Controls:** [What security controls are in place]
- **Assumptions:** [Security assumptions made]

### Network Boundary
- **Location:** [Where network security is applied]
- **Controls:** [What security controls are in place]
- **Assumptions:** [Security assumptions made]

## Mitigation Strategies
### Input Validation
- **Strategy:** [How input validation mitigates threats]
- **Controls:** [Specific controls implemented]
- **Effectiveness:** [How effective the mitigation is]

### Authentication
- **Strategy:** [How authentication mitigates threats]
- **Controls:** [Specific controls implemented]
- **Effectiveness:** [How effective the mitigation is]

### Authorization
- **Strategy:** [How authorization mitigates threats]
- **Controls:** [Specific controls implemented]
- **Effectiveness:** [How effective the mitigation is]

### Encryption
- **Strategy:** [How encryption mitigates threats]
- **Controls:** [Specific controls implemented]
- **Effectiveness:** [How effective the mitigation is]

### Monitoring
- **Strategy:** [How monitoring mitigates threats]
- **Controls:** [Specific controls implemented]
- **Effectiveness:** [How effective the mitigation is]

### Testing
- **Strategy:** [How security testing mitigates threats]
- **Controls:** [Specific controls implemented]
- **Effectiveness:** [How effective the mitigation is]

## Risk Assessment
### High Risk Threats
- **Threat:** [Threat description]
- **Impact:** [Business impact]
- **Likelihood:** [Likelihood of occurrence]
- **Mitigation Status:** [Current mitigation status]

### Medium Risk Threats
- **Threat:** [Threat description]
- **Impact:** [Business impact]
- **Likelihood:** [Likelihood of occurrence]
- **Mitigation Status:** [Current mitigation status]

### Low Risk Threats
- **Threat:** [Threat description]
- **Impact:** [Business impact]
- **Likelihood:** [Likelihood of occurrence]
- **Mitigation Status:** [Current mitigation status]

## Threat Model Framework
- **STRIDE:** [Application of STRIDE framework]
- **OWASP Top 10:** [Focus areas from OWASP Top 10]
- **Attack Trees:** [Documentation of attack paths]
```

#### Memory Creation Process
1. Use `mcp_memory-tools_write_mem` with appropriate title, category "TMO"
2. Add appropriate tags for categorization (include story ID if story-specific)
3. Structure content as markdown following the format above
4. Include all gathered information in appropriate sections
5. Link to related memories (DEF, ARC) if applicable using `mcp_memory-tools_link_mem`

**Important**: Threat model content should be based on user discussion and security requirements, NOT on assumptions about the codebase.

### 10. Validation and Refinement
After creating the initial threat model memory:
- Review threat model content with user for accuracy
- Refine based on user feedback
- Ensure all critical assets are identified
- Verify all threat scenarios are documented
- Confirm mitigation strategies are appropriate
- Update memory if needed using `mcp_memory-tools_edit_mem`

## Output
- TMO memory with comprehensive threat model documentation
- Clear understanding of security context and requirements
- Documented assets, attackers, attack vectors, and threats
- Defined security boundaries and mitigation strategies
- Risk assessment with prioritized threats

## Success Criteria
- TMO memory created with comprehensive threat model documentation
- All critical assets identified and documented
- Potential attackers and their capabilities documented
- Attack vectors and entry points identified
- Threat scenarios documented with impact and likelihood
- Security boundaries clearly defined
- Mitigation strategies documented for all identified threats
- Risk assessment completed with prioritized threats
- Threat model properly indexed and searchable for wf9 security reviews

## MCP Tools Required
- Memory Tools: For creating TMO memories, linking to related memories (DEF, ARC), and searching existing memories

## Integration with Security Review (wf9)
The threat model created in this workflow step serves as the foundation for wf9 security reviews:
- wf9 will search for TMO memories to understand security context
- Security assessment will validate implementation against documented threats
- Security review will ensure all identified threats have corresponding controls
- Threat model guides the focus areas for security vulnerability assessment

