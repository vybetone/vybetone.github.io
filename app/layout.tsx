import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Vybe Tone | Kenyan Drill, Afro Hip Hop & Dancehall Artist',
  description: 'Official website of Vybe Tone, a Nairobi-based Afro, Dancehall, Drill and Hip Hop artist blending authentic storytelling with modern African sound.',
  keywords: ['Vybe Tone', 'Kenyan drill artist', 'Afro hip hop', 'Dancehall', 'Nairobi artist', 'Music Without Limits'],
  authors: [{ name: 'Vybe Tone' }],
  creator: 'Vybe Tone',
  publisher: 'Vybe Tone',
  metadataBase: new URL('https://vibetonemusic.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vibetonemusic.com',
    siteName: 'Vybe Tone Official',
    title: 'Vybe Tone | Kenyan Drill, Afro Hip Hop & Dancehall Artist',
    description: 'Music Without Limits - Discover the raw energy of Vybe Tone, blending Drill, Afro Hip Hop, Dancehall & Afrobeat from Nairobi.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vybe Tone Official',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vybe Tone | Kenyan Drill, Afro Hip Hop & Dancehall Artist',
    description: 'Music Without Limits',
    creator: '@vybe_tone',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'nVsxC4MR2PVYqMVBP5WPBzOQQ2NfjLZztre9CP4OwH4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://vibetonemusic.com" />
      </head>
      <body className={`${inter.className} bg-dark-950 text-white overflow-x-hidden`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}