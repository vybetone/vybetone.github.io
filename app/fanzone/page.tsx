'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FanZone() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="hero-title mb-6">Fan Zone</h1>
          <p className="text-xl text-gray-300">Connect with the Vybe Tone community</p>
        </motion.div>

        {/* Fan Zone Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: 'Newsletter',
              description: 'Get exclusive updates, early releases, and special content',
              cta: 'Subscribe Now',
            },
            {
              title: 'Exclusive Content',
              description: 'Access behind-the-scenes photos, video clips, and more',
              cta: 'Join Now',
            },
            {
              title: 'Fan Community',
              description: 'Connect with other fans and share your love for Vybe Tone',
              cta: 'Join Community',
            },
            {
              title: 'Polls & Voting',
              description: 'Vote on upcoming features, releases, and tour locations',
              cta: 'Vote Now',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-8 rounded-2xl card-hover"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <button className="btn-primary">{feature.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
