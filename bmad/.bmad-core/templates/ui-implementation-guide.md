# {{Feature/Component Name}} - UI Implementation Guide

[[LLM: This template provides detailed implementation guidance for converting designs into React components with shadcn/ui and Tailwind CSS. Review any provided design files, mockups, or specifications before starting.]]

## Implementation Overview

### Feature Description
[[LLM: Describe what UI feature or component is being implemented]]

### Design Assets Provided
[[LLM: List all design assets available for reference]]
- Design mockups: {{mockup_files}}
- Figma/Sketch files: {{design_files}}
- Style guide: {{style_guide}}
- Interactive prototypes: {{prototypes}}
- Brand guidelines: {{brand_guidelines}}

### Implementation Scope
[[LLM: Define the scope of this implementation]]
- Components to build: {{component_list}}
- Pages/views to create: {{page_list}}
- Responsive breakpoints: {{breakpoints}}
- Interactive features: {{interactive_features}}

## Design Analysis

### Visual Design Breakdown
[[LLM: Analyze the design and break it down into implementable components]]

**Layout Structure:**
- Grid system: {{grid_description}}
- Container structure: {{container_structure}}
- Spacing system: {{spacing_analysis}}
- Typography hierarchy: {{typography_analysis}}

**Color Palette:**
[[LLM: Extract colors from design and map to Tailwind/CSS variables]]
```css
/* Custom color definitions */
:root {
  --color-primary: {{primary_color}};
  --color-secondary: {{secondary_color}};
  --color-accent: {{accent_color}};
  --color-background: {{background_color}};
  --color-surface: {{surface_color}};
  --color-text-primary: {{text_primary}};
  --color-text-secondary: {{text_secondary}};
}
```

**Typography Scale:**
- Headings: {{heading_styles}}
- Body text: {{body_styles}}
- Captions/Labels: {{caption_styles}}
- Font families: {{font_families}}

### Component Mapping
[[LLM: Map design elements to shadcn/ui components and custom components]]

**shadcn/ui Components Used:**
- {{design_element_1}} → {{shadcn_component_1}}
- {{design_element_2}} → {{shadcn_component_2}}
- {{design_element_3}} → {{shadcn_component_3}}

**Custom Components Needed:**
- {{custom_component_1}}: {{component_description}}
- {{custom_component_2}}: {{component_description}}
- {{custom_component_3}}: {{component_description}}

### Responsive Design Analysis
[[LLM: Analyze responsive behavior from design specifications]]

**Breakpoint Behavior:**
- **Mobile (< 640px)**: {{mobile_layout}}
- **Tablet (640px - 1024px)**: {{tablet_layout}}
- **Desktop (1024px+)**: {{desktop_layout}}

**Responsive Patterns:**
- Navigation: {{nav_responsive_pattern}}
- Grid layouts: {{grid_responsive_pattern}}
- Typography: {{typography_responsive_pattern}}
- Images/Media: {{media_responsive_pattern}}

## Implementation Plan

### Phase 1: Foundation Setup
[[LLM: Define the foundational setup required]]

**Tailwind Configuration:**
```javascript
// tailwind.config.js additions
module.exports = {
  theme: {
    extend: {
      colors: {
        // Custom colors from design
        {{custom_color_definitions}}
      },
      fontFamily: {
        // Custom fonts
        {{font_family_definitions}}
      },
      spacing: {
        // Custom spacing if needed
        {{custom_spacing}}
      },
      screens: {
        // Custom breakpoints if needed
        {{custom_breakpoints}}
      }
    }
  }
}
```

**CSS Variables Setup:**
```css
/* globals.css additions */
@layer base {
  :root {
    {{css_variables}}
  }
  
  .dark {
    {{dark_mode_variables}}
  }
}
```

### Phase 2: Component Development
[[LLM: Break down component development into logical steps]]

#### Step 1: Layout Components
[[LLM: Start with layout and container components]]

**{{Layout_Component_1}}:**
```tsx
// Implementation structure
interface {{Layout_Component_1}}Props {
  children: React.ReactNode;
  {{additional_props}};
}

export const {{Layout_Component_1}} = ({ children, ...props }) => {
  return (
    <div className="{{tailwind_classes}}">
      {children}
    </div>
  );
};
```

**Tailwind Classes:**
- Layout: `{{layout_classes}}`
- Spacing: `{{spacing_classes}}`
- Responsive: `{{responsive_classes}}`

#### Step 2: UI Components
[[LLM: Build individual UI components]]

