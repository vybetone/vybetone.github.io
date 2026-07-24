'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const videos = [
  {
    id: 1,
    title: 'Music Video 1',
    youtubeId: 'dQw4w9WgXcQ',
    type: 'Official Music Video',
    date: '2024',
  },
  {
    id: 2,
    title: 'Live Performance',
    youtubeId: 'dQw4w9WgXcQ',
    type: 'Live Performance',
    date: '2024',
  },
  {
    id: 3,
    title: 'Behind The Scenes',
    youtubeId: 'dQw4w9WgXcQ',
    type: 'Behind The Scenes',
    date: '2024',
  },
];

export default function Videos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="hero-title mb-6">Videos</h1>
          <p className="text-xl text-gray-300">Watch music videos, live performances, and behind-the-scenes content</p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-lg overflow-hidden card-hover"
            >
              <div className="aspect-video bg-dark-800 flex items-center justify-center text-6xl relative group">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-primary font-semibold">{video.type}</span>
                <h3 className="text-xl font-bold text-white mt-2">{video.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{video.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
