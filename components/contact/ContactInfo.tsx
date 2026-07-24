'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { config } from '@/lib/config';

export default function ContactInfo() {
  const contactItems = [
    { icon: FaPhone, label: 'Phone', value: config.contact.phone },
    { icon: FaEnvelope, label: 'Email', value: config.contact.email },
    { icon: FaMapMarkerAlt, label: 'Location', value: config.contact.location },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {contactItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="glass-effect p-6 rounded-lg flex items-start gap-4">
            <Icon className="text-3xl text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-white mb-2">{item.label}</h3>
              <p className="text-gray-300">{item.value}</p>
            </div>
          </div>
        );
      })}

      {/* Booking Info */}
      <div className="glass-effect p-6 rounded-lg bg-primary/20 border border-primary/40">
        <h3 className="font-bold text-white mb-2 text-lg">Booking & Business Enquiries</h3>
        <p className="text-gray-300">
          For booking, collaborations, or business opportunities, please contact:
        </p>
        <a
          href={`mailto:${config.contact.bookingEmail}`}
          className="text-primary font-semibold hover:text-accent-gold transition mt-3 inline-block"
        >
          {config.contact.bookingEmail}
        </a>
      </div>
    </motion.div>
  );
}
