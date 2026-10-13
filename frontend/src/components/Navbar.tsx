import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#07050e]/80 backdrop-blur-2xl border-b border-primary/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center h-[68px]">
          {/* Left: Wordmark */}
          <div className="flex items-center">
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleClick('#home'); }}
              className="font-heading text-lg font-bold tracking-[0.08em] uppercase"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="gradient-text">OUSSAMA</span>
              <span className="text-text-muted font-light ml-0.5">.</span>
            </motion.a>
          </div>

          {/* Center: Navigation pill */}
          <div
            className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-full"
            style={{
              background: 'rgba(12, 9, 22, 0.55)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(139, 92, 246, 0.06)',
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-text-primary'
                      : 'text-text-muted hover:text-text-secondary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #8b5cf6, #22d3ee)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right: CTA */}
          <div className="flex items-center justify-end">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gradient px-5 py-2.5 text-[13px] font-semibold flex items-center gap-1.5"
            >
              <span className="relative z-10 flex items-center gap-1.5 text-white">
                Hire Me
                <ArrowUpRight size={14} />
              </span>
            </motion.a>
          </div>
        </div>

        {/* Mobile header */}
        <div className="flex md:hidden items-center justify-between h-14">
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleClick('#home'); }}
            className="font-heading text-base font-bold tracking-[0.08em] uppercase ml-1"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="gradient-text">OUSSAMA</span>
            <span className="text-text-muted font-light ml-0.5">.</span>
          </motion.a>

          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl text-text-muted hover:text-text-primary transition-colors -mr-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-14 bg-[#07050e]/95 backdrop-blur-3xl z-40"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex flex-col items-center justify-center h-full gap-2 px-6 pb-24"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className={`text-xl font-heading font-medium py-3 px-4 transition-colors ${
                    activeSection === link.href.slice(1) ? 'gradient-text' : 'text-text-muted'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white text-base font-semibold rounded-full"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
