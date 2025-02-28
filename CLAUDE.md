# CLAUDE.md - Agent Instructions

## Build & Test Commands
- Start dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Test all: `npm test`
- Test single: `npm test -- -t "test name"` or `npm test -- path/to/test.js`
- Type check: `npm run typecheck`

## Code Style Guidelines
- Use 2 spaces for indentation
- Follow camelCase for variables/functions, PascalCase for components
- Components should be functional with React.FC type
- Add explicit TypeScript types to all parameters and return values
- Group imports: React first, then external packages, then local imports
- CSS imports should be at the end of import section
- Use early returns and guard clauses for error handling
- Keep components and functions small and focused
- Element IDs and classNames should use kebab-case
- Create separate CSS files for each component/page
- Use CSS variables for colors and common values