# Create Collaboration File Task

## Purpose
Generate a collaboration file for a story that ALL agents will use to track their work summaries, decisions, and handoffs throughout the story development lifecycle.

## When to Execute
- **SM Agent**: Execute when creating a new story (after story file creation)
- **Any Agent**: Execute if collaboration file doesn't exist for current story

## Prerequisites
- Story file must exist in `docs/stories/` directory
- Story must have valid Epic.Story numbering format

## Task Steps

### 1. Identify Story Information
- Extract story number from story filename (e.g., `1.3.story.md` → Epic 1, Story 3)
- Extract story title from story file header
- Get current story status
- Record creation timestamp

### 2. Create Collaboration File
- **Location**: `docs/collaboration/`
- **Filename Format**: `{EpicNum}.{StoryNum}.collab.md`
- **Template**: Use `collaboration-tmpl.md`

### 3. Populate Template Variables
Replace all template variables with actual values:
- `{{EpicNum}}` → Epic number
- `{{StoryNum}}` → Story number  
- `{{Story Title}}` → Actual story title from story file
- `{{Current Status}}` → Current story status
- `{{Creation Date}}` → Current date/time
- `{{Last Update Date}}` → Current date/time

### 4. Initialize Agent Sections
For each agent section in the template:
- Set **Last Activity** to "Not started"
- Clear all **Work Summary** fields
- Set all checkboxes to unchecked `[ ]`
- Clear **Handoff Notes**

### 5. Create Directory Structure
Ensure directory exists:
```bash
mkdir -p docs/collaboration
```

### 6. File Validation
- Verify file was created successfully
- Confirm all template variables were replaced
- Validate markdown syntax

## Success Criteria
- [ ] Collaboration file created in correct location
- [ ] All template variables populated with actual values
- [ ] Agent sections properly initialized
- [ ] File follows naming convention: `{EpicNum}.{StoryNum}.collab.md`
- [ ] Story file has reference to collaboration file added

## Error Handling
- **Story file not found**: Halt and request valid story file
- **Invalid story format**: Request story file with proper Epic.Story format
- **Directory creation fails**: Report filesystem permissions issue
- **Template file missing**: Report missing collaboration-tmpl.md template

## Agent Instructions
```yaml
# Add to agent dependencies
dependencies:
  tasks:
    - create-collaboration-file
  templates:
    - collaboration-tmpl
```

## Usage Examples

### SM Agent Usage
```bash
# After creating story 1.5.story.md
*task create-collaboration-file
# → Creates docs/collaboration/1.5.collab.md
```

### Any Agent Usage
```bash
# Before starting work on story
*collab-check
# → Verifies collaboration file exists, creates if missing
```

## Integration Notes
- **SM Agent**: Should execute this task automatically after story creation
- **All Agents**: Should check for collaboration file existence before starting work
- **Story Template**: Should include reference to collaboration file
- **Build System**: May need to include collaboration directory in file watching