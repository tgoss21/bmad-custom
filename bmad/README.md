# BMAD Method Framework v4.1.0 - Custom Implementation Edition

The Breakthrough Method of Agile AI-driven Development (BMAD) is a comprehensive framework that orchestrates specialized AI agents to transform business requirements into working software through structured workflows.

**🆕 This custom edition includes Team .Implementation for pure brownfield development workflows.**

## 🚀 Quick Installation

Install this custom BMAD edition in any project directory:

```bash
npx github:tracygoss/bmad-custom
```

**Alternative Installation Methods:**
```bash
# Install from specific branch
npx github:tracygoss/bmad-custom#dev-branch

# Local installation (if you have the repo)
git clone https://github.com/tracygoss/bmad-custom.git
cd bmad-custom/bmad
npm install
npx .
```

## 📋 Installation Commands

After running the installer, you'll be guided through setup options:

### 1. **Installation Profiles**
- **Core** - Essential agents (analyst, pm, architect, dev)  
- **Teams** - Pre-configured agent teams
- **Developer** - All agents + development tools
- **Minimal** - Just the orchestrator

### 2. **IDE Integration**
- **Cursor** - `.cursor/rules/` integration
- **Claude Code** - `.claude/commands/` integration  
- **Windsurf** - `.windsurf/rules/` integration
- **Roo Code** - `.roo/.roomodes` integration

### 3. **Team Selection**
Choose from available teams:
- **Team .Implementation** 🆕 - Pure implementation team (sm, dev, frontend-dev, qa, dev-test)
- **Team Fullstack** - Complete development team
- **Team No UI** - Backend-focused team  
- **Team All** - Every agent available

## 🎯 What's New in v4.1.0

### Team .Implementation
A specialized implementation team designed for brownfield projects where planning is already complete:

**Agents Included:**
- **BMad Orchestrator** - Task coordination & workflow management
- **Bob (SM)** - Story creation & sprint management  
- **James (Dev)** - Backend/API/DevOps development
- **Alexa (Frontend-Dev)** - React/Next.js/UI development
- **Quinn (QA)** - Quality assurance & testing
- **Alex (Dev-Test)** - Comprehensive test development

**Workflows:**
- `brownfield-fullstack` - Existing full-stack applications
- `brownfield-service` - Existing backend services  
- `brownfield-ui` - Existing frontend applications

### Updated Agent Boundaries
- **Dev Agent (James)** - Focused on backend/API/DevOps/infrastructure
- **Frontend-Dev Agent (Alexa)** - Specialized in React/Next.js/shadcn/ui/Tailwind

## 🛠️ Quick Usage

### After Installation

**Start the orchestrator:**
```bash
/bmad-master
```

**Use specific agents:**
```bash
/sm          # Story creation & management
/dev         # Backend development  
/frontend-dev # Frontend development
/qa          # Quality assurance
/dev-test    # Test development
```

**Load teams:**
```bash
# Load Team .Implementation (recommended for brownfield)
/bmad-master
*agent team-.implementation

# Or load other teams
*agent team-fullstack
*agent team-no-ui
```

## 📖 Common Workflows

### 1. **Brownfield Implementation**
Perfect when you have existing PRDs/architecture and need pure implementation:

```bash
/bmad-master
*agent team-.implementation
# Team loaded with all implementation agents

/sm
*create    # Create stories from epics/requirements

/dev      # Backend implementation
/frontend-dev # Frontend implementation  
/qa       # Quality assurance
```

### 2. **Individual Agent Usage**
For specific tasks without loading full teams:

```bash
/sm           # Story management
/dev          # Backend work
/frontend-dev # Frontend work
/qa           # Testing & QA
```

### 3. **Story Creation from Epics**
```bash
/sm
*create      # Follow guided story creation process
```

## 🏗️ Build Commands

If modifying agent configurations:

```bash
# Build all bundles
npm run build

# Build only agents  
npm run build:agents

# Build only teams
npm run build:teams

# List available agents
npm run list:agents

# Validate configurations
npm run validate
```

## 📚 Documentation

- **Architecture Overview** - See `CLAUDE.md` for detailed architecture
- **Agent Configurations** - `.bmad-core/agents/`
- **Team Configurations** - `.bmad-core/agent-teams/`  
- **Workflows** - `.bmad-core/workflows/`
- **Tasks & Templates** - `.bmad-core/tasks/` and `.bmad-core/templates/`

## 🤝 Contributing

This is a custom fork of the BMAD Method framework. For the original framework, visit the main BMAD repository.

## 📄 License

MIT License - See original BMAD Method framework for full license details.

---

**Ready to transform your development workflow?** 
Run `npx github:tracygoss/bmad-custom` in your project directory to get started! 🚀