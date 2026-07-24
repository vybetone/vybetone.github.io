# Contributing to Vybe Tone Official Website

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Report inappropriate behavior to admin@vibetonemusic.com

## Getting Started

### 1. Fork & Clone

```bash
git clone https://github.com/your-username/vybetone.github.io.git
cd vybetone.github.io
git remote add upstream https://github.com/vybetone/vybetone.github.io.git
```

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Changes

Follow the code style guidelines:

- Use TypeScript for all new code
- Follow existing code structure
- Write descriptive commit messages
- Add comments for complex logic
- Keep components small and focused

### 4. Test Locally

```bash
npm run dev
# Test your changes at http://localhost:3000

npm run lint
npm run type-check
npm run build
```

### 5. Commit & Push

```bash
git add .
git commit -m "feat: Add descriptive message"
git push origin feature/your-feature-name
```

### 6. Create Pull Request

- Provide clear title and description
- Reference any related issues
- Wait for code review
- Address feedback
- Request re-review when ready

## Coding Standards

### TypeScript

- Use strict mode
- Define types explicitly
- Avoid `any` type
- Use interfaces for object shapes

### React/Components

- Use functional components
- Use hooks (useState, useEffect, etc.)
- Memoize expensive computations
- Use 'use client' for client components
- Document complex props

### Naming Conventions

- Components: PascalCase (e.g., `HeroSection.tsx`)
- Functions/variables: camelCase (e.g., `handleSubmit`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- Files: kebab-case for utilities (e.g., `image-utils.ts`)

### File Organization

```
components/
  ├── [Feature]/
  │   ├── Component.tsx
  │   ├── SubComponent.tsx
  │   └── useCustomHook.ts
```

## Testing

Before submitting:

```bash
# Lint
npm run lint

# Type check
npm run type-check

# Build
npm run build

# Test in production mode
npm run start
```

## Documentation

- Update README.md if adding features
- Add JSDoc comments to exported functions
- Document complex components
- Update DEPLOYMENT.md if deployment process changes

## Commit Message Format

```
type(scope): subject

Body paragraph 1
Body paragraph 2

Fixes #123
Closes #456
```

### Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Tests
- `chore`: Build/dependencies

### Example:

```
feat(music): Add music player component

Implements a full-featured music player with:
- Play/pause controls
- Volume control
- Progress bar
- Playlist support

Fixes #42
```

## Pull Request Process

1. Update documentation
2. Add tests if applicable
3. Ensure CI passes
4. Request review from maintainers
5. Address feedback promptly
6. Squash commits if requested
7. Wait for approval before merging

## Reporting Issues

### Bug Reports

Include:
- Description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/videos
- Environment info

### Feature Requests

Include:
- Clear description
- Use cases
- Proposed solution
- Alternative approaches

## Questions?

Open an issue or contact:
- Email: dev@vibetonemusic.com
- GitHub Discussions

---

Thanks for contributing to Vybe Tone! 🎵
