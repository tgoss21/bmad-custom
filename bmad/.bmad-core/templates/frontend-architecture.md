# {{Project Name}} - Frontend Architecture Document

[[LLM: This template creates comprehensive frontend architecture documentation for React/Next.js projects using shadcn/ui and Tailwind CSS. Review any provided PRD or project requirements before starting.]]

## Project Overview

### Project Description
[[LLM: Brief description of the project and its goals]]

### Technology Stack
[[LLM: Document the chosen technology stack based on requirements]]

**Core Framework:**
- **React**: {{react_version}} - {{rationale}}
- **Next.js**: {{nextjs_version}} - {{rationale}}
- **TypeScript**: {{typescript_version}} - {{rationale}}

**UI/Styling:**
- **shadcn/ui**: {{shadcn_version}} - {{rationale}}
- **Tailwind CSS**: {{tailwind_version}} - {{rationale}}
- **Radix UI**: {{radix_version}} - {{rationale}}

**Additional Libraries:**
- {{library_name}}: {{version}} - {{purpose}}

## Architecture Overview

### High-Level Architecture
[[LLM: Describe the overall architecture pattern and approach]]

**Architecture Pattern**: {{pattern}} (SPA/SSG/SSR/Hybrid)
**Rendering Strategy**: {{strategy}}
**State Management**: {{state_management_approach}}
**Routing Strategy**: {{routing_approach}}

### Key Architectural Decisions
[[LLM: Document major architectural decisions and their rationale]]

1. **{{Decision_1}}**: {{rationale_and_tradeoffs}}
2. **{{Decision_2}}**: {{rationale_and_tradeoffs}}
3. **{{Decision_3}}**: {{rationale_and_tradeoffs}}

## Project Structure

### Directory Organization
[[LLM: Define the project directory structure based on best practices]]

```
{{project_name}}/
├── app/                          # Next.js 13+ app directory
│   ├── (dashboard)/             # Route groups
│   ├── api/                     # API routes
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # Reusable UI components
│   ├── ui/                      # shadcn/ui components
│   ├── forms/                   # Form components
│   ├── layout/                  # Layout components
│   └── feature/                 # Feature-specific components
├── lib/                         # Utility functions
│   ├── utils.ts                 # General utilities
│   ├── validations.ts           # Form validations
│   └── api.ts                   # API utilities
├── hooks/                       # Custom React hooks
├── types/                       # TypeScript type definitions
├── styles/                      # Additional stylesheets
├── public/                      # Static assets
└── config/                      # Configuration files
```

### Component Architecture
[[LLM: Define component organization strategy]]

**Component Categories:**
- **UI Components** (`/components/ui`): Basic shadcn/ui components
- **Layout Components** (`/components/layout`): Page layout and structure
- **Feature Components** (`/components/feature`): Business logic components
- **Form Components** (`/components/forms`): Form-related components

**Component Naming Conventions:**
- PascalCase for component names
- Descriptive and specific naming
- Group related components in subdirectories

## Design System Integration

### shadcn/ui Configuration
[[LLM: Document shadcn/ui setup and customization]]

**Configuration File**: `components.json`
```json
{
  "style": "{{style_choice}}",
  "rsc": {{rsc_choice}},
  "tsx": {{tsx_choice}},
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "{{base_color}}",
    "cssVariables": {{css_variables_choice}}
  },
  "aliases": {
    "components": "{{components_path}}",
    "utils": "{{utils_path}}"
  }
}
```

**Installed Components:**
[[LLM: List the shadcn/ui components that will be installed]]
- {{component_1}} - {{usage_purpose}}
- {{component_2}} - {{usage_purpose}}
- {{component_3}} - {{usage_purpose}}

### Tailwind CSS Configuration
[[LLM: Document Tailwind CSS customization and theming]]

**Custom Theme Extensions:**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: {
          {{color_scale}}
        },
        secondary: {
          {{color_scale}}
        }
      },
      fontFamily: {
        {{font_definitions}}
      },
      spacing: {
        {{custom_spacing}}
      }
    }
  }
}
```

**CSS Variables Approach:**
[[LLM: Document CSS variable usage for theming]]
- Light/Dark mode support: {{theme_support}}
- Custom property naming: {{naming_convention}}
- Theme switching mechanism: {{switching_approach}}

## State Management

### State Architecture
[[LLM: Define state management strategy based on project complexity]]

**Global State**: {{global_state_solution}}
**Local State**: React hooks (useState, useReducer)
**Server State**: {{server_state_solution}}
**Form State**: {{form_state_solution}}

### Data Flow Patterns
[[LLM: Document data flow and state update patterns]]

**Component State Flow:**
1. {{flow_step_1}}
2. {{flow_step_2}}
3. {{flow_step_3}}

**API Integration:**
- Data fetching strategy: {{fetching_strategy}}
- Caching approach: {{caching_approach}}
- Error handling: {{error_handling}}

## Routing and Navigation

### Routing Strategy
[[LLM: Document Next.js routing implementation]]

**App Router Features Used:**
- File-base routing: {{usage}}
- Dynamic routes: {{usage}}
- Route groups: {{usage}}
- Parallel routes: {{usage}}
- Intercepting routes: {{usage}}

**Navigation Patterns:**
- Primary navigation: {{navigation_approach}}
- Breadcrumbs: {{breadcrumb_strategy}}
- Deep linking: {{deep_linking_support}}

### Route Protection
[[LLM: Document authentication and authorization routing]]
- Authentication routing: {{auth_routing}}
- Role-based access: {{rbac_approach}}
- Redirect strategies: {{redirect_approach}}

## Performance Strategy

### Optimization Techniques
[[LLM: Document performance optimization approaches]]

**Code Splitting:**
- Route-level splitting: {{route_splitting}}
- Component-level splitting: {{component_splitting}}
- Dynamic imports strategy: {{dynamic_imports}}

**Image Optimization:**
- next/image usage: {{image_optimization}}
- Responsive images: {{responsive_approach}}
- Loading strategies: {{loading_strategies}}

**CSS Optimization:**
- Tailwind purging: {{purge_strategy}}
- Critical CSS: {{critical_css}}
- Bundle optimization: {{bundle_optimization}}

### Performance Budgets
[[LLM: Define performance targets and budgets]]
- Bundle size limits: {{bundle_limits}}
- Loading time targets: {{loading_targets}}
- Core Web Vitals goals: {{cwv_goals}}

## Accessibility Strategy

### WCAG Compliance
[[LLM: Document accessibility implementation approach]]

**Compliance Level**: {{wcag_level}}
**Key Requirements:**
- Keyboard navigation: {{keyboard_strategy}}
- Screen reader support: {{screen_reader_strategy}}
- Color contrast: {{contrast_strategy}}
- Focus management: {{focus_strategy}}

### Implementation Approach
- shadcn/ui accessibility features: {{shadcn_a11y}}
- Custom accessibility utilities: {{custom_a11y}}
- Testing strategy: {{a11y_testing}}

## Development Workflow

### Code Organization
[[LLM: Document coding standards and organization]]

**TypeScript Configuration:**
- Strict mode: {{strict_mode}}
- Path mapping: {{path_mapping}}
- Type checking approach: {{type_checking}}

**Code Style:**
- ESLint configuration: {{eslint_config}}
- Prettier setup: {{prettier_config}}
- Import organization: {{import_organization}}

### Component Development
[[LLM: Document component development patterns]]

**Component Structure:**
```typescript
// Component template structure
interface {{ComponentName}}Props {
  // Props definition
}

