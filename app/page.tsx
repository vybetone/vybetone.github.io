'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Featured from '@/components/sections/Featured';
import Music from '@/components/sections/Music';
import Stats from '@/components/sections/Stats';
import Newsletter from '@/components/sections/Newsletter';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Hero />
      <Featured />
      <Music />
      <Stats />
      <Newsletter />
    </motion.div>
  );
}