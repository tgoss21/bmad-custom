# {{Component Name}} - Component Specification

[[LLM: This template helps document React component specifications with shadcn/ui and Tailwind CSS implementations. Gather component requirements from user and fill in all sections.]]

## Component Overview

### Purpose
[[LLM: Brief description of what this component does and its role in the application]]

### Component Type
[[LLM: Select appropriate type based on user input]]
- [ ] Atomic Component (Button, Input, Icon)
- [ ] Molecule Component (Card, Form Field, Navigation Item)
- [ ] Organism Component (Header, Form, Data Table)
- [ ] Layout Component (Container, Grid, Stack)

## Design Requirements

### Visual Design
[[LLM: Describe the visual appearance and design requirements]]

### Responsive Behavior
[[LLM: Document how the component should behave across different screen sizes]]
- **Mobile (< 640px)**: {{mobile_behavior}}
- **Tablet (640px - 1024px)**: {{tablet_behavior}}
- **Desktop (> 1024px)**: {{desktop_behavior}}

### Interactive States
[[LLM: Define all interactive states the component should support]]
- **Default**: {{default_state}}
- **Hover**: {{hover_state}}
- **Focus**: {{focus_state}}
- **Active**: {{active_state}}
- **Disabled**: {{disabled_state}}
- **Loading**: {{loading_state}}
- **Error**: {{error_state}}

## Technical Specification

### shadcn/ui Foundation
[[LLM: Identify which shadcn/ui components will be used as foundation]]
**Base Components:**
- {{base_component_1}}
- {{base_component_2}}

**Radix Primitives (if applicable):**
- {{radix_primitive_1}}
- {{radix_primitive_2}}

### Props Interface
[[LLM: Define the TypeScript interface for component props]]

```typescript
interface {{ComponentName}}Props {
  // Required props
  {{required_prop_1}}: {{type}};
  {{required_prop_2}}: {{type}};
  
  // Optional props
  {{optional_prop_1}}?: {{type}};
  {{optional_prop_2}}?: {{type}};
  
  // Event handlers
  {{event_handler_1}}?: ({{params}}) => void;
  
  // Styling props
  className?: string;
  variant?: '{{variant_1}}' | '{{variant_2}}' | '{{variant_3}}';
  size?: '{{size_1}}' | '{{size_2}}' | '{{size_3}}';
  
  // Standard HTML props
  ...otherProps
}
```

### Variants
[[LLM: Define different visual variants of the component]]

**{{Variant_1}} Variant:**
- Purpose: {{variant_purpose}}
- Tailwind Classes: `{{tailwind_classes}}`
- Use Case: {{use_case}}

**{{Variant_2}} Variant:**
- Purpose: {{variant_purpose}}
- Tailwind Classes: `{{tailwind_classes}}`
- Use Case: {{use_case}}

### Size Options
[[LLM: Define size variations if applicable]]

**{{Size_1}}:**
- Dimensions: {{dimensions}}
- Typography: {{typography_classes}}
- Spacing: {{spacing_classes}}

**{{Size_2}}:**
- Dimensions: {{dimensions}}
- Typography: {{typography_classes}}
- Spacing: {{spacing_classes}}

## Implementation Details

### Styling Approach
[[LLM: Document the Tailwind CSS approach and custom styling needs]]

**Primary Tailwind Classes:**
- Layout: `{{layout_classes}}`
- Spacing: `{{spacing_classes}}`
- Typography: `{{typography_classes}}`
- Colors: `{{color_classes}}`
- Effects: `{{effect_classes}}`

**Custom CSS Variables (if needed):**
```css
.{{component-class}} {
  --{{custom-property}}: {{value}};
}
```

### State Management
[[LLM: Document internal state requirements and management]]
- Internal state: {{internal_state_description}}
- External state dependencies: {{external_state_description}}
- State update patterns: {{state_update_patterns}}

