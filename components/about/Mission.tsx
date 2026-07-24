'use client';

import { motion } from 'framer-motion';
import { FaTarget, FaEye } from 'react-icons/fa';

export default function Mission() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <FaTarget className="text-4xl text-primary" />
            <h3 className="text-3xl font-bold">Mission</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            To create authentic, genre-defying music that resonates with African audiences and tells the stories of the modern generation. Through powerful storytelling and innovative sound production, to elevate the Kenyan music scene on the global stage.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <FaEye className="text-4xl text-secondary" />
            <h3 className="text-3xl font-bold">Vision</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            To become a global ambassador for African music, breaking cultural barriers and inspiring millions worldwide. To create a legacy that transcends music and positively impacts communities through art, entrepreneurship, and social responsibility.
          </p>
        </motion.div>
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title text-center mb-12">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Chart Appearances', desc: 'Multiple playlist features on major platforms' },
            { title: 'Live Performances', desc: 'Performed at premier venues across East Africa' },
            { title: 'Collaborations', desc: 'Worked with established and emerging artists' },
          ].map((achievement, index) => (
            <div key={index} className="glass-effect p-6 rounded-lg text-center">
              <h4 className="text-xl font-bold text-primary mb-2">{achievement.title}</h4>
              <p className="text-gray-300">{achievement.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
