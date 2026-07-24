'use client';

import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-32">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="hero-title mb-6">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: July 24, 2024</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none space-y-6 text-gray-300"
        >
          <div className="glass-effect p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p>
              Vybe Tone ("we," "us," "our") operates the vibetonemusic.com website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h3 className="text-xl font-bold text-white mt-4 mb-2">Personal Data</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Cookies and Usage Data</li>
            </ul>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4">
              Email: <a href="mailto:privacy@vibetonemusic.com" className="text-primary hover:text-accent-gold">privacy@vibetonemusic.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
