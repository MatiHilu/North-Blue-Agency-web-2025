# Hydration Fix Documentation

## Issues Fixed

This document outlines the hydration mismatch issues that were identified and resolved in the North Blue Agency website.

## Root Causes

Hydration mismatches occur when the server-rendered HTML doesn't match what React expects on the client side. The main causes were:

### 1. Browser API Usage Without Proper Guards

- **Issue**: Using `window`, `document`, `localStorage`, etc. directly in components
- **Solution**: Added `typeof window !== 'undefined'` checks before accessing browser APIs

### 2. Inconsistent Initial State

- **Issue**: Components returning different values during SSR vs. initial client render
- **Solution**: Ensured components return the same initial state on both server and client

### 3. Client-Only Logic in Render

- **Issue**: Using browser-specific APIs like `IntersectionObserver` without proper client-side detection
- **Solution**: Added `isClient` state to defer client-only functionality

## Files Modified

### 1. `components/ui/use-mobile.tsx`

**Problem**: Hook returned `undefined` initially, then `boolean`, causing state mismatch.

```tsx
// Before
const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);
return !!isMobile;

// After
const [isMobile, setIsMobile] = React.useState(false);
const [isClient, setIsClient] = React.useState(false);
return isClient ? isMobile : false;
```

### 2. `components/header.tsx`

**Problem**: Accessing `window.scrollY` and `document.body` without client-side checks.

```tsx
// Added guards
if (!isMounted || typeof window === "undefined") return;
```

### 3. `components/animated-section.tsx`

**Problem**: Using `IntersectionObserver` immediately, which doesn't exist during SSR.

```tsx
// Added client-side detection
const [isClient, setIsClient] = useState(false);
useEffect(() => {
  setIsClient(true);
}, []);

// Only use IntersectionObserver after client hydration
useEffect(() => {
  if (!isClient) return;
  // ... IntersectionObserver logic
}, [isClient]);
```

### 4. `components/scroll-to-top.tsx`

**Problem**: Direct `window.scrollTo()` call without browser check.

```tsx
// Added guard
if (typeof window !== "undefined") {
  window.scrollTo(0, 0);
}
```

### 5. Modal Components

**Problem**: Direct `document.body.style` manipulation without browser checks.

```tsx
// Added guards in all modal components
if (typeof window === "undefined") return;
```

### 6. `components/ui/sidebar.tsx`

**Problem**: Using `document.cookie` and `window.addEventListener` without checks.

```tsx
// Added guards
if (typeof document !== 'undefined') {
  document.cookie = ...
}

if (typeof window === 'undefined') return
```

## New Utility Hook

Created `hooks/use-mounted.tsx` for reusable client-side mounting detection:

```tsx
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
```

## Best Practices for Preventing Hydration Issues

### 1. Always Guard Browser APIs

```tsx
// ❌ Wrong
const handleClick = () => {
  window.location.href = "/path";
};

// ✅ Correct
const handleClick = () => {
  if (typeof window !== "undefined") {
    window.location.href = "/path";
  }
};
```

### 2. Use Consistent Initial States

```tsx
// ❌ Wrong - undefined changes to boolean
const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

// ✅ Correct - consistent boolean
const [isMobile, setIsMobile] = useState(false);
const [isClient, setIsClient] = useState(false);
```

### 3. Defer Client-Only Features

```tsx
// ✅ Correct pattern for client-only features
const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

if (!isClient) {
  return <div>Loading...</div>; // or return server-safe content
}
```

### 4. Use the useMounted Hook

```tsx
import { useMounted } from "@/hooks/use-mounted";

function MyComponent() {
  const mounted = useMounted();

  if (!mounted) {
    return null; // or server-safe fallback
  }

  // Client-only code here
}
```

### 5. Conditional Rendering for Browser Features

```tsx
// ✅ Correct pattern
{
  typeof window !== "undefined" && <ComponentThatUsesBrowserAPIs />;
}
```

## Testing Hydration

To test for hydration issues:

1. Run `npm run build && npm run start` to test production SSR
2. Open browser DevTools and check console for hydration warnings
3. Look for text content mismatches, attribute differences, or extra/missing nodes
4. Test with JavaScript disabled to see what the server renders

## Prevention Checklist

- [ ] All `window`, `document`, `localStorage`, `sessionStorage` calls are guarded
- [ ] Components return consistent initial states on server and client
- [ ] Client-only APIs (IntersectionObserver, ResizeObserver, etc.) are deferred
- [ ] Modal and overlay components properly handle body style changes
- [ ] Responsive components handle SSR properly
- [ ] No random values (Math.random(), Date.now()) in render without guards

## Result

After implementing these fixes, the application should no longer show hydration mismatch errors in the browser console. The server-rendered HTML will match the client-side React tree, providing a smooth user experience without content flashing or layout shifts.
