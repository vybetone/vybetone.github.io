'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPlay, FaMusic } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-primary font-bold uppercase tracking-wider">Kenyan Artist</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hero-title mb-6"
            >
              Vybe Tone
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-6 leading-relaxed max-w-xl"
            >
              A raw voice from Nairobi, blending Afro, Dancehall, Drill, and Hip Hop with street energy, hard bars, and real stories.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-primary font-bold mb-8"
            >
              Music Without Limits
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <Link href="/music" className="btn-primary inline-flex items-center gap-2">
                <FaMusic /> Listen Now
              </Link>
              <Link href="#featured" className="btn-secondary inline-flex items-center gap-2">
                <FaPlay /> Watch Videos
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center text-6xl"
                >
                  🎵
                </motion.div>
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl -z-10 group-hover:blur-2xl transition" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}