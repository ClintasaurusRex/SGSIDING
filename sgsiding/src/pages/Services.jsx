import "../components/styles/Services.css";
import {
  serviceCards,
  serviceClosing,
  serviceProof,
  serviceSectionIntro,
} from "../assets/serviceInfo";

export default function Services() {
  return (
    <div className="services-container">
      <div className="services-intro">
        <p className="services-eyebrow">{serviceSectionIntro.eyebrow}</p>
        <h1 className="services-title">{serviceSectionIntro.title}</h1>
        <p className="services-description">{serviceSectionIntro.description}</p>
      </div>

      <div className="services-proof-grid">
        {serviceProof.map((item) => (
          <div key={item.label} className="services-proof-card">
            <span className="services-proof-label">{item.label}</span>
            <p className="services-proof-value">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="services-layout">
        {serviceCards.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            details={service.details}
          />
        ))}
      </div>

      <div className="services-closing">
        <div className="conclusion-border" />
        <p className="conclusion-text">{serviceClosing}</p>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, details }) {
  return (
    <div className="service-card">
      <div className="service-card-header">
        <h2 className="service-card-title">{title}</h2>
        <div className="title-underline" />
        <p className="service-card-description">{description}</p>
      </div>

      <div className="service-features">
        {details.map((detail) => (
          <div key={detail} className="service-feature-item">
            <div className="feature-header">
              <div className="feature-icon"></div>
              <p className="feature-description">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
