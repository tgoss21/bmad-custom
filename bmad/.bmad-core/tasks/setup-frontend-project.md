# Setup Frontend Project Task

## Purpose

Set up a new frontend project with modern React ecosystem including Next.js, shadcn/ui, and Tailwind CSS with proper configuration and best practices.

## Instructions

### 1. Gather Project Requirements

Ask user for:
- Project name and description
- Project type (Next.js app, React SPA, component library)
- Required features (routing, API routes, authentication, etc.)
- Target deployment platform (Vercel, Netlify, etc.)
- Package manager preference (npm, yarn, pnpm)

### 2. Initialize Project Structure

Based on project type:

**Next.js Project:**
- Run `npx create-next-app@latest [project-name] --typescript --tailwind --eslint --app`
- Configure app directory structure if needed

**React SPA:**
- Run `npx create-react-app [project-name] --template typescript`
- Add Tailwind CSS configuration

### 3. Install and Configure shadcn/ui

- Run `npx shadcn-ui@latest init`
- Configure components.json with proper settings:
  - Tailwind CSS configuration
  - Component directory structure
  - Import aliases
- Install initial components based on project needs

### 4. Setup Development Environment

- Configure ESLint with React and TypeScript rules
- Setup Prettier for code formatting
- Add pre-commit hooks with Husky (optional)
- Configure VS Code settings and extensions recommendations

### 5. Create Project Structure

- Set up folder structure:
  - `/components` - Reusable UI components
  - `/lib` - Utility functions and configurations
  - `/hooks` - Custom React hooks
  - `/types` - TypeScript type definitions
  - `/styles` - Global styles and Tailwind customizations

### 6. Add Essential Configuration

- Configure Tailwind CSS custom theme
- Setup CSS variables for consistent theming
- Add favicon and metadata configuration
- Setup environment variables structure

### 7. Create Starter Components

- Layout component with navigation
- Basic page components
- Error boundary component
- Loading states and skeletons

### 8. Documentation and Scripts

- Update README with setup instructions
- Document component usage patterns
- Add useful npm scripts for development
- Include deployment instructions

## Validation

- Verify all dependencies are properly installed
- Test development server starts successfully
- Confirm shadcn/ui components can be imported and used
- Check TypeScript compilation works without errors
- Validate Tailwind CSS classes are applied correctly

## Deliverables

- Fully configured project ready for development
- Documentation for team members
- Example components demonstrating patterns
- Development and build scripts configured