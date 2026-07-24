'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import MusicCard from '@/components/music/MusicCard';
import MusicPlayer from '@/components/music/MusicPlayer';

const musicData = [
  {
    id: 1,
    title: 'First Single',
    artist: 'Vybe Tone',
    type: 'Single',
    releaseDate: '2024',
    cover: '/music-placeholder.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/vybetone',
    youtubeUrl: 'https://youtube.com/@vybetone',
  },
];

export default function Music() {
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [filter, setFilter] = useState('all');

  const filters = ['all', 'singles', 'albums', 'eps'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="hero-title mb-6">Music</h1>
          <p className="text-xl text-gray-300">Discover Vybe Tone's discography</p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === f
                  ? 'bg-primary text-dark-950'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Music Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {musicData.map((music) => (
            <MusicCard
              key={music.id}
              music={music}
              onClick={() => setSelectedMusic(music)}
            />
          ))}
        </div>

        {/* Player */}
        {selectedMusic && (
          <MusicPlayer
            music={selectedMusic}
            onClose={() => setSelectedMusic(null)}
          />
        )}
      </div>
    </div>
  );
}