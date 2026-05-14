import "../components/styles/About.css";

const trustPoints = [
  {
    title: "Island-Aware Material Choices",
    description:
      "Projects are approached with Vancouver Island weather in mind, using exterior systems and finishing details that suit damp coastal conditions.",
  },
  {
    title: "Clean Workmanship",
    description:
      "The goal is not just to install cladding, but to deliver a finished exterior that looks sharp up close and reads clean from the street.",
  },
  {
    title: "Custom-Home Mindset",
    description:
      "Whether the project is a new build or a thoughtful update, layout, lines, trim transitions, and finishing details are treated as part of the design.",
  },
  {
    title: "Reliable Local Coordination",
    description:
      "Homeowners and builders get a practical, straightforward process shaped around the pace and expectations of Island residential work.",
  },
];

const commitments = [
  "Premium siding, soffit, and fiber cement work without unnecessary complication.",
  "Exterior packages designed to feel durable, tailored, and visually disciplined.",
  "A local approach rooted in coastal performance, clean execution, and long-term value.",
];

export default function About() {
  return (
    <div className="about-container">
      <div className="about-intro-header">
        <p className="about-eyebrow">Local Trust</p>
        <h2 className="about-title">A local exterior specialist with a custom-build standard.</h2>
      </div>

      <div className="about-content">
        <section className="about-intro">
          <div className="intro-card">
            <p className="intro-text">
              SG Siding works with homeowners and builders who want exterior finishing that feels
              durable, refined, and right for Vancouver Island homes. The focus is on premium
              siding, soffit, and fiber cement installation delivered with clean workmanship and a
              builder-minded process.
            </p>

            <p className="intro-text">
              From custom homes to new build exterior packages, each project is approached as a
              complete composition. Siding lines, soffit detailing, and finish transitions are
              handled with care so the final exterior looks intentional rather than pieced together.
            </p>

            <div className="certification-badge">
              <p>SG Siding is fully covered with liability insurance and WCB.</p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="features-title">Why homeowners choose SG Siding</h2>
          <div className="title-underline"></div>

          <div className="features-grid">
            {trustPoints.map((point) => (
              <FeatureCard key={point.title} title={point.title} description={point.description} />
            ))}
          </div>
        </section>

        <section className="closing-section">
          <div className="closing-card">
            <p className="closing-eyebrow">What you can expect</p>
            <div className="closing-list">
              {commitments.map((item) => (
                <div key={item} className="closing-list-item">
                  <span className="closing-list-marker"></span>
                  <p className="closing-list-text">{item}</p>
                </div>
              ))}
            </div>

            <p className="closing-text">
              The result is exterior work that feels well considered, stands up to coastal exposure,
              and adds lasting confidence to the home.
            </p>

            <div className="cta-section">
              <p className="cta-text">
                Built for Vancouver Island homes. Finished with care. Delivered with a
                straightforward local approach.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="about-description">{description}</p>
      </div>
    </div>
  );
}
