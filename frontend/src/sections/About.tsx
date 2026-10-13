import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Smartphone, Brain, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Frontend Engineering',
    description: 'High-performance, accessible interfaces built with React, TypeScript, and modern CSS. Focus on smooth animations and pixel-perfect UI.',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
  },
  {
    icon: Server,
    title: 'Backend Architecture',
    description: 'Scalable server-side solutions with Node.js, REST APIs, databases, and secure authentication. Built for production from day one.',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.08)',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native Android applications using Java and Kotlin, with OpenGL rendering, hardware-level optimizations, and modern UX patterns.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Smart AI-powered features, API orchestration with LLMs, and intelligent automation to accelerate product delivery.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
  },
];

const stats = [
  { value: '3+', label: 'Projects Delivered', icon: TrendingUp, color: '#8b5cf6' },
  { value: '10+', label: 'Technologies', icon: Code2, color: '#22d3ee' },
  { value: '5+', label: 'Years Experience', icon: Brain, color: '#10b981' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block text-[11px] font-semibold text-primary-light/60 tracking-[0.22em] uppercase font-mono">
            About Me
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.5rem] font-bold mt-3 mb-4 leading-tight">
            Engineering{' '}
            <span className="gradient-text-animated">Digital Solutions</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Full stack engineer specializing in production-ready applications — from concept and design through deployment and scale.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card p-5 sm:p-6 text-center"
            >
              <div
                className="text-3xl sm:text-4xl font-bold font-heading mb-1.5"
                style={{ color: s.color }}
              >
                {s.value}
              </div>
              <div className="text-text-muted text-[11px] sm:text-xs font-medium leading-snug">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Service cards — 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.12 + i * 0.07 }}
              className="glass-card p-6 sm:p-7 group"
            >
              {/* Icon badge */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: s.bg, border: `1px solid ${s.color}22` }}
              >
                <s.icon style={{ color: s.color }} size={22} strokeWidth={1.75} />
              </div>

              <h3
                className="font-heading text-[15px] sm:text-base font-semibold mb-2.5 leading-snug"
                style={{ color: '#f0eef8' }}
              >
                {s.title}
              </h3>
              <p className="text-text-secondary text-[13px] sm:text-sm leading-relaxed">
                {s.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
