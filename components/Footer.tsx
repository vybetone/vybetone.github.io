'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook, FaSpotify, FaSoundcloud } from 'react-icons/fa';
import { config } from '@/lib/config';

const socialLinks = [
  { icon: FaYoutube, url: config.social.youtube, label: 'YouTube' },
  { icon: FaTiktok, url: config.social.tiktok, label: 'TikTok' },
  { icon: FaInstagram, url: config.social.instagram, label: 'Instagram' },
  { icon: FaFacebook, url: config.social.facebook, label: 'Facebook' },
  { icon: FaSpotify, url: config.streaming.spotify, label: 'Spotify' },
  { icon: FaSoundcloud, url: config.streaming.soundcloud, label: 'SoundCloud' },
];

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Music', href: '/music' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900/50 border-t border-primary/20 backdrop-blur-md py-16">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-primary mb-4">VYBE TONE</h3>
            <p className="text-gray-300">Music Without Limits</p>
            <p className="text-sm text-gray-400 mt-2">Kenyan Drill, Afro Hip Hop & Dancehall Artist</p>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-white mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href={`mailto:${config.contact.email}`} className="hover:text-primary transition">{config.contact.email}</a></li>
              <li>{config.contact.location}</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 my-8" />

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-primary transition duration-300"
                aria-label={social.label}
              >
                <Icon />
              </a>
            );
          })}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm"
        >
          <p>© 2024 Vybe Tone. All rights reserved. | Music Without Limits</p>
        </motion.div>
      </div>
    </footer>
  );
}