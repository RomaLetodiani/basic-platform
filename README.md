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

### 4. MUI components, utilities and types should be imported with absolute import

Bad Example:

```
import { Box, Link, Alert} from "@mui/material";
import Alert from "@mui/material/Alert";
```

Good Example:

```
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
```

Explanation:

- Readability: It makes the imports more explicit and easier to understand which components are being used.
- Tree Shaking: This practice helps with tree shaking, allowing unused code to be eliminated during the build process.
- Absolute Imports: Importing each component individually from its specific path ensures that only the necessary code is included in the bundle, which can improve performance and reduce bundle size.
