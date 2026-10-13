import { Mail, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';

const socialLinks = [
  { icon: InstagramIcon, href: 'https://www.instagram.com/oussama.hitte?utm_source=qr&igsh=MTQ1MG92MWU3MzN6NA==', label: 'Instagram' },
  { icon: FacebookIcon, href: 'https://www.facebook.com/ipm.kira', label: 'Facebook' },
  { icon: WhatsAppIcon, href: 'https://wa.me/212659404133', label: 'WhatsApp' },
  { icon: () => <Mail size={14} />, href: 'mailto:oussamahitte6@gmail.com', label: 'Email' },
];

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-primary/[0.04]" style={{ background: 'linear-gradient(180deg, #07050e 0%, #030208 100%)' }}>
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8">

        {/* Main footer — simple row */}
        <div className="py-12 sm:py-16 flex flex-col items-center text-center gap-8">

          {/* Wordmark */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleClick('#home'); }} className="font-heading text-lg font-bold tracking-[0.08em] uppercase">
            <span className="gradient-text">OUSSAMA</span>
            <span className="text-text-muted font-light ml-0.5">.</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className="text-text-muted text-xs hover:text-text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-white/[0.02] border border-primary/[0.06] flex items-center justify-center text-text-muted hover:text-primary-light/70 hover:border-primary/15 transition-all duration-300"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-primary/[0.04] flex items-center justify-between">
          <p className="text-text-muted text-[10px] sm:text-[11px] flex items-center gap-1">
            &copy; {year} Oussama Hitte. Made with{' '}
            <Heart size={9} className="text-rose fill-rose" /> and code.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-text-muted text-[10px] sm:text-[11px] hover:text-primary-light/60 transition-colors"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
