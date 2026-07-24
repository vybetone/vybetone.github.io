import { config } from '@/lib/config';

export function getSchemaMarkup() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicArtist',
    name: 'Vybe Tone',
    url: config.site.url,
    sameAs: [
      config.social.youtube,
      config.social.tiktok,
      config.social.instagram,
      config.social.facebook,
      config.streaming.spotify,
    ],
    image: `${config.site.url}/og-image.jpg`,
    description: config.site.description,
    genre: ['Drill', 'Afro Hip Hop', 'Dancehall', 'Afrobeat'],
    birthPlace: {
      '@type': 'Place',
      name: config.contact.location,
    },
  };
}
