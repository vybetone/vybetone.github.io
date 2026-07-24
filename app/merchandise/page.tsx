'use client';

import { motion } from 'framer-motion';

const merchandise = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: '$25.99',
    image: '👕',
    description: 'Vybe Tone classic t-shirt',
  },
  {
    id: 2,
    name: 'Hoodie',
    price: '$49.99',
    image: '🧥',
    description: 'Premium Vybe Tone hoodie',
  },
  {
    id: 3,
    name: 'Cap',
    price: '$19.99',
    image: '🧢',
    description: 'Adjustable Vybe Tone cap',
  },
  {
    id: 4,
    name: 'Vinyl Record',
    price: '$29.99',
    image: '💿',
    description: 'Limited edition vinyl',
  },
];

export default function Merchandise() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="hero-title mb-6">Merchandise</h1>
          <p className="text-xl text-gray-300">Official Vybe Tone merchandise store</p>
        </motion.div>

        {/* Merchandise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {merchandise.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-lg overflow-hidden card-hover"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl">
                {item.image}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                  <button className="px-4 py-2 bg-primary text-dark-950 rounded-full font-semibold hover:bg-accent-gold transition">
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
