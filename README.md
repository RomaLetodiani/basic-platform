# Botu Platform Frontend

## Repository Rules and Structure

### 1. `index.ts` for Import/Export

- Use `index.ts` to export all components, functions, and other modules from that directory.
- This practice allows for cleaner imports in other parts of the application.

Example:

```typescript
// components/index.ts
export { default as Button } from "./Button";
export { default as Input } from "./Input";
export { default as Card } from "./Card";
```

Usage:

```typescript
import { Button, Input, Card } from "@/components";
```

### 2. Shared Components and Utilities on First Level Directory

- Place shared components, hooks, and utilities in the first-level directory.
- This makes them easily accessible throughout the application.

### 3. Page-Specific Components and Environment

- Each page has its own directory with components and environment files.
- This helps in organizing and isolating page-specific logic and UI elements.

Guidelines:

- Keep page-specific components within their respective page directories
- Use shared components when possible to maintain consistency
- Create custom hooks for page-specific logic and data fetching
