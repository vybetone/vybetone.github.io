'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // TODO: Integrate with Firebase or email service
      toast.success('Thanks for subscribing!');
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="section-title mb-4">Stay Updated</h2>
          <p className="text-gray-300 text-lg mb-8">Subscribe to our newsletter for exclusive updates and releases</p>

          <form onSubmit={handleSubmit} className="flex gap-4 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary whitespace-nowrap"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}