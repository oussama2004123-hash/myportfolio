import { motion, useInView } from 'framer-motion';
import { useRef, useState, type FormEvent } from 'react';
import {
  Send, Mail, MapPin, CheckCircle, AlertCircle, Loader2,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';

const API_URL = '/api/contact';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const input =
    'w-full rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted/50 outline-none transition-all duration-200';

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="inline-block text-[11px] font-semibold text-primary-light/60 tracking-[0.22em] uppercase font-mono">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.5rem] font-bold mt-3 mb-4 leading-tight">
            Let's Build Something{' '}
            <span className="gradient-text-animated">Great</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">

          {/* Left col — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Email card */}
            <a
              href="mailto:oussamahitte6@gmail.com"
              className="glass-card p-5 sm:p-6 group flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
                <Mail size={18} className="text-primary-light/80" />
              </div>
              <div>
                <div className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1">Email</div>
                <div className="text-sm font-medium text-text-primary group-hover:text-primary-light transition-colors leading-relaxed">
                  oussamahitte6@gmail.com
                </div>
                <div className="text-xs text-text-muted mt-1">Best for project inquiries</div>
              </div>
            </a>

            {/* WhatsApp card */}
            <a
              href="https://wa.me/212659404133"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 sm:p-6 group flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <WhatsAppIcon size={18} />
              </div>
              <div>
                <div className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1">WhatsApp</div>
                <div className="text-sm font-medium text-text-primary group-hover:text-emerald transition-colors">+212 659 404 133</div>
                <div className="text-xs text-text-muted mt-1">Quick questions &amp; real-time chat</div>
              </div>
            </a>

            {/* Availability badge */}
            <div className="glass-card p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-2">
                <MapPin size={15} className="text-primary-light/50 flex-shrink-0" />
                <span className="text-sm font-medium text-text-primary">Morocco</span>
                <span className="text-text-muted text-xs">· Remote &amp; Worldwide</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <span className="w-2 h-2 bg-emerald rounded-full animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.5)] flex-shrink-0" />
                Currently open for new projects
              </div>
            </div>
          </motion.div>

          {/* Right col — form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 h-full"
            >
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-1.5">Send a Message</h3>
              <p className="text-text-muted text-xs sm:text-sm mb-6">I'll respond within a few hours.</p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-text-secondary block mb-1.5">Full Name *</label>
                    <input
                      name="name" type="text" required value={form.name} onChange={handleChange}
                      placeholder="Your name" className={input}
                      style={{ background: 'rgba(18,14,40,0.7)', border: '1px solid rgba(139,92,246,0.15)' }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-text-secondary block mb-1.5">Email *</label>
                    <input
                      name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="your@email.com" className={input}
                      style={{ background: 'rgba(18,14,40,0.7)', border: '1px solid rgba(139,92,246,0.15)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-text-secondary block mb-1.5">Subject *</label>
                  <input
                    name="subject" type="text" required value={form.subject} onChange={handleChange}
                    placeholder="Project inquiry, collaboration..." className={input}
                    style={{ background: 'rgba(18,14,40,0.7)', border: '1px solid rgba(139,92,246,0.15)' }}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-text-secondary block mb-1.5">Message *</label>
                  <textarea
                    name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project..." className={`${input} resize-none`}
                    style={{ background: 'rgba(18,14,40,0.7)', border: '1px solid rgba(139,92,246,0.15)' }}
                  />
                </div>
              </div>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mt-4 p-3.5 rounded-xl" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                  <CheckCircle size={16} className="text-emerald flex-shrink-0" />
                  <p className="text-emerald text-sm font-medium">Message sent! I'll respond soon.</p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mt-4 p-3.5 rounded-xl" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                </motion.div>
              )}

              <div className="mt-5">
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold text-white rounded-full transition-all duration-300 hover:shadow-[0_0_24px_rgba(139,92,246,0.25)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)' }}
                >
                  {status === 'sending' ? <><Loader2 size={15} className="animate-spin" /> Sending...</>
                    : status === 'success' ? <><CheckCircle size={15} /> Sent!</>
                      : <><Send size={15} /> Send Message</>}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
