'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import { config } from '@/lib/config';

export default function Music() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Streaming Platforms</h2>
          <p className="text-gray-300 text-lg">Listen on your favorite platform</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: FaSpotify, label: 'Spotify', url: config.streaming.spotify },
            { icon: FaApple, label: 'Apple Music', url: config.streaming.appleMu sic },
            { icon: FaYoutube, label: 'YouTube Music', url: config.streaming.youtubeMusic },
            { icon: FaSpotify, label: 'SoundCloud', url: config.streaming.soundcloud },
          ].map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary transition"
              >
                <Icon className="text-4xl text-primary" />
                <span className="font-semibold text-white text-center">{platform.label}</span>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/music" className="btn-primary inline-block">
            Explore Full Discography
          </Link>
        </motion.div>
      </div>
    </section>
  );
}