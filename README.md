# Vybe Tone - Official Website

**Music Without Limits**

Official website for Vybe Tone, a Kenyan Drill, Afro Hip Hop, Dancehall & Afrobeat artist from Nairobi.

## 🎵 About

Vybe Tone is a raw voice from Nairobi, blending Afro, Dancehall, Drill, and Hip Hop with street energy, hard bars, and real stories. This is the official website showcasing music, videos, events, and exclusive content.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Firebase (Firestore, Storage)
- **Authentication**: Firebase Auth
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **State Management**: Zustand

## 📂 Project Structure

```
.
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── music/             # Music discography
│   ├── videos/            # Music videos
│   ├── gallery/           # Photo gallery
│   ├── events/            # Events & tour dates
│   ├── merchandise/       # Merch store
│   ├── news/              # Blog & news
│   ├── fanzone/           # Fan community
│   ├── contact/           # Contact form
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── admin/             # Admin dashboard
│   ├── sitemap.ts         # XML sitemap
│   └── robots.ts          # robots.txt
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Footer
│   ├── sections/          # Page sections
│   ├── about/             # About page components
│   ├── music/             # Music components
│   └── contact/           # Contact components
├── lib/                   # Utility functions
│   ├── firebase.ts        # Firebase configuration
│   ├── config.ts          # Site configuration
│   ├── schema.ts          # Schema.org markup
│   └── utils.ts           # Helper functions
├── types/                 # TypeScript type definitions
│   └── index.ts           # All type definitions
├── public/                # Static assets
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # robots.txt
├── middleware.ts          # Next.js middleware
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind config
├── next.config.js         # Next.js config
└── postcss.config.js      # PostCSS config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vybetone/vybetone.github.io.git
cd vybetone.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your Firebase credentials
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Features

- ✅ Premium dark theme with gold & electric blue accents
- ✅ Glassmorphism UI effects
- ✅ Smooth animations with Framer Motion
- ✅ Responsive mobile-first design
- ✅ SEO optimized with Schema.org markup
- ✅ Firebase backend integration
- ✅ Admin dashboard for content management
- ✅ Newsletter subscription
- ✅ Contact form
- ✅ Music discography with streaming links
- ✅ Video gallery with YouTube integration
- ✅ Photo gallery with masonry layout
- ✅ Events & tour dates
- ✅ Merchandise store
- ✅ Blog & news section
- ✅ Fan community zone
- ✅ PWA support
- ✅ Accessibility (WCAG)

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Admin
ADMIN_SECRET=your_secret_key

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# API
NEXT_PUBLIC_API_URL=https://vibetonemusic.com
```

## 📱 Pages

- **Home** (`/`) - Hero section with featured content
- **About** (`/about`) - Artist bio, mission, vision, timeline
- **Music** (`/music`) - Discography with streaming links
- **Videos** (`/videos`) - Official videos and performances
- **Gallery** (`/gallery`) - Photo gallery with masonry layout
- **Events** (`/events`) - Upcoming performances and tour dates
- **Merchandise** (`/merchandise`) - Official store
- **News** (`/news`) - Blog posts and updates
- **Fan Zone** (`/fanzone`) - Community and exclusive content
- **Contact** (`/contact`) - Contact form and booking
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service
- **Admin** (`/admin`) - Admin dashboard

## 🔍 SEO

- Schema.org MusicArtist structured data
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs
- robots.txt & sitemap.xml
- Rich metadata on all pages
- Optimized page titles & descriptions

## ⚡ Performance

- Target Lighthouse score: 95+
- Image optimization
- Lazy loading
- Code splitting
- Font optimization
- Fast navigation with Next.js
- PWA support

## 🔒 Security

- Input validation on forms
- XSS protection
- CSRF-ready architecture
- Secure environment variables
- Firebase security rules
- HTTPS only
- Security headers in middleware

## 📦 Deployment

The site is configured for deployment on:
- Vercel (recommended)
- GitHub Pages
- Any Node.js hosting

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

All rights reserved © 2024 Vybe Tone

## 📞 Contact

- **Email**: contact@vibetonemusic.com
- **Booking**: booking@vibetonemusic.com
- **Location**: Nairobi, Kenya
- **Website**: https://vibetonemusic.com

## 🎯 Roadmap

- [ ] Admin dashboard for content management
- [ ] Music player with queue
- [ ] Merchandise checkout integration
- [ ] Fan community forum
- [ ] Live streaming capability
- [ ] Exclusive member content
- [ ] Mobile app
- [ ] Analytics dashboard

---

**Music Without Limits** 🎵
