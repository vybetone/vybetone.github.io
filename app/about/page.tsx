'use client';

import { motion } from 'framer-motion';
import Timeline from '@/components/about/Timeline';
import Mission from '@/components/about/Mission';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="hero-title mb-6">About Vybe Tone</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A raw voice from Nairobi, blending Afro, Dancehall, Drill, and Hip Hop with street energy, hard bars, and real stories.
          </p>
        </motion.div>

        {/* Biography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-effect p-8 md:p-12 rounded-2xl">
            <h2 className="section-title mb-6">Biography</h2>
            <div className="space-y-6 text-gray-200 leading-relaxed">
              <p>
                Vybe Tone represents a new generation of Kenyan artists who refuse to be confined by genre boundaries. Born and raised in Nairobi, he brings authentic storytelling to the intersection of Drill, Afro Hip Hop, Dancehall, and Afrobeat.
              </p>
              <p>
                With a distinct sound that blends street energy with melodic finesse, Vybe Tone captures the essence of contemporary African music while maintaining deep roots in the culture and struggle of his community.
              </p>
              <p>
                His music is more than entertainment—it's a narrative of resilience, ambition, and the vibrant pulse of Nairobi's underground music scene.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <Mission />

        {/* Timeline */}
        <Timeline />
      </div>
    </div>
  );
}