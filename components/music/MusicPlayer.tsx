'use client';

import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface MusicPlayerProps {
  music: any;
  onClose: () => void;
}

export default function MusicPlayer({ music, onClose }: MusicPlayerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-dark-900 rounded-2xl p-8 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <FaTimes size={24} />
        </button>

        {/* Player Content */}
        <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-8xl mb-6">
          {music.cover}
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{music.title}</h3>
        <p className="text-gray-300 mb-6">{music.artist}</p>

        {/* Action Links */}
        <div className="space-y-3">
          <a
            href={music.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary block text-center"
          >
            Listen on Spotify
          </a>
          <a
            href={music.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary block text-center"
          >
            Watch on YouTube
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
