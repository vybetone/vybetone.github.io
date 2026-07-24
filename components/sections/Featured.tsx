'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const featured = [
  {
    title: 'Latest Release',
    description: 'New single out now on all streaming platforms',
    image: '🎵',
    link: '/music',
  },
  {
    title: 'Music Videos',
    description: 'Watch the latest music videos and performances',
    image: '🎬',
    link: '/videos',
  },
  {
    title: 'Live Events',
    description: 'Upcoming performances and appearances',
    image: '🎤',
    link: '/events',
  },
];

export default function Featured() {
  return (
    <section id="featured" className="py-20 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured</h2>
          <p className="text-gray-300 text-lg">Check out what's happening</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Link href={item.link}>
                <div className="glass-effect p-8 rounded-2xl h-full cursor-pointer card-hover">
                  <div className="text-6xl mb-4">{item.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                  <div className="mt-4 text-primary font-semibold">Learn More →</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}