**{{UI_Component_1}}:**
```tsx
// Component implementation
interface {{UI_Component_1}}Props {
  {{prop_definitions}}
}

export const {{UI_Component_1}} = ({ ...props }) => {
  return (
    <{{base_element}} className={cn(
      "{{base_classes}}",
      {{variant_classes}},
      className
    )}>
      {{component_content}}
    </{{base_element}}>
  );
};
```

**shadcn/ui Integration:**
- Base component: {{base_shadcn_component}}
- Customizations: {{customization_details}}
- Styling approach: {{styling_approach}}

#### Step 3: Interactive Components
[[LLM: Implement interactive elements and forms]]

**{{Interactive_Component_1}}:**
- State management: {{state_approach}}
- Event handling: {{event_handling}}
- Validation: {{validation_approach}}
- Error states: {{error_handling}}

### Phase 3: Page Assembly
[[LLM: Assemble components into complete pages/views]]

**{{Page_Name}}:**
```tsx
export default function {{Page_Name}}() {
  return (
    <{{Layout_Component}}>
      <{{Header_Component}} />
      <main className="{{main_classes}}">
        <{{Content_Component_1}} />
        <{{Content_Component_2}} />
      </main>
      <{{Footer_Component}} />
    </{{Layout_Component}}>
  );
}
```

## Detailed Implementation

### Component-by-Component Guide

<<REPEAT: component_implementation>>

#### {{Component_Name}}

**Design Reference:** {{design_reference}}

**Implementation Details:**
```tsx
{{component_code}}
```

**Styling Breakdown:**
- Purpose: {{component_purpose}}
- Base styles: `{{base_styles}}`
- Responsive behavior: `{{responsive_styles}}`
- Interactive states: `{{interactive_styles}}`
- Accessibility: `{{accessibility_features}}`

**Props Interface:**
```typescript
interface {{Component_Name}}Props {
  {{props_definition}}
}
```

**Usage Example:**
```tsx
<{{Component_Name}}
  {{example_props}}
/>
```

<</REPEAT>>

### Form Implementation
[[LLM: If forms are part of the design, provide detailed form implementation]]

**Form Structure:**
```tsx
const {{Form_Name}} = () => {
  const form = useForm<{{FormType}}>({
    resolver: zodResolver({{validation_schema}}),
    defaultValues: {{default_values}}
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit({{submit_handler}})}>
        {{form_fields}}
        <Button type="submit">{{submit_text}}</Button>
      </form>
    </Form>
  );
};
```

**Validation Schema:**
```typescript
const {{validation_schema}} = z.object({
  {{validation_rules}}
});
```

### Animation and Transitions
[[LLM: Document any animations or transitions from the design]]

**Animation Requirements:**
- Entrance animations: {{entrance_animations}}
- Hover effects: {{hover_effects}}
- Loading states: {{loading_animations}}
- Page transitions: {{page_transitions}}

**Implementation Approach:**
- CSS transitions: {{css_transitions}}
- Framer Motion (if needed): {{framer_motion_usage}}
- shadcn/ui animations: {{shadcn_animations}}

## Responsive Implementation

### Mobile-First Approach
[[LLM: Detail the mobile-first implementation strategy]]

**Mobile Base Styles:**
```css
/* Mobile-first base styles */
.{{component_class}} {
  {{mobile_base_styles}}
}
```

**Responsive Enhancements:**
```css
/* Tablet and up */
@media (min-width: 640px) {
  .{{component_class}} {
    {{tablet_enhancements}}
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .{{component_class}} {
    {{desktop_enhancements}}
  }
}
```

**Tailwind Responsive Classes:**
- Mobile: `{{mobile_classes}}`
- Tablet: `sm:{{tablet_classes}}`
- Desktop: `lg:{{desktop_classes}}`

### Responsive Testing Checklist
- [ ] Mobile portrait (320px-480px)
- [ ] Mobile landscape (480px-640px)
- [ ] Tablet portrait (640px-768px)
- [ ] Tablet landscape (768px-1024px)
- [ ] Desktop (1024px-1440px)
- [ ] Large desktop (1440px+)

## Accessibility Implementation

### WCAG Compliance
[[LLM: Detail accessibility implementation based on design requirements]]

**Semantic HTML:**
```tsx
// Proper semantic structure
<header role="banner">
  <nav role="navigation" aria-label="{{nav_label}}">
    <ul>
      <li><a href="{{url}}" aria-current="{{current_state}}">{{link_text}}</a></li>
    </ul>
  </nav>
</header>

<main role="main">
  <h1>{{page_title}}</h1>
  <section aria-labelledby="{{section_id}}">
    <h2 id="{{section_id}}">{{section_title}}</h2>
  </section>
</main>
```

