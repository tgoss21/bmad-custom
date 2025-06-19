# Update Collaboration Log Task

## Purpose
Update the collaboration file with agent work summaries, decisions, and progress tracking. Each agent updates their dedicated section with work completed.

## When to Execute
- **All Agents**: After completing significant work on a story
- **All Agents**: Before handing off to another agent
- **All Agents**: When encountering blockers or making key decisions
- **All Agents**: At story completion

## Prerequisites
- Collaboration file must exist for the current story
- Agent must be working on a valid story
- Agent must have work to report

## Task Steps

### 1. Locate Collaboration File
- **Location**: `docs/collaboration/{EpicNum}.{StoryNum}.collab.md`
- **Verification**: Confirm file exists, create if missing using `create-collaboration-file` task

### 2. Identify Agent Section
Update the correct agent section based on current agent:
- **SM Agent**: "📝 Story Manager (Bob) - SM Agent"
- **Dev Agent**: "💻 Backend Developer (James) - Dev Agent"
- **Frontend-Dev Agent**: "🎨 Frontend Developer (Alexa) - Frontend-Dev Agent"
- **QA Agent**: "🔍 Quality Assurance (Quinn) - QA Agent"
- **Dev-Test Agent**: "🧪 Test Developer (Alex) - Dev-Test Agent"

### 3. Update Agent Section Fields

#### Required Updates for ALL Agents:
- **Last Activity**: Current date/time
- **Work Summary**: Concise description of work completed since last update
- **Handoff Notes**: Information needed by next agent(s)

#### Agent-Specific Updates:

**SM Agent**:
- Key Decisions made during story creation
- Epic context or requirements clarifications
- Story preparation insights

**Dev Agent**:
- Technical Decisions made
- Code Changes (files, components, APIs, database)
- Testing Completed (checkboxes)
- Challenges & Solutions encountered

**Frontend-Dev Agent**:
- Technical Decisions (UI/UX, architecture)
- Components Created/Modified
- Styling & Design changes
- Testing Completed (checkboxes)
- Challenges & Solutions

**QA Agent**:
- Test Coverage details
- Issues Found with status
- Quality Gates (checkboxes)

**Dev-Test Agent**:
- Test Implementation details
- Test Coverage Details
- Automation Setup

### 4. Update Cross-Agent Collaboration Section

#### Agent Handoffs Table
Add new row when handing off work:
```markdown
| From Agent | To Agent | Date | Handoff Notes |
|-----------|----------|------|---------------|
| SM | Dev | 2024-01-15 | Story ready for backend implementation |
```

#### Workflow Status
Update checkboxes for completed phases:
- [x] Story Creation (SM) ← Mark when SM completes
- [x] Backend Implementation (Dev) ← Mark when Dev completes
- [ ] Frontend Implementation (Frontend-Dev)
- [ ] Quality Assurance (QA)
- [ ] Test Development (Dev-Test)
- [ ] Story Completion

### 5. Update Collaboration Metrics
- Increment **Total Agent Interactions**
- Update **Story Duration** end date if completing
- Increment **Blockers Resolved** if applicable
- Update **Cross-Agent Dependencies** count

### 6. Update Footer Timestamp
- Update "Last Updated" with current timestamp and agent name

## Success Criteria
- [ ] Agent section updated with current work summary
- [ ] All required fields populated for agent type
- [ ] Cross-agent collaboration section updated
- [ ] Workflow status checkboxes updated appropriately
- [ ] Footer timestamp updated
- [ ] File maintains valid markdown format

## Update Guidelines

### Work Summary Best Practices
- **Be Concise**: 2-3 sentences maximum per update
- **Be Specific**: Include concrete accomplishments
- **Avoid Duplication**: Don't repeat previous updates
- **Focus on Impact**: What was achieved, not just what was done

### Technical Decisions Documentation
- **Context**: Why the decision was needed
- **Options**: Alternatives considered (if applicable)
- **Decision**: What was chosen
- **Rationale**: Why this choice was made

### Handoff Notes Guidelines
- **Actionable**: Clear next steps for receiving agent
- **Context**: Important background information
- **Risks**: Potential issues to watch for
- **Resources**: Links or references needed

## Error Handling
- **Collaboration file missing**: Execute `create-collaboration-file` task first
- **Invalid story context**: Verify current story is valid
- **File permission issues**: Report filesystem access problems
- **Markdown syntax errors**: Validate file format after updates

## Agent Integration Examples

### Dev Agent Integration
```yaml
core_principles:
  - Collaboration Updates - Update collaboration log after each major task completion
  
commands:
  - "*collab-update" - Update collaboration log with current work status
  
task-execution:
  flow: "Read task→Implement→Write tests→Pass tests→Update collab log→Update [x]→Next task"
```

### Frontend-Dev Agent Integration
```yaml
core_principles:
  - Collaboration Tracking - Document UI decisions and component changes in collaboration log
  
commands:
  - "*collab-summary" - Add work summary to collaboration file
```

## Automation Suggestions
- **Automatic Updates**: Agents could auto-update collaboration log when updating story status
- **Task Completion**: Include collaboration update in task completion workflow
- **Status Changes**: Trigger collaboration update when story status changes