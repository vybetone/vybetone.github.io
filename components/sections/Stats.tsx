'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from '@/components/CountUp';

const stats = [
  { label: 'Streams', value: 100 },
  { label: 'Social Followers', value: 50 },
  { label: 'Tracks', value: 15 },
  { label: 'Countries', value: 30 },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {inView && <CountUp end={stat.value} suffix="K+" />}
              </div>
              <p className="text-gray-300 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}