import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skills = [
  { name: 'React / Next.js', category: 'Frontend', color: '#61dafb' },
  { name: 'TypeScript', category: 'Frontend', color: '#3178c6' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#06b6d4' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', color: '#f7df1e' },
  { name: 'HTML5 / CSS3', category: 'Frontend', color: '#e34f26' },
  { name: 'Framer Motion', category: 'Frontend', color: '#a78bfa' },
  { name: 'Node.js / Express', category: 'Backend', color: '#339933' },
  { name: 'REST APIs', category: 'Backend', color: '#22d3ee' },
  { name: 'SQLite / Databases', category: 'Backend', color: '#5294e2' },
  { name: 'Authentication', category: 'Backend', color: '#8b5cf6' },
  { name: 'Java', category: 'Mobile', color: '#ed8b00' },
  { name: 'Kotlin', category: 'Mobile', color: '#7f52ff' },
  { name: 'Android SDK', category: 'Mobile', color: '#3ddc84' },
  { name: 'C/C++ NDK', category: 'Mobile', color: '#00599c' },
  { name: 'Git / GitHub', category: 'Tools', color: '#f05032' },
  { name: 'Docker', category: 'Tools', color: '#2496ed' },
  { name: 'Vite / Webpack', category: 'Tools', color: '#646cff' },
  { name: 'Python', category: 'Tools', color: '#3776ab' },
  { name: 'AI API Integration', category: 'AI', color: '#f59e0b' },
];

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Tools', 'AI'];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="inline-block text-[11px] font-semibold text-primary-light/60 tracking-[0.22em] uppercase font-mono">
            Skills
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.5rem] font-bold mt-3 mb-4 leading-tight">
            Technologies &{' '}
            <span className="gradient-text-animated">Expertise</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            A toolkit built through real project experience across web, mobile, and AI.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-[12px] sm:text-xs font-semibold rounded-full border transition-all duration-250 ${
                active === cat
                  ? 'bg-primary/15 text-primary-light border-primary/35 shadow-[0_0_14px_rgba(139,92,246,0.12)]'
                  : 'bg-transparent text-text-muted border-border hover:border-primary/20 hover:text-text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill Tags Grid */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-3 sm:gap-3.5"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.88 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.2, delay: 0.015 * i }}
              whileHover={{ scale: 1.06, y: -2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[13px] sm:text-sm font-medium text-text-secondary cursor-default transition-all duration-200"
              style={{
                background: 'rgba(18,14,40,0.55)',
                border: '1px solid rgba(139,92,246,0.12)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}30`;
                (e.currentTarget as HTMLElement).style.background = `${skill.color}08`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.12)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(18,14,40,0.55)';
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: skill.color, boxShadow: `0 0 6px ${skill.color}55` }}
              />
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
