'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Integrate with Firebase or email service
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="block text-white font-semibold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Subject</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-primary/30 text-white focus:outline-none focus:border-primary transition"
        >
          <option value="" className="bg-dark-900">Select a subject</option>
          <option value="booking" className="bg-dark-900">Booking Inquiry</option>
          <option value="collaboration" className="bg-dark-900">Collaboration</option>
          <option value="media" className="bg-dark-900">Media Inquiry</option>
          <option value="general" className="bg-dark-900">General Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition resize-none"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
  );
}
