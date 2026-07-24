# Deployment Guide - Vybe Tone Official Website

## Overview

This guide covers deploying the Vybe Tone website to production environments.

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git
- Firebase account with configured project
- Domain name (vibetonemusic.com)

## Environment Setup

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create or select your project
3. Enable required services:
   - **Authentication** (Email/Password)
   - **Firestore Database** (Start in production mode)
   - **Storage** (for media files)
4. Create a web app and copy the configuration
5. Update `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx
ADMIN_SECRET=generate_a_strong_secret
```

## Deployment Options

### Option 1: Vercel (Recommended)

#### Benefits:
- Zero-config Next.js deployment
- Automatic HTTPS
- Edge functions support
- Analytics included
- Environment variables management
- Automatic deployments from Git

#### Steps:

1. Push code to GitHub:
```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Select `vybetone.github.io` repository
5. In "Environment Variables" section, add:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `ADMIN_SECRET`
   - `NEXT_PUBLIC_GA_ID`

6. Click "Deploy"
7. Wait for deployment to complete

#### Connect Custom Domain:

1. In Vercel project settings, go to "Domains"
2. Add `vibetonemusic.com`
3. Add DNS records:
   ```
   CNAME  www  cname.vercel-dns.com
   A      @    76.76.19.21
   ```
4. Wait for DNS propagation (5-48 hours)

### Option 2: GitHub Pages + GitHub Actions

#### Benefits:
- Free hosting
- GitHub native
- Version control integrated
- Automatic backups

#### Steps:

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

2. Update `next.config.js`:

```javascript
module.exports = {
  output: 'export',
  reactStrictMode: true,
  // ... rest of config
};
```

3. Push to GitHub:
```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

4. GitHub Actions will automatically deploy to `gh-pages` branch

### Option 3: Traditional Node.js Hosting

#### Services:
- AWS EC2
- DigitalOcean
- Heroku
- Render
- Railway

#### Steps (Example: DigitalOcean App Platform):

1. Create DigitalOcean account
2. Create new App
3. Connect GitHub repository
4. Select Next.js as runtime
5. Add environment variables
6. Configure custom domain
7. Deploy

## Build & Deployment Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm run start

# Run linting
npm run lint

# Run type checking
npm run type-check

# Format code
npm run format
```

## Pre-Deployment Checklist

- [ ] Update `.env.local` with production Firebase credentials
- [ ] Update `lib/config.ts` with correct URLs and links
- [ ] Test all pages in development mode
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run start`
- [ ] Run `npm run lint` and `npm run type-check`
- [ ] Check SEO metadata on all pages
- [ ] Verify social links are correct
- [ ] Test contact forms
- [ ] Test mobile responsiveness
- [ ] Verify image optimization
- [ ] Check Lighthouse scores (target >90)
- [ ] Test PWA functionality
- [ ] Verify sitemap.xml and robots.txt
- [ ] Set up analytics (Google Analytics)
- [ ] Configure Firebase security rules
- [ ] Set up Firebase backup
- [ ] Test HTTPS/SSL certificate
- [ ] Set up CDN for images (optional)
- [ ] Configure error tracking (Sentry)
- [ ] Set up monitoring and alerts

## Post-Deployment Steps

### 1. Verify Deployment

```bash
# Check site is accessible
curl https://vibetonemusic.com

# Check sitemap
curl https://vibetonemusic.com/sitemap.xml

# Check robots.txt
curl https://vibetonemusic.com/robots.txt
```

### 2. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://vibetonemusic.com`
3. Verify ownership (add verification meta tag to HTML head)
4. Submit sitemap: `https://vibetonemusic.com/sitemap.xml`
5. Monitor indexing status

### 3. Google Analytics

1. Set up Google Analytics 4 property
2. Add tracking ID to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
3. Verify tracking is working

### 4. Firebase Security Rules

#### Firestore Rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read their own documents
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Allow public read for music, events, news
    match /music/{document=**} {
      allow read: if true;
      allow write: if request.auth.uid != null && isAdmin(request.auth.uid);
    }
    
    match /events/{document=**} {
      allow read: if true;
      allow write: if request.auth.uid != null && isAdmin(request.auth.uid);
    }
    
    match /news/{document=**} {
      allow read: if true;
      allow write: if request.auth.uid != null && isAdmin(request.auth.uid);
    }
  }
  
  function isAdmin(uid) {
    return uid in ['admin-uid-here'];
  }
}
```

#### Storage Rules:
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      // Allow public read
      allow read: if true;
      
      // Allow authenticated write
      allow write: if request.auth.uid != null;
    }
  }
}
```

### 5. Domain Configuration

#### For vibetonemusic.com:

1. Update DNS records:
   - Point to deployment service (Vercel/GitHub Pages/etc)
   - Enable HTTPS
   - Set up email forwarding (optional)

2. Set up SSL/TLS:
   - Most services provide free SSL
   - Ensure HTTPS is enforced
   - Check certificate validity

### 6. Performance Monitoring

1. Monitor Core Web Vitals
2. Set up error tracking (Sentry, Rollbar)
3. Monitor site uptime (Uptime Robot)
4. Track performance metrics

## Maintenance

### Regular Tasks:

- [ ] Weekly: Check error logs
- [ ] Weekly: Monitor analytics
- [ ] Monthly: Update dependencies (`npm update`)
- [ ] Monthly: Review and update content
- [ ] Quarterly: Security audit
- [ ] Quarterly: Performance review

### Update Dependencies:

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update to latest major versions (caution)
npm install -g npm-check-updates
ncu -u
npm install
```

## Troubleshooting

### Build Failures

```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Firebase Connection Issues

1. Verify credentials in `.env.local`
2. Check Firebase project settings
3. Ensure Firebase services are enabled
4. Review Firebase security rules

### Performance Issues

1. Check image optimization
2. Review bundle size (`npm run build`)
3. Monitor API response times
4. Optimize database queries

## Support & Contact

- **Support Email**: support@vibetonemusic.com
- **Admin Email**: admin@vibetonemusic.com
- **Documentation**: See README.md
- **Issue Tracker**: GitHub Issues

---

**Last Updated**: July 24, 2024
**Maintained By**: Vybe Tone Development Team
