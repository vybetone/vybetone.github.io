'use client';

import { motion } from 'framer-motion';

const news = [
  {
    id: 1,
    title: 'New Single Released',
    date: 'July 24, 2024',
    category: 'Release',
    excerpt: 'Vybe Tone releases highly anticipated new single...',
    image: '🎵',
  },
  {
    id: 2,
    title: 'Live Performance Announced',
    date: 'July 20, 2024',
    category: 'Event',
    excerpt: 'Exciting live performance coming to major venues...',
    image: '🎤',
  },
  {
    id: 3,
    title: 'Artist Interview',
    date: 'July 15, 2024',
    category: 'Interview',
    excerpt: 'Exclusive interview discussing creative process...',
    image: '📰',
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="hero-title mb-6">News & Updates</h1>
          <p className="text-xl text-gray-300">Latest news, releases, and updates from Vybe Tone</p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-lg overflow-hidden card-hover cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-5xl">
                {item.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-primary font-bold bg-primary/20 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-xs">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.excerpt}</p>
                <div className="mt-4 text-primary font-semibold text-sm hover:text-accent-gold transition">
                  Read More →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
