'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: 'Live Performance',
    date: 'August 15, 2024',
    time: '8:00 PM',
    location: 'Nairobi, Kenya',
    description: 'Exclusive live performance with special guests',
  },
  {
    id: 2,
    title: 'Album Launch Event',
    date: 'September 1, 2024',
    time: '7:00 PM',
    location: 'Nairobi, Kenya',
    description: 'Launch party for the new album',
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="hero-title mb-6">Events</h1>
          <p className="text-xl text-gray-300">Upcoming performances and appearances</p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-8 rounded-2xl card-hover"
            >
              <div className="mb-6">
                <p className="text-primary font-bold mb-2">{event.date}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.time}</p>
                <p className="text-gray-400 text-sm mb-4">
                  📍 {event.location}
                </p>
              </div>

              <p className="text-gray-300 mb-6">{event.description}</p>

              <button className="btn-primary w-full">
                Get Tickets
              </button>
            </motion.div>
          ))}
        </div>

        {/* Past Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title mb-8">Past Events</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-effect p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-white">Event Title {i}</h4>
                  <p className="text-gray-400 text-sm">June {i * 5}, 2024</p>
                </div>
                <span className="text-gray-400">Completed</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
