import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Sun,
  Moon,
  Github,
  Printer,
  Menu,
  X,
  Layers3,
  Code2,
  Workflow,
  Check,
  ExternalLink,
  GraduationCap,
  Award,
} from "lucide-react";
import { motion, MotionConfig } from "motion/react";
import { cv } from "./data/cv";
const sections = ["About", "Experience", "Expertise", "Projects"];
function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "60px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
function Source({
  href,
  children = "View source",
}: {
  href: string;
  children?: ReactNode;
}) {
  return (
    <a className="source" href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}
function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      /* Storage is optional. */
    }
    return matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const [layer, setLayer] = useState(0);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* Storage is optional. */
    }
  }, [theme]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const layers = [
    {
      title: "Architecture",
      caption: "The structure behind the system.",
      icon: Layers3,
    },
    {
      title: "Engineering",
      caption: "Ideas made tangible in code.",
      icon: Code2,
    },
    {
      title: "Leadership",
      caption: "Connecting people and technology.",
      icon: Workflow,
    },
  ];
  const LayerIcon = layers[layer].icon;
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Mirko home">
          mirko<span className="accent">✳</span>
        </a>
        <nav
          aria-label="Main navigation"
          className={menu ? "navigation open" : "navigation"}
          id="navigation"
        >
          {sections.map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              onClick={() => setMenu(false)}
            >
              {name}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="contact-link" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
          <button
            className="icon-button menu-toggle"
            aria-label={menu ? "Close navigation" : "Open navigation"}
            aria-expanded={menu}
            aria-controls="navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main">
        <div className="print-heading">
          <h1>
            {cv.name} <span>({cv.alias})</span>
          </h1>
          <p>
            {cv.role} · {cv.github}
          </p>
        </div>
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> SOFTWARE ARCHITECT & TECHNICAL
              LEAD
            </div>
            <h1 id="hero-title">
              Clarity in complexity.
              <br />
              Craft in <span className="serif">every layer.</span>
            </h1>
            <p className="hero-intro">
              I’m <strong>{cv.name}</strong> — call me Mirko.
              <br />
              {cv.introduction}
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <button
                className="button secondary"
                onClick={() => window.print()}
              >
                <Printer size={16} /> Print / save CV
              </button>
            </div>
            <div className="hero-footnote">
              <span>ARCHITECTURE</span>
              <i /> <span>ENGINEERING</span>
              <i />
              <span>LEADERSHIP</span>
            </div>
          </div>
          <div className="architecture-panel">
            <div className="panel-top">
              <span>THE BIG PICTURE</span>
              <span>FIG. 01 / SYSTEM THINKING</span>
            </div>
            <div
              className={`architecture-art selected-${layer}`}
              aria-hidden="true"
            >
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-axis" />
              <div className="slab slab-top">
                <span>01</span>
                <Layers3 size={35} />
              </div>
              <div className="slab slab-middle">
                <span>02</span>
                <Code2 size={35} />
              </div>
              <div className="slab slab-bottom">
                <span>03</span>
                <Workflow size={35} />
              </div>
              <div className="art-spark">✳</div>
            </div>
            <div className="panel-bottom">
              <div>
                <LayerIcon size={17} />
                <strong>{layers[layer].title}</strong>
                <p aria-live="polite">{layers[layer].caption}</p>
              </div>
              <div
                className="layer-controls"
                aria-label="Explore architecture layers"
              >
                {layers.map((item, i) => (
                  <button
                    key={item.title}
                    aria-label={`Explore ${item.title.toLowerCase()}`}
                    aria-pressed={layer === i}
                    onClick={() => setLayer(i)}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <ArrowDown size={15} /> A little more about me
          </a>
        </section>
        <div className="discipline-strip">
          <div className="wrap flex flex-wrap items-center justify-between gap-5">
            <span>Thoughtful systems.</span>
            <span>Purposeful code.</span>
            <span>Human leadership.</span>
            <span className="strip-star">✳</span>
          </div>
        </div>
        <section className="wrap section" id="about">
          <Reveal>
            <div className="section-label">
              <span>01 / ABOUT</span>
              <span>A PERSON BEHIND THE CODE</span>
            </div>
            <div className="about-grid">
              <h2>
                Seeing the whole.
                <br />
                <span className="serif">Caring for the details.</span>
              </h2>
              <div>
                <p className="large-copy">{cv.about}</p>
                <p className="muted mt-6">
                  Explore the repositories, follow the ideas, and get in touch.
                  Every project here links back to its public source.
                </p>
                <a
                  className="text-link mt-7"
                  href={cv.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} /> Find me on GitHub{" "}
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
        <section className="section tinted" id="experience">
          <div className="wrap">
            <Reveal>
              <div className="section-label">
                <span>02 / EXPERIENCE</span>
                <span>A PUBLIC RECORD</span>
              </div>
              <div className="section-heading">
                <div>
                  <h2>
                    A journey in <span className="serif">building.</span>
                  </h2>
                  <p className="muted">
                    Selected milestones from my public work.
                  </p>
                </div>
                <span className="small-note">
                  PUBLIC PROJECT TIMELINE
                  <br />
                  2014 — 2025
                </span>
              </div>
              <div className="timeline">
                {cv.timeline.map((item, i) => (
                  <article className="timeline-row" key={item.year}>
                    <div className="timeline-year">
                      {item.year}
                      <span
                        className={
                          i === 0 ? "timeline-dot current" : "timeline-dot"
                        }
                      />
                    </div>
                    <h3>{item.title}</h3>
                    <div>
                      <p>{item.text}</p>
                      <Source href={item.source} />
                    </div>
                  </article>
                ))}
              </div>
              <p className="disclosure">
                Employment history and client engagements are not listed without
                verified public sources. These dates reflect repository
                creation, not employment tenure.
              </p>
            </Reveal>
          </div>
        </section>
        <section className="wrap section" id="expertise">
          <Reveal>
            <div className="section-label">
              <span>03 / EXPERTISE</span>
              <span>FROM STRUCTURE TO SOURCE CODE</span>
            </div>
            <h2>
              Different layers.
              <br />
              <span className="serif">One connected perspective.</span>
            </h2>
            <div className="expertise-grid">
              {cv.expertise.map((item, i) => (
                <article className="expertise-card" key={item.title}>
                  <span className="card-index">0{i + 1} /</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>
        <section className="section projects-section" id="projects">
          <div className="wrap">
            <Reveal>
              <div className="section-label">
                <span>04 / SELECTED PROJECTS</span>
                <span>OPEN TO EXPLORATION</span>
              </div>
              <div className="section-heading">
                <div>
                  <h2>
                    Code you can <span className="serif">look into.</span>
                  </h2>
                  <p className="muted">
                    Public repositories. Real starting points.
                  </p>
                </div>
                <div className="filters" aria-label="Filter projects">
                  {["All", "Web", "C#"].map((item) => (
                    <button
                      key={item}
                      aria-pressed={filter === item}
                      onClick={() => setFilter(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="project-grid" aria-live="polite">
                {cv.projects.map((project) => (
                  <article
                    className={`project-card ${filter !== "All" && project.category !== filter ? "filtered-out" : ""}`}
                    key={project.name}
                  >
                    <div className="project-meta">
                      <span>
                        <span className="tiny-dot" /> PUBLIC REPOSITORY
                      </span>
                      <span>{project.year}</span>
                    </div>
                    <div className="project-symbol" aria-hidden="true">
                      {project.category === "C#" ? (
                        <Code2 size={48} strokeWidth={1} />
                      ) : (
                        <Workflow size={48} strokeWidth={1} />
                      )}
                    </div>
                    <h3>
                      <a href={project.url} target="_blank" rel="noreferrer">
                        {project.name}
                        <ArrowUpRight size={22} />
                      </a>
                    </h3>
                    <p>{project.description}</p>
                    <div className="project-footer">
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <Github size={18} aria-hidden="true" />
                    </div>
                  </article>
                ))}
              </div>
              <a
                className="text-link mt-8"
                href={cv.github + "?tab=repositories"}
                target="_blank"
                rel="noreferrer"
              >
                Explore all repositories <ArrowRight size={17} />
              </a>
            </Reveal>
          </div>
        </section>
        <section className="wrap section" id="education">
          <Reveal>
            <div className="section-label">
              <span>05 / LEARNING</span>
              <span>ALWAYS A WORK IN PROGRESS</span>
            </div>
            <div className="learning-grid">
              <div>
                <GraduationCap size={25} className="accent" />
                <h2>Education</h2>
                {cv.education.length ? (
                  cv.education.map((item) => (
                    <article key={item.title}>
                      <h3>{item.title}</h3>
                      <p>
                        {item.institution} · {item.period}
                      </p>
                      <Source href={item.source} />
                    </article>
                  ))
                ) : (
                  <p className="muted">
                    Education details will be added when a verified public
                    source is available.
                  </p>
                )}
              </div>
              <div>
                <Award size={25} className="accent" />
                <h2>Certifications</h2>
                {cv.certifications.map((item) => (
                  <article key={item.title}>
                    <h3>
                      {item.title}{" "}
                      <span className="issuer">/ {item.issuer}</span>
                    </h3>
                    <p className="muted">{item.note}</p>
                    <Source href={item.source}>View shared certificate</Source>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
        <section className="contact-section" id="contact">
          <div className="wrap">
            <Reveal>
              <div className="section-label">
                <span>06 / CONTACT</span>
                <span>GOOD THINGS START WITH A CONVERSATION</span>
              </div>
              <div className="contact-grid">
                <h2>
                  Let’s connect
                  <br />
                  <span className="serif">the dots.</span>
                  <span className="accent">↗</span>
                </h2>
                <div>
                  <p>
                    Have a technical challenge, an interesting idea,
                    <br className="desktop-break" /> or a different perspective?
                    Let’s talk.
                  </p>
                  <a
                    className="button primary"
                    href={cv.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={18} /> Connect on GitHub{" "}
                    <ArrowUpRight size={18} />
                  </a>
                  <p className="contact-note">
                    <Check size={14} /> Direct links. No tracking. No contact
                    forms.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="wrap footer">
        <a href="#" className="wordmark">
          mirko<span className="accent">✳</span>
        </a>
        <span>
          © {new Date().getFullYear()} {cv.name}
        </span>
        <div>
          <button onClick={() => window.print()}>
            <Printer size={14} /> Print CV
          </button>
          <a href="/sources.html">
            Content sources <ExternalLink size={13} />
          </a>
          <a href="#">Back to top ↑</a>
        </div>
      </footer>
      <div className="print-contact">
        {cv.name} · {cv.role} · {cv.github}
      </div>
    </MotionConfig>
  );
}
export default App;
