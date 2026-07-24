'use client';

import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';
import Link from 'next/link';

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 flex items-center justify-center pt-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-effect p-8 rounded-2xl max-w-md w-full mx-4"
      >
        <div className="flex items-center justify-center mb-8">
          <FaLock className="text-4xl text-primary mr-4" />
          <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition"
              placeholder="admin@vibetonemusic.com"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Need access?{' '}
          <a href="mailto:admin@vibetonemusic.com" className="text-primary hover:text-accent-gold">
            Request Access
          </a>
        </p>
      </motion.div>
    </div>
  );
}
