import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronDown, Monitor, Gamepad2, ShoppingCart, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Madilik.ma',
    type: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce with product catalog, cart, admin dashboard, image uploads, and email order notifications.',
    tags: ['Next.js', 'React', 'Prisma', 'Tailwind', 'Zustand'],
    icon: ShoppingCart,
    liveUrl: 'https://madilik.ma',
    features: [
      'Server Components for fast rendering',
      'Secure Iron Session auth',
      'Prisma ORM + SQLite',
      'Order management with email notifications',
    ],
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
  },
  {
    id: 2,
    title: 'ModXnet.com',
    type: 'Gaming Distribution Platform',
    description:
      'Gaming platform with user auth, game catalogs, community tools, and full admin dashboard for content management.',
    tags: ['Node.js', 'Express', 'SQLite', 'Passport.js'],
    icon: Monitor,
    liveUrl: 'https://modxnet.com',
    features: [
      'Email + Google OAuth authentication',
      'Searchable game catalog with filters',
      'Community reviews & ratings',
      'Admin dashboard for content',
    ],
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.08)',
  },
  {
    id: 3,
    title: 'Streaming App',
    type: 'Mobile Game Streaming',
    description:
      'Android client for PC game streaming with sub-frame latency, hardware decoding, virtual on-screen controllers.',
    tags: ['Java', 'Kotlin', 'Android SDK', 'C/C++ NDK'],
    icon: Gamepad2,
    liveUrl: '',
    features: [
      'Hardware-accelerated decoding',
      'Virtual on-screen controller overlay',
      'Physical controller support',
      'Auto network discovery (mDNS)',
    ],
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="inline-block text-[11px] font-semibold text-primary-light/60 tracking-[0.22em] uppercase font-mono">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.5rem] font-bold mt-3 mb-4 leading-tight">
            Featured{' '}
            <span className="gradient-text-animated">Projects</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Production-grade applications built with modern architectures and clean code.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="glass-card p-6 sm:p-8"
            >
              {/* Top accent border */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[1.25rem] opacity-50"
                style={{ background: `linear-gradient(90deg, transparent 5%, ${p.color} 40%, ${p.color}55 60%, transparent 95%)` }}
              />

              {/* Header */}
              <div className="flex items-start gap-4 sm:gap-5 mb-5">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: p.bg, border: `1px solid ${p.color}22` }}
                >
                  <p.icon style={{ color: p.color }} size={24} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-text-primary leading-tight">{p.title}</h3>
                  <span
                    className="text-[11px] sm:text-xs font-semibold mt-1 inline-block px-2 py-0.5 rounded-md"
                    style={{ color: p.color, background: p.bg }}
                  >
                    {p.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-[13px] sm:text-sm leading-relaxed mb-5">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-lg text-text-muted"
                    style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.12)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expand features */}
              <button
                onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                className="flex items-center gap-1.5 text-[12px] font-semibold mb-4 transition-all duration-200"
                style={{ color: p.color }}
              >
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200"
                  style={{ transform: expanded === p.id ? 'rotate(180deg)' : 'none' }}
                />
                {expanded === p.id ? 'Hide' : 'Show'} Features
              </button>

              {expanded === p.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-5 pl-2"
                >
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] text-text-muted leading-snug">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: p.color }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Actions — separated by border */}
              <div className="flex flex-wrap gap-3 pt-4 border-t" style={{ borderColor: 'rgba(139,92,246,0.08)' }}>
                {p.liveUrl ? (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 text-[12px] font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}bb)` }}
                  >
                    <ExternalLink size={13} />
                    View Live
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                  </a>
                ) : (
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-[12px] font-bold text-white rounded-full"
                    style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}bb)` }}
                  >
                    <ExternalLink size={13} />
                    Request Demo
                  </a>
                )}
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[12px] font-semibold rounded-full text-text-muted hover:text-text-secondary transition-all duration-200"
                  style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.15)' }}
                >
                  <Github size={13} />
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 sm:mt-14"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] hover:-translate-y-0.5"
          >
            Discuss Your Project
            <ArrowRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
