import { useMemo, useEffect } from 'react';

export default function AuraBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 0.6,
        duration: Math.random() * 30 + 22,
        delay: Math.random() * 25,
        opacity: Math.random() * 0.15 + 0.03,
      })),
    []
  );

  // Cursor spotlight tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cursor spotlight */}
      <div className="cursor-spotlight hidden md:block" />

      {/* Morphing gradient blob */}
      <div
        className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px]"
        style={{
          top: '10%',
          left: '15%',
          background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.08) 0%, rgba(34, 211, 238, 0.03) 50%, transparent 70%)',
          animation: 'morph-blob 25s ease-in-out infinite',
        }}
      />

      {/* Secondary orb */}
      <div
        className="absolute w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] rounded-full"
        style={{
          bottom: '5%',
          right: '5%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, transparent 65%)',
          animation: 'aurora-drift-2 30s ease-in-out infinite',
        }}
      />

      {/* Subtle tertiary orb */}
      <div
        className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full"
        style={{
          top: '55%',
          left: '5%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)',
          animation: 'aurora-drift 22s ease-in-out infinite',
        }}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary-light"
          style={{
            left: p.left,
            bottom: '-5px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `float-particle ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
