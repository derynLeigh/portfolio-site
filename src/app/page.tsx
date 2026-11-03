import Orbit from "@/components/Orbit";
import RoleTicker from "@/components/RoleTicker";
import ScrollEffects from "@/components/ScrollEffects";
import TextSizeToggle from "@/components/TextSizeToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { email, experience, music, navLinks, roles, skills, socials, work } from "@/lib/content";

// One set of music tiles is ~1,230px wide; four copies keep the marquee full on screens up to ~3,700px.
const MARQUEE_COPIES = 4;

export default function Home() {
  return (
    <>
      <header className="wrap">
        <nav className="nav">
          <a className="logo" href="#top"><i>D</i>deryncullen.</a>
          <div className="links">
            {navLinks.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>
          <div className="actions">
            <TextSizeToggle />
            <ThemeToggle />
            <a className="btn dark" href="#contact">Say hello</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <div className="wrap hero">
          <span className="wave"><b>👋</b> Hello from West Yorkshire, UK</span>
          <h1><span>I&apos;m</span> Deryn Cullen</h1>
          <RoleTicker roles={roles} />
          <p className="lede">I leave behind <em>working software, clear documentation</em> and a team that understands both.</p>
          <a className="btn dark big" href="#contact">Talk about a contract →</a>
          <Orbit skills={skills} />
        </div>

        <section id="experience" className="wrap">
          <div className="head reveal">
            <div><div className="kicker">Experience</div><h2>Two halves that fit together</h2></div>
            <p>A professional musician for over two decades, then a move into software. Both taught me to balance what&apos;s technical with what&apos;s creative.</p>
          </div>
          <div className="grid2">
            {experience.map(x => (
              <article key={x.title} className="card reveal">
                <div className="badge" style={x.badgeStyle}>{x.badge}</div>
                <h3>{x.title}</h3>
                <div className="meta">{x.meta.map(m => <span key={m}>{m}</span>)}</div>
                <p>{x.body.map((s, k) => (k % 2 ? <b key={k}>{s}</b> : s))}</p>
                <div className="tags">{x.tags.map(t => <span key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="wrap">
          <div className="head reveal">
            <div><div className="kicker">Selected work</div><h2>Things I&apos;ve worked on</h2></div>
            <p>Short case study for each item to be added.</p>
          </div>
          <div className="work">
            {work.map(p => (
              <a
                key={p.title}
                className={`proj ${p.size} reveal`}
                href={p.href}
                {...(p.external && { target: "_blank", rel: "noopener" })}
              >
                <div className="thumb" style={{ background: p.thumb }}>
                  {p.shapes.map((s, k) => <div key={k} className="shape" style={s} />)}
                </div>
                <div className="info">
                  <div><h3>{p.title}</h3><small>{p.subtitle}</small></div>
                  <span className="arrow">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="music">
          <div className="wrap head reveal">
            <div><div className="kicker">The other half</div><h2>Still a musician</h2></div>
            <p>What sixteen years in studios brings to software projects. Hover to pause.</p>
          </div>
          <div className="marquee">
            <div className="track" style={{ "--copies": MARQUEE_COPIES } as React.CSSProperties}>
              {/* Tiles repeat so the strip fills wide screens and loops seamlessly; repeats are hidden from screen readers. */}
              {Array.from({ length: MARQUEE_COPIES }, (_, copy) => music.map(m => (
                <div key={`${copy}-${m.title}`} className="tile" style={{ background: m.bg }} aria-hidden={copy > 0 || undefined}>
                  <span className="em">{m.emoji}</span>
                  <div><h3>{m.title}</h3><p>{m.text}</p></div>
                </div>
              ))).flat()}
            </div>
          </div>
        </section>

        <section id="contact" className="wrap">
          <div className="cta reveal">
            <div className="dots" />
            <h2>Have a project<br />in mind?</h2>
            <p>Available for contract work in software development, technical writing and product ownership, especially where it touches music or creators.</p>
            <a className="btn big" href={`mailto:${email}`}>{email}</a>
            <div className="socials">
              {socials.map(s => <a key={s.href} href={s.href} target="_blank" rel="noopener">{s.label}</a>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <span>© {new Date().getFullYear()} Deryn Cullen · Bradford, UK</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      <ScrollEffects />
    </>
  );
}
