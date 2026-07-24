export interface Music {
  id: number;
  title: string;
  artist: string;
  type: 'single' | 'album' | 'ep';
  releaseDate: string;
  cover: string;
  spotifyUrl: string;
  youtubeUrl: string;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  type: 'official' | 'live' | 'behind-the-scenes';
  releaseDate: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  alt: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  ticketUrl?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  featured: boolean;
  image: string;
}
