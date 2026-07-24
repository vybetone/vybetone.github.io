'use client';

import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

interface MusicCardProps {
  music: {
    id: number;
    title: string;
    artist: string;
    type: string;
    releaseDate: string;
    cover: string;
    spotifyUrl: string;
    youtubeUrl: string;
  };
  onClick?: () => void;
}

export default function MusicCard({ music, onClick }: MusicCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-effect rounded-lg overflow-hidden cursor-pointer card-hover"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden group bg-dark-800">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl">
          {music.cover}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <FaPlay className="text-4xl text-primary" />
        </motion.div>
      </div>
      <div className="p-4">
        <span className="text-sm text-primary font-semibold">{music.type}</span>
        <h3 className="text-xl font-bold text-white mt-2">{music.title}</h3>
        <p className="text-gray-300 text-sm mt-1">{music.artist}</p>
        <p className="text-gray-400 text-xs mt-2">{music.releaseDate}</p>
      </div>
    </motion.div>
  );
}
