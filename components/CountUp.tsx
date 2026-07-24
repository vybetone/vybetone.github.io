'use client';

import { useState, useEffect } from 'react';

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ end, suffix = '', duration = 2 }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        if (isMounted) setCount(end);
        clearInterval(timer);
      } else {
        if (isMounted) setCount(Math.floor(current));
      }
    }, (duration * 1000) / steps);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, [end, duration]);

  return <>{count}{suffix}</>;
}
