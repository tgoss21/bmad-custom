# Optimize Performance Task

## Purpose

Analyze and optimize frontend performance for React/Next.js applications using shadcn/ui and Tailwind CSS, focusing on loading times, runtime performance, and user experience metrics.

## Instructions

### 1. Performance Audit

**Initial Assessment:**
- Run Lighthouse performance audit
- Use React DevTools Profiler
- Analyze Core Web Vitals (LCP, FID, CLS)
- Check network tab for loading issues
- Review bundle analyzer results

**Metrics to Measure:**
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Time to Interactive (TTI)
- Bundle size analysis

### 2. Bundle Optimization

**Code Splitting:**
- Implement dynamic imports for routes
- Split large components into smaller chunks
- Use React.lazy() for component-level splitting
- Optimize vendor bundles and third-party libraries

**Tree Shaking:**
- Remove unused code and dependencies
- Optimize imports (named vs default imports)
- Analyze and eliminate dead code
- Review shadcn/ui component imports

**Bundle Analysis:**
- Use webpack-bundle-analyzer or similar tools
- Identify largest dependencies
- Look for duplicate code across chunks
- Optimize asset loading strategies

### 3. React Performance Optimization

**Component Optimization:**
- Implement React.memo for expensive components
- Use useMemo for expensive calculations
- Apply useCallback for stable function references
- Optimize context usage and providers

**Rendering Performance:**
- Identify and fix unnecessary re-renders
- Optimize list rendering with proper keys
- Implement virtualization for large lists
- Use proper state colocation

**State Management:**
- Optimize Redux/Zustand store structure
- Minimize state updates and selectors
- Implement proper memoization patterns
- Avoid prop drilling with context optimization

### 4. Next.js Specific Optimizations

**Static Generation:**
- Use getStaticProps for static content
- Implement ISR for dynamic static content
- Optimize getServerSideProps usage
- Pre-generate critical pages

**Image Optimization:**
- Use next/image component properly
- Implement responsive images
- Add proper loading strategies (lazy, eager)
- Optimize image formats (WebP, AVIF)

**Font Optimization:**
- Use next/font for font loading
- Implement font display strategies
- Minimize font files and variants
- Preload critical fonts

### 5. Tailwind CSS Optimization

**CSS Optimization:**
- Purge unused CSS classes
- Optimize build output size
- Use JIT mode for faster builds
- Minimize custom CSS usage

**Design System Efficiency:**
- Standardize utility class usage
- Create efficient component patterns
- Optimize responsive design classes
- Minimize CSS-in-JS overhead

### 6. Asset Optimization

**Image Optimization:**
- Compress and resize images appropriately
- Use modern image formats
- Implement progressive loading
- Add proper alt text and lazy loading

**Resource Loading:**
- Preload critical resources
- Implement resource hints (dns-prefetch, preconnect)
- Optimize third-party script loading
- Minimize blocking resources

### 7. Network Performance

**Caching Strategies:**
- Implement proper HTTP caching headers
- Use service workers for offline functionality
- Optimize API response caching
- Implement CDN strategies

**Request Optimization:**
- Minimize HTTP requests
- Implement request batching where appropriate
- Optimize API payload sizes
- Use GraphQL for efficient data fetching

### 8. Runtime Performance

**Memory Management:**
- Fix memory leaks in components
- Proper cleanup in useEffect hooks
- Optimize large data structure handling
- Monitor memory usage patterns

**JavaScript Execution:**
- Optimize expensive computations
- Implement debouncing/throttling for user inputs
- Minimize main thread blocking
- Use Web Workers for heavy computations

### 9. User Experience Optimizations

**Loading States:**
- Implement skeleton screens
- Add progressive loading patterns
- Show meaningful loading indicators
- Optimize perceived performance

**Interaction Responsiveness:**
- Minimize interaction delays
- Implement optimistic updates
- Add smooth transitions and animations
- Ensure responsive touch interactions

### 10. Monitoring and Measurement

**Performance Monitoring:**
- Set up Core Web Vitals tracking
- Implement error boundary monitoring
- Use performance APIs for custom metrics
- Set up continuous performance testing

**Analytics Integration:**
- Track user experience metrics
- Monitor conversion funnel performance
- Analyze page load patterns
- Set up performance budgets

## Optimization Strategies

### Critical Performance Issues
- Large bundle sizes
- Blocking JavaScript/CSS
- Unoptimized images
- Memory leaks
- Poor caching strategies

### Common React Anti-patterns
- Inline object/function creation in render
- Missing dependencies in useEffect
- Unnecessary context re-renders
- Improper key usage in lists
- Over-optimization with useMemo/useCallback

### Next.js Performance Patterns
- Static site generation for content
- Image optimization with next/image
- Font optimization with next/font
- API route optimization
- Middleware for edge computing

## Performance Budget Guidelines

**Bundle Size Targets:**
- Main bundle: < 200KB gzipped
- Route chunks: < 100KB gzipped
- Vendor bundle: < 150KB gzipped
- CSS bundle: < 50KB gzipped

**Loading Performance:**
- FCP: < 1.8s
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## Validation and Testing

**Performance Testing:**
- Lighthouse CI integration
- Real user monitoring setup
- Performance regression testing
- Cross-device performance validation

**Monitoring Setup:**
- Core Web Vitals tracking
- Error rate monitoring
- Performance budget alerts
- User experience analytics

## Deliverables

- Comprehensive performance audit report
- Optimized codebase with performance improvements
- Performance monitoring setup
- Performance budget recommendations
- Documentation of optimization strategies
- Before/after performance metrics comparison
- Ongoing monitoring and alerting setup