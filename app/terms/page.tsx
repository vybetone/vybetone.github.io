'use client';

import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-32">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="hero-title mb-6">Terms of Service</h1>
          <p className="text-gray-300">Last updated: July 24, 2024</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-gray-300"
        >
          <div className="glass-effect p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Terms and Conditions</h2>
            <p>
              Welcome to vibetonemusic.com. These terms and conditions outline the rules and regulations for the use of Vybe Tone's Website.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">License</h2>
            <p>
              Unless otherwise stated, Vybe Tone and/or its licensors own the intellectual property rights for all material on vibetonemusic.com. All intellectual property rights are reserved.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
            <p className="mb-4">As a user of this website, you agree to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              <li>Not harass or cause distress or inconvenience to any person</li>
              <li>Not obscure, disable or interfere with security-related features of the website</li>
            </ul>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p>
              In no event shall Vybe Tone, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-4">
              Email: <a href="mailto:legal@vibetonemusic.com" className="text-primary hover:text-accent-gold">legal@vibetonemusic.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
