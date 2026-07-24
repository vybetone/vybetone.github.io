'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Music', href: '/music' },
  { label: 'Videos', href: '/videos' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark-950/80 border-b border-primary/20"
    >
      <div className="container-custom flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black text-primary hover:text-accent-gold transition">
          VYBE TONE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white font-semibold hover:text-primary transition duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="btn-primary hidden md:inline-block"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-900/95 border-t border-primary/20 backdrop-blur-md"
        >
          <div className="container-custom py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-white font-semibold hover:text-primary transition py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary block text-center">
              Book Now
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}