export const {{ComponentName}} = ({ ...props }: {{ComponentName}}Props) => {
  // Component implementation
}

{{ComponentName}}.displayName = "{{ComponentName}}"
```

**Hooks Pattern:**
- Custom hooks naming: `use{{HookName}}`
- Hook organization: {{hook_organization}}
- Shared logic extraction: {{shared_logic}}

## Testing Strategy

### Testing Approach
[[LLM: Define comprehensive testing strategy]]

**Unit Testing:**
- Framework: {{testing_framework}}
- Component testing: {{component_testing}}
- Hook testing: {{hook_testing}}

**Integration Testing:**
- API integration: {{api_testing}}
- User flow testing: {{flow_testing}}
- Form testing: {{form_testing}}

**Visual Testing:**
- Component stories: {{storybook_usage}}
- Visual regression: {{visual_testing}}
- Responsive testing: {{responsive_testing}}

### Testing Tools
- Test runner: {{test_runner}}
- Testing utilities: {{testing_utilities}}
- Mock strategies: {{mock_strategies}}

## Deployment and DevOps

### Build Process
[[LLM: Document build and deployment configuration]]

**Build Configuration:**
- Next.js build settings: {{build_settings}}
- Environment configuration: {{env_config}}
- Static optimization: {{static_optimization}}

**Deployment Strategy:**
- Platform: {{deployment_platform}}
- Build process: {{build_process}}
- Environment management: {{env_management}}

### Monitoring and Analytics
[[LLM: Document monitoring and analytics setup]]
- Performance monitoring: {{performance_monitoring}}
- Error tracking: {{error_tracking}}
- User analytics: {{user_analytics}}

## Security Considerations

### Frontend Security
[[LLM: Document security measures and considerations]]

**Content Security Policy**: {{csp_strategy}}
**Data Validation**: {{validation_strategy}}
**XSS Prevention**: {{xss_prevention}}
**CSRF Protection**: {{csrf_protection}}

### Environment Security
- API key management: {{api_key_strategy}}
- Sensitive data handling: {{sensitive_data}}
- Build-time security: {{build_security}}

## Migration and Maintenance

### Upgrade Strategy
[[LLM: Document approach for handling updates and migrations]]

**Dependency Updates:**
- React/Next.js updates: {{framework_updates}}
- shadcn/ui updates: {{ui_updates}}
- Security patches: {{security_updates}}

**Breaking Changes:**
- Migration planning: {{migration_planning}}
- Backward compatibility: {{compatibility_strategy}}
- Testing regression: {{regression_testing}}

## Implementation Roadmap

### Phase 1: Foundation
[[LLM: Break down implementation into phases]]
- [ ] Project setup and configuration
- [ ] Basic routing and layout structure
- [ ] Design system integration
- [ ] Core component library

### Phase 2: Core Features
- [ ] Main feature implementation
- [ ] State management setup
- [ ] API integration
- [ ] Form handling

### Phase 3: Enhancement
- [ ] Performance optimization
- [ ] Accessibility compliance
- [ ] Testing implementation
- [ ] Documentation completion

### Phase 4: Production
- [ ] Production build optimization
- [ ] Deployment configuration
- [ ] Monitoring setup
- [ ] Security hardening

## Documentation and Knowledge Transfer

### Documentation Requirements
[[LLM: Define documentation needs for the project]]
- Architecture documentation: {{arch_docs}}
- Component documentation: {{component_docs}}
- API documentation: {{api_docs}}
- Deployment documentation: {{deploy_docs}}

### Team Knowledge Transfer
- Onboarding materials: {{onboarding_materials}}
- Development guidelines: {{dev_guidelines}}
- Troubleshooting guides: {{troubleshooting}}

[[LLM: Review this architecture document with the user to ensure all technical decisions align with project requirements. Ask for any clarifications or modifications needed before finalizing.]]