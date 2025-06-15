# Review Frontend Code Task

## Purpose

Conduct comprehensive code reviews for React, Next.js, shadcn/ui, and Tailwind CSS implementations, focusing on best practices, performance, accessibility, and maintainability.

## Instructions

### 1. Initial Code Assessment

**Code Structure Review:**
- Examine file organization and naming conventions
- Review component hierarchy and composition
- Check import/export patterns and dependencies
- Assess folder structure and separation of concerns

**Architecture Analysis:**
- Evaluate component design patterns
- Review state management approaches
- Assess data flow and prop passing
- Check for proper separation of logic and presentation

### 2. React/Next.js Best Practices

**Component Quality:**
- Check for proper React hooks usage
- Verify component composition and reusability
- Review prop drilling and context usage
- Assess component lifecycle management

**Performance Patterns:**
- Look for unnecessary re-renders
- Check proper use of React.memo, useMemo, useCallback
- Review component splitting and lazy loading
- Assess bundle size and optimization

**Next.js Specific:**
- Review routing implementation and navigation
- Check API routes and server-side logic
- Assess static generation vs server-side rendering usage
- Review image optimization and SEO implementation

### 3. TypeScript Implementation

**Type Safety:**
- Review interface and type definitions
- Check proper typing of props and state
- Assess generic usage and constraints
- Verify proper typing of event handlers and refs

**Code Quality:**
- Check for any type assertions or `any` usage
- Review type imports and exports
- Assess union types and discriminated unions
- Verify proper typing of async operations

### 4. shadcn/ui Integration

**Component Usage:**
- Review proper shadcn/ui component implementation
- Check for consistent styling patterns
- Assess customization and theming approach
- Verify accessibility features are maintained

**Customization Quality:**
- Review component extensions and modifications
- Check for proper use of cn() utility
- Assess custom variants and styling
- Verify consistent design system usage

### 5. Tailwind CSS Review

**Utility Usage:**
- Check for proper utility class usage
- Look for opportunities to use utility classes over custom CSS
- Review responsive design implementation
- Assess consistent spacing and sizing

**Performance and Maintainability:**
- Check for unused utility classes
- Review custom CSS vs utility classes balance
- Assess theme configuration and customization
- Look for repeated patterns that could be componentized

### 6. Accessibility Audit

**WCAG Compliance:**
- Check semantic HTML usage
- Review ARIA labels and roles
- Assess keyboard navigation support
- Verify color contrast and visual accessibility

**Screen Reader Support:**
- Review alt text for images
- Check form labels and error messages
- Assess focus management
- Verify announcements for dynamic content

### 7. Performance Analysis

**Loading Performance:**
- Review code splitting and lazy loading
- Check image optimization strategies
- Assess font loading and optimization
- Review third-party library usage

**Runtime Performance:**
- Look for memory leaks and cleanup
- Check for excessive DOM manipulation
- Review large list rendering patterns
- Assess state update frequency and batching

### 8. Security Considerations

**Data Handling:**
- Review input validation and sanitization
- Check for XSS vulnerabilities
- Assess data exposure in client-side code
- Review environment variable usage

**Dependencies:**
- Check for security vulnerabilities in packages
- Review third-party library usage
- Assess bundle size and dependency bloat
- Check for outdated packages

### 9. Code Quality Standards

**Readability:**
- Check variable and function naming
- Review code comments and documentation
- Assess function and component size
- Look for code duplication

**Maintainability:**
- Review error handling patterns
- Check for proper testing structure
- Assess configuration and environment handling
- Look for hard-coded values

## Review Categories

**Critical Issues (Must Fix):**
- Security vulnerabilities
- Accessibility violations
- Performance bottlenecks
- Broken functionality

**Major Issues (Should Fix):**
- Code duplication
- Poor performance patterns
- Missing error handling
- TypeScript typing issues

**Minor Issues (Nice to Have):**
- Code style consistency
- Optimization opportunities
- Documentation improvements
- Refactoring suggestions

## Review Checklist

### React/Next.js
- [ ] Components follow single responsibility principle
- [ ] Proper hook usage and dependencies
- [ ] No memory leaks or improper cleanup
- [ ] Efficient re-rendering patterns
- [ ] Proper error boundaries

### TypeScript
- [ ] Strong typing throughout codebase
- [ ] No usage of `any` type
- [ ] Proper interface definitions
- [ ] Generic types used appropriately
- [ ] Type imports/exports organized

### shadcn/ui & Tailwind
- [ ] Consistent component usage patterns
- [ ] Proper styling customization
- [ ] Responsive design implementation
- [ ] Accessible component usage
- [ ] Theme configuration proper

### Performance
- [ ] Optimized bundle size
- [ ] Proper code splitting
- [ ] Efficient rendering patterns
- [ ] Image and asset optimization
- [ ] No performance anti-patterns

### Accessibility
- [ ] Semantic HTML structure
- [ ] Proper ARIA usage
- [ ] Keyboard navigation support
- [ ] Color contrast compliance
- [ ] Screen reader compatibility

## Deliverables

- Detailed code review report
- Categorized list of issues and recommendations
- Performance analysis and suggestions
- Accessibility audit results
- Security assessment
- Action plan with priorities
- Code improvement examples