### Event Handling
[[LLM: Define all events the component handles or emits]]
- **{{Event_1}}**: {{event_description}}
- **{{Event_2}}**: {{event_description}}

## Accessibility Requirements

### WCAG Compliance
[[LLM: Document accessibility requirements and implementation]]
- **Keyboard Navigation**: {{keyboard_requirements}}
- **Screen Reader Support**: {{screen_reader_requirements}}
- **ARIA Labels**: {{aria_requirements}}
- **Color Contrast**: {{contrast_requirements}}
- **Focus Management**: {{focus_requirements}}

### ARIA Attributes
[[LLM: List required ARIA attributes]]
- `aria-label`: {{aria_label_usage}}
- `aria-describedby`: {{aria_describedby_usage}}
- `role`: {{role_usage}}

## Usage Examples

### Basic Usage
[[LLM: Provide basic usage example]]
```tsx
<{{ComponentName}}
  {{required_prop}}="{{value}}"
  {{optional_prop}}="{{value}}"
  {{event_handler}}={({{params}}) => {
    // Handle event
  }}
/>
```

### Advanced Usage
[[LLM: Provide advanced usage example with multiple props]]
```tsx
<{{ComponentName}}
  {{required_prop}}="{{value}}"
  variant="{{variant}}"
  size="{{size}}"
  className="{{additional_classes}}"
  {{event_handler}}={({{params}}) => {
    // Handle complex event
  }}
>
  {{children_content}}
</{{ComponentName}}>
```

### With Form Integration
[[LLM: If applicable, show form usage example]]
```tsx
<form>
  <{{ComponentName}}
    name="{{field_name}}"
    value={{{state_value}}}
    onChange={({{params}}) => {
      // Update form state
    }}
    error={{{validation_error}}}
  />
</form>
```

## Testing Requirements

### Unit Tests
[[LLM: Define unit testing requirements]]
- Render without crashing
- Props are passed correctly
- Event handlers are called
- Variants render correctly
- Accessibility attributes are present

### Integration Tests
[[LLM: Define integration testing needs]]
- Form integration works correctly
- State updates properly
- External API calls function
- Navigation/routing works

### Visual Tests
[[LLM: Define visual regression testing needs]]
- All variants render correctly
- Responsive behavior is correct
- Interactive states display properly
- Dark/light theme support

## Performance Considerations

### Optimization Strategies
[[LLM: Document performance considerations]]
- Memoization needs: {{memoization_requirements}}
- Re-render optimization: {{rerender_optimization}}
- Bundle size impact: {{bundle_considerations}}
- Loading strategies: {{loading_strategies}}

## Dependencies

### Required Packages
[[LLM: List all required npm packages]]
- React: {{react_version}}
- shadcn/ui components: {{shadcn_components}}
- Tailwind CSS: {{tailwind_version}}
- Additional packages: {{additional_packages}}

### Peer Dependencies
[[LLM: List peer dependencies if any]]
- {{peer_dependency_1}}: {{version_requirement}}
- {{peer_dependency_2}}: {{version_requirement}}

## Implementation Checklist

### Development Phase
- [ ] Create component file structure
- [ ] Implement basic component logic
- [ ] Add TypeScript interfaces
- [ ] Implement all variants and sizes
- [ ] Add proper styling with Tailwind CSS
- [ ] Implement accessibility features
- [ ] Add proper error handling
- [ ] Create usage documentation

### Testing Phase
- [ ] Write unit tests
- [ ] Add integration tests
- [ ] Test accessibility compliance
- [ ] Verify responsive behavior
- [ ] Test all interactive states
- [ ] Performance testing

### Documentation Phase
- [ ] Add JSDoc comments
- [ ] Create Storybook stories
- [ ] Update component documentation
- [ ] Add usage examples
- [ ] Document breaking changes

[[LLM: Before completing this specification, review all sections with the user and ensure all requirements are captured accurately. Ask for any missing information or clarifications needed.]]