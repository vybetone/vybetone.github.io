'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItemProps[] = [
  {
    year: '2020',
    title: 'Beginning',
    description: 'Started creating music and building a fanbase in Nairobi',
  },
  {
    year: '2022',
    title: 'First Release',
    description: 'Released debut single, gaining traction on streaming platforms',
  },
  {
    year: '2023',
    title: 'Growing Presence',
    description: 'Performed at major venues and collaborated with other artists',
  },
  {
    year: '2024',
    title: 'Rising Star',
    description: 'Continued growth with multiple releases and international recognition',
  },
];

export default function Timeline() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="section-title text-center mb-4">Career Timeline</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-cols-2 md:auto-cols-auto' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="glass-effect p-6 rounded-lg">
                  <span className="text-primary font-bold text-xl">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white my-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex justify-center">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-dark-950" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
