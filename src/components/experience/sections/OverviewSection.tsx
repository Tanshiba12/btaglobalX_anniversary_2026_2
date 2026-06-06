import { overviewParagraphs } from "../config/experienceContent";
export function OverviewSection() {
  const stages = [
    ["01", "Arrive", "Guests step into an anniversary stage built for visibility, connection, and momentum."],
    ["02", "Engage", "Forum, art, wellness, media, and partnerships turn the day into a guided sequence."],
    ["03", "Be Honored", "The night closes with culture, gala recognition, awards, and a room designed to remember names."]
  ];

  return (
    <section className="site-section overview-section" id="overview">
      <div className="section-inner overview-grid">
        <div className="section-heading is-left" data-animate="text">
          <p>Event overview</p>
          <h2>A living anniversary stage</h2>
        </div>
        <div className="overview-copy" data-stagger>
          {overviewParagraphs.map((paragraph) => (
            <p data-stagger-item key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="overview-passport" data-animate="card" aria-label="Event experience path">
          {stages.map(([number, title, body]) => (
            <article key={title}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