**ARIA Implementation:**
- Labels: `aria-label="{{label_text}}"`
- Descriptions: `aria-describedby="{{description_id}}"`
- States: `aria-expanded="{{state}}"`
- Roles: `role="{{role_type}}"`

**Keyboard Navigation:**
- Tab order: {{tab_order_strategy}}
- Focus management: {{focus_management}}
- Keyboard shortcuts: {{keyboard_shortcuts}}

**Color and Contrast:**
- Contrast ratios: {{contrast_ratios}}
- Color-blind considerations: {{colorblind_considerations}}
- High contrast mode: {{high_contrast_support}}

## Performance Optimization

### Image Optimization
[[LLM: Detail image optimization strategy]]

**next/image Implementation:**
```tsx
<Image
  src="{{image_src}}"
  alt="{{alt_text}}"
  width={{width}}
  height={{height}}
  priority={{priority_flag}}
  placeholder="{{placeholder_type}}"
  sizes="{{responsive_sizes}}"
/>
```

**Responsive Images:**
- Breakpoint images: {{breakpoint_images}}
- Art direction: {{art_direction}}
- Loading strategy: {{loading_strategy}}

### Bundle Optimization
[[LLM: Document bundle optimization strategies]]

**Code Splitting:**
- Component-level: `const {{Component}} = lazy(() => import('./{{Component}}'));`
- Route-level: Next.js automatic splitting
- Third-party libraries: {{library_splitting}}

**CSS Optimization:**
- Tailwind purging: {{purge_configuration}}
- Critical CSS: {{critical_css_strategy}}
- Unused style removal: {{unused_style_removal}}

## Quality Assurance

### Testing Strategy
[[LLM: Define testing approach for the UI implementation]]

**Visual Testing:**
- Component stories: {{storybook_stories}}
- Visual regression: {{regression_testing}}
- Cross-browser testing: {{browser_testing}}

**Functional Testing:**
- User interactions: {{interaction_testing}}
- Form submissions: {{form_testing}}
- Error handling: {{error_testing}}

**Accessibility Testing:**
- Screen reader testing: {{screen_reader_testing}}
- Keyboard navigation: {{keyboard_testing}}
- Color contrast: {{contrast_testing}}

### Browser Compatibility
[[LLM: Define browser support requirements]]

**Supported Browsers:**
- Chrome: {{chrome_version}}+
- Firefox: {{firefox_version}}+
- Safari: {{safari_version}}+
- Edge: {{edge_version}}+

**Fallback Strategies:**
- Progressive enhancement: {{progressive_enhancement}}
- Graceful degradation: {{graceful_degradation}}
- Polyfills needed: {{polyfills}}

## Implementation Checklist

### Development Checklist
- [ ] All design elements implemented
- [ ] Responsive behavior matches design
- [ ] Interactive states functioning
- [ ] Forms validated and submitting
- [ ] Images optimized and responsive
- [ ] Typography matches design specifications
- [ ] Colors and spacing accurate
- [ ] Animations and transitions working

### Quality Checklist
- [ ] Cross-browser compatibility verified
- [ ] Accessibility compliance met
- [ ] Performance metrics acceptable
- [ ] Code review completed
- [ ] Documentation updated
- [ ] Tests written and passing

### Deployment Checklist
- [ ] Production build optimized
- [ ] Assets properly compressed
- [ ] SEO meta tags implemented
- [ ] Analytics tracking added
- [ ] Error monitoring configured
- [ ] Performance monitoring setup

## Documentation and Handoff

### Component Documentation
[[LLM: Ensure proper documentation for handoff]]

**Storybook Stories:**
- Component variations: {{story_variations}}
- Interactive examples: {{interactive_examples}}
- Documentation pages: {{documentation_pages}}

**Usage Guidelines:**
- When to use: {{usage_guidelines}}
- Best practices: {{best_practices}}
- Common pitfalls: {{common_pitfalls}}

### Maintenance Notes
[[LLM: Document maintenance considerations]]

**Future Enhancements:**
- Planned features: {{planned_features}}
- Known limitations: {{known_limitations}}
- Technical debt: {{technical_debt}}

**Update Strategy:**
- Design system updates: {{design_system_updates}}
- Dependency updates: {{dependency_updates}}
- Browser support changes: {{browser_support_changes}}

[[LLM: Review this implementation guide with the user to ensure all design requirements are captured and the implementation approach is appropriate. Ask for any clarifications or modifications needed.]]