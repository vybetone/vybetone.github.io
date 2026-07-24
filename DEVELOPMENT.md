# Vybe Tone - Development Guidelines

## Project Overview

Vybe Tone Official Website built with Next.js 14, TypeScript, Tailwind CSS, and Firebase.

## Quick Reference

| Aspect | Details |
|--------|----------|
| **Framework** | Next.js 14 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Backend** | Firebase |
| **Deployment** | Vercel |
| **Repository** | GitHub |

## Directory Structure

```
project-root/
├── app/                    # Next.js app router
├── components/             # React components
├── lib/                    # Utilities & config
├── types/                  # TypeScript types
├── public/                 # Static files
├── middleware.ts           # Request middleware
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

## Development Workflow

1. **Clone Repository**
   ```bash
   git clone https://github.com/vybetone/vybetone.github.io.git
   cd vybetone.github.io
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment**
   ```bash
   cp .env.local.example .env.local
   # Edit with your credentials
   ```

4. **Start Development**
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

## Code Standards

### TypeScript
- ✅ Strict mode enabled
- ✅ Explicit types preferred
- ✅ Interfaces over types for objects
- ✅ No `any` without justification

### React/Next.js
- ✅ Functional components
- ✅ Server components by default
- ✅ `'use client'` for client interactivity
- ✅ Hook-based state management

### Styling
- ✅ Utility-first with Tailwind
- ✅ Custom classes in globals.css
- ✅ No inline styles
- ✅ Mobile-first responsive design

## Component Guidelines

### Naming
```typescript
// ✅ Good
function HeroSection() { }
function useUserAuth() { }
const API_KEY = 'xxx';

// ❌ Avoid
function heroSection() { }
function useauth() { }
const ApiKey = 'xxx';
```

### Structure
```typescript
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
}

export default function Component({ title }: Props) {
  const [state, setState] = useState('');

  return (
    <motion.div>
      {title}
    </motion.div>
  );
}
```

## Testing Checklist

Before committing:
```bash
✅ npm run lint       # ESLint
✅ npm run type-check # TypeScript
✅ npm run build      # Production build
✅ npm run start      # Test build locally
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: Add feature"

# Push and create PR
git push origin feature/feature-name
```

## Performance Tips

1. **Images**: Use optimized formats (WebP, AVIF)
2. **Bundle**: Monitor with `npm run build`
3. **Animations**: Use Framer Motion efficiently
4. **Database**: Index frequently queried fields
5. **API**: Implement caching where possible

## Security Checklist

- ✅ Environment variables in .env.local
- ✅ Firebase rules configured
- ✅ Input validation on forms
- ✅ HTTPS only
- ✅ Security headers set
- ✅ No hardcoded secrets

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Quality
npm run lint             # Run ESLint
npm run type-check       # TypeScript check
npm run format           # Format with Prettier
npm run format:check     # Check formatting

# Maintenance
npm update               # Update dependencies
npm outdated             # Check outdated packages
npm audit                # Security audit
```

## Common Issues

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Type Errors
```bash
npm run type-check      # Find type issues
```

### Performance Issues
- Run: `npm run build` to check bundle size
- Use DevTools to profile
- Check Firebase queries

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Firebase Docs](https://firebase.google.com/docs)

## Support

- Issues: GitHub Issues
- Questions: GitHub Discussions
- Email: dev@vibetonemusic.com

---

**Last Updated**: July 24, 2024
