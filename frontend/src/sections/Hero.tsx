import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';

const roles = ['Full Stack Developer', 'Software Engineer', 'UI/UX Designer', 'Problem Solver'];

function useTypingEffect(texts: string[], typingSpeed = 60, deletingSpeed = 35, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

const nameLetters = 'Oussama Hitte'.split('');

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const typedRole = useTypingEffect(roles);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 py-32 sm:py-36 lg:py-40">

        {/* Centered layout — stacked */}
        <div className="flex flex-col items-center text-center">

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 sm:mb-12"
          >
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
              <div className="rotating-ring" />
              <div className="absolute inset-1 rounded-full overflow-hidden bg-dark-lighter flex items-center justify-center">
                {imgError ? (
                  <span className="font-heading text-2xl font-bold gradient-text">OH</span>
                ) : (
                  <img
                    src="/profile_pic.jpg"
                    alt="Oussama Hitte"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald/15 bg-emerald/5 mb-8 sm:mb-10"
          >
            <span className="w-2 h-2 bg-emerald rounded-full animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
            <span className="text-emerald text-xs font-medium tracking-wide">Available for new projects</span>
          </motion.div>

          {/* Name — letter-by-letter */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
          >
            <span className="text-text-secondary block text-lg sm:text-xl md:text-2xl font-normal mb-2 sm:mb-3">Hi, I'm</span>
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                className="gradient-text-animated inline-block"
                style={letter === ' ' ? { width: '0.25em' } : {}}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Typing subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl font-heading font-medium text-text-muted h-8"
          >
            <span className="typing-cursor">{typedRole || '\u00A0'}</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95 }}
            className="mt-6 sm:mt-8 text-sm sm:text-base text-text-secondary max-w-lg leading-relaxed"
          >
            I design and build scalable web applications, AI-powered platforms,
            and mobile solutions that help businesses grow.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5"
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group px-8 py-3.5 text-sm font-bold bg-gradient-to-r from-primary via-primary-light to-accent text-white rounded-full transition-all duration-400 hover:shadow-[0_4px_35px_rgba(139,92,246,0.35)] hover:-translate-y-1 inline-flex items-center justify-center gap-2.5"
            >
              <Sparkles size={15} className="group-hover:rotate-12 transition-transform duration-300" />
              View My Work
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group btn-gradient px-8 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2 text-text-primary group-hover:text-white transition-colors">
                Get In Touch
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-text-muted hover:text-primary-light transition-colors"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
}
