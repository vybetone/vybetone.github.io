'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryImages = [
  { id: 1, title: 'Performance 1', category: 'live', emoji: '🎤' },
  { id: 2, title: 'Studio Session', category: 'studio', emoji: '🎙️' },
  { id: 3, title: 'Event Coverage', category: 'events', emoji: '🎵' },
  { id: 4, title: 'Performance 2', category: 'live', emoji: '🎤' },
  { id: 5, title: 'Behind Scenes', category: 'behind', emoji: '📸' },
  { id: 6, title: 'Collaboration', category: 'studio', emoji: '🎶' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'live', 'studio', 'behind', 'events'];

  const filtered = filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="hero-title mb-6">Gallery</h1>
          <p className="text-xl text-gray-300">Behind the scenes and memorable moments</p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat
                  ? 'bg-primary text-dark-950'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 auto-rows-max">
          {filtered.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer card-hover"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl">
                {image.emoji}
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white font-semibold text-center">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
