import { useState } from 'react';
import { ArrowUpRight, ArrowDown, Menu, X, Code2, Layers, Smartphone, Github } from 'lucide-react';
import Contact from './sections/Contact';
import ChatWidget from './components/ChatWidget';

const projects = [
  { name: 'Madilik.ma', category: '01 / E-COMMERCE', description: 'A complete shopping experience. Product discovery, a seamless cart, and the tools to manage every order.', stack: ['Next.js', 'Prisma', 'Tailwind CSS'], url: 'https://madilik.ma', theme: 'shop', title: 'Everyday essentials.\nExtraordinary finds.' },
  { name: 'ModXnet.com', category: '02 / GAMING PLATFORM', description: 'A home for players. Game discovery, community reviews, secure authentication, and a full content dashboard.', stack: ['Node.js', 'Express', 'SQLite'], url: 'https://modxnet.com', theme: 'game', title: 'YOUR NEXT\nADVENTURE.' },
  { name: 'Streaming App', category: '03 / ANDROID DEVELOPMENT', description: 'PC gaming, wherever you are. Hardware decoding, on-screen controls, and physical controller support.', stack: ['Kotlin', 'Java', 'Android SDK'], url: '#contact', theme: 'stream', title: 'Big games.\nSmall screen.' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="portfolio">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap">
      <a href="#home" className="wordmark" aria-label="Oussama Hitte home">oh<span>✳</span></a>
      <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        {['Projects', 'About', 'Skills', 'Contact'].map(label => <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <a className="header-contact" href="mailto:oussamahitte6@gmail.com">Let's talk <ArrowUpRight size={17}/></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
    <main id="main">
      <section id="home" className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot"/> AVAILABLE FOR NEW PROJECTS</p>
          <h1>Good ideas.<br/>Great code.<br/><span>Real impact.</span></h1>
          <p className="hero-description">I'm Oussama Hitte, a full stack developer turning ambitious ideas into thoughtful digital experiences.</p>
          <div className="hero-actions"><a className="primary-button" href="#projects">Explore my work <ArrowUpRight size={20}/></a><a className="text-link" href="/resume-Oussama-Hitte.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={17}/></a></div>
          <div className="hero-location">BASED IN MOROCCO <span>•</span> BUILDING FOR THE WEB</div>
        </div>
        <div className="portrait-composition">
          <div className="portrait-label">THE DEVELOPER BEHIND THE PIXELS</div>
          <div className="portrait-frame"><img src="/profile_pic.jpg" alt="Oussama Hitte" fetchPriority="high"/><span className="portrait-star" aria-hidden="true">✳</span></div>
          <div className="portrait-caption"><div><strong>Oussama Hitte</strong><span>Developer. Builder. Problem solver.</span></div><Code2 size={28}/></div>
          <div className="floating-note"><span>const idea =</span><br/><strong>buildSomethingGreat();</strong></div>
        </div>
      </section>
      <div className="hero-bottom wrap"><a href="#projects"><ArrowDown size={16}/> SCROLL TO EXPLORE</a><span>WEB DEVELOPMENT / MOBILE / AI INTEGRATION</span></div>
      <section id="projects" className="work-section wrap">
        <div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Ideas brought<br/>to life<span className="lime">.</span></h2></div><p>A few things I've built.<br/>Each with its own challenge, purpose, and personality.</p></div>
        <div className="project-list">{projects.map(project => <article className="project" key={project.name}>
          <a href={project.url} className={`project-visual ${project.theme}`} target={project.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={`Explore ${project.name}`}>
            <div className="mock-browser"><div className="browser-bar"><i/><i/><i/><span>{project.name.toLowerCase()}</span></div><div className="mock-content"><span className="mock-brand">{project.theme === 'shop' ? 'madilik.' : project.theme === 'game' ? 'MODXNET / PLAY' : 'STREAM / CONNECT'}</span><h3>{project.title}</h3><span className="mock-cta">{project.theme === 'shop' ? 'Discover the collection ↗' : project.theme === 'game' ? 'Find your next game ↗' : 'Ready when you are ↗'}</span><div className="mock-art" aria-hidden="true">{project.theme === 'shop' ? <Layers/> : project.theme === 'game' ? <span>✳</span> : <Smartphone/>}</div></div></div>
            <span className="visual-caption">INTERFACE CONCEPT / PROJECT PREVIEW</span>
          </a>
          <div className="project-copy"><p className="eyebrow">{project.category}</p><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.url} target={project.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{project.url.startsWith('http') ? 'Visit website' : 'Request a demo'} <ArrowUpRight size={20}/></a></div>
        </article>)}</div>
      </section>
      <section id="about" className="about-section"><div className="wrap about-grid"><p className="eyebrow">A LITTLE ABOUT ME</p><div><h2>I care about how it looks.<br/><span>And how it works.</span></h2><p>I design and build web applications, mobile experiences, and AI integrations. From the first interface to the API behind it, I enjoy connecting the details that make a product feel complete.</p><p>My approach is simple: understand the problem, build with purpose, and keep improving the experience.</p><a className="text-link" href="mailto:oussamahitte6@gmail.com">Let's build something together <ArrowUpRight size={18}/></a></div></div></section>
      <section id="skills" className="skills-section wrap"><div className="section-heading"><div><p className="eyebrow">MY TOOLKIT</p><h2>The right tools.<br/>Thoughtful execution.</h2></div><p>From interface to infrastructure,<br/>and everything in between.</p></div><div className="skill-grid">{[
        { icon: Code2, title: 'Frontend', text: 'React / Next.js / TypeScript / JavaScript / Tailwind CSS / Framer Motion' },
        { icon: Layers, title: 'Backend & AI', text: 'Node.js / Express / REST APIs / SQLite / Authentication / AI API integration' },
        { icon: Smartphone, title: 'Mobile & tools', text: 'Java / Kotlin / Android SDK / C++ NDK / Git / Docker / Python' },
      ].map(skill => <div className="skill-item" key={skill.title}><skill.icon size={26}/><h3>{skill.title}</h3><p>{skill.text}</p></div>)}</div></section>
      <Contact/>
    </main>
    <footer className="site-footer wrap"><a className="wordmark" href="#home">oh<span>✳</span></a><p>© {new Date().getFullYear()} Oussama Hitte</p><a href="https://github.com/oussama2004123-hash" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={15}/></a><a href="#home">Back to top ↑</a></footer>
    <ChatWidget/>
  </div>;
}
