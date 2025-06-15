# Create Components Task

## Purpose

Create reusable React components using shadcn/ui primitives and Tailwind CSS with proper TypeScript definitions, accessibility, and testing considerations.

## Instructions

### 1. Component Planning

Gather requirements:
- Component purpose and functionality
- Props interface and API design
- Visual design requirements
- Accessibility requirements
- Responsive behavior needs
- State management requirements

### 2. Choose shadcn/ui Foundation

Identify appropriate shadcn/ui components to build upon:
- Base primitives (Button, Input, Card, etc.)
- Complex components (Form, Dialog, Sheet, etc.)
- Radix UI primitives for advanced interactions
- Custom components when no suitable primitive exists

### 3. Create Component Structure

**File Organization:**
- Component file: `ComponentName.tsx`
- Types file: `ComponentName.types.ts` (if complex)
- Stories file: `ComponentName.stories.tsx` (if using Storybook)
- Test file: `ComponentName.test.tsx`

**Component Structure:**
```typescript
interface ComponentNameProps {
  // Define props with proper TypeScript types
}

export const ComponentName = ({ ...props }: ComponentNameProps) => {
  // Component implementation
}

ComponentName.displayName = "ComponentName"
```

### 4. Implement with Best Practices

**TypeScript:**
- Define clear prop interfaces
- Use proper typing for refs and events
- Export types for consumers
- Use generic types when appropriate

**Tailwind CSS:**
- Use utility classes for styling
- Implement responsive design patterns
- Create consistent spacing and typography
- Use CSS variables for theming

**Accessibility:**
- Add proper ARIA labels and roles
- Implement keyboard navigation
- Ensure color contrast compliance
- Add screen reader support

### 5. shadcn/ui Integration

- Extend existing shadcn/ui components when possible
- Follow shadcn/ui naming conventions
- Use cn() utility for conditional classes
- Maintain consistent styling patterns

### 6. State Management

- Use appropriate React hooks (useState, useEffect, useReducer)
- Implement controlled/uncontrolled patterns correctly
- Add proper event handlers
- Consider form integration if applicable

### 7. Documentation

Create comprehensive documentation:
- Component description and use cases
- Props API documentation
- Usage examples
- Accessibility features
- Styling customization options

### 8. Testing Strategy

- Unit tests for component logic
- Accessibility testing
- Visual regression testing (if applicable)
- Integration tests for complex interactions

## Component Categories

**Basic UI Components:**
- Custom buttons, inputs, cards
- Layout components (Grid, Stack, Container)
- Typography components

**Form Components:**
- Form fields with validation
- Multi-step forms
- File upload components

**Navigation Components:**
- Navigation bars, breadcrumbs
- Tabs, pagination
- Sidebar navigation

**Data Display:**
- Tables, lists
- Charts and graphs
- Status indicators, badges

**Feedback Components:**
- Toasts, alerts
- Loading states, progress indicators
- Empty states, error boundaries

## Validation

- Component renders without errors
- Props are properly typed and validated
- Accessibility standards are met
- Responsive design works across devices
- Integration with shadcn/ui is seamless
- Documentation is complete and accurate

## Deliverables

- Fully functional React component
- TypeScript type definitions
- Comprehensive documentation
- Usage examples
- Test coverage
- Storybook stories (if applicable)