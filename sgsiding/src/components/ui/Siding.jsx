import { useEffect, useMemo, useState } from "react";
import "../styles/Siding.css";
import { slides } from "../../assets/sidingImages";

const heroHighlights = [
  "Premium siding installation",
  "Custom soffit detailing",
  "Fiber cement and Hardie expertise",
];

const heroCaptions = [
  "Custom exterior work designed for Vancouver Island homes.",
  "Clean siding lines and durable finishes built for coastal weather.",
  "Detail-driven installation for new builds and refined exterior upgrades.",
  "Premium materials, careful layout, and a sharper finished look.",
  "Craftsmanship-first exterior finishing with a local perspective.",
  "Project photography from SG Siding installations already in the repo.",
];

export default function Siding() {
  const heroSlides = useMemo(() => slides.slice(0, 6), []);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) =>
        currentIndex === heroSlides.length - 1 ? 0 : currentIndex + 1,
      );
    }, 5600);

    return () => window.clearInterval(intervalId);
  }, [heroSlides.length]);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");

    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">Vancouver Island Exterior Specialist</p>
          <h1 className="hero-title">SG Custom Exteriors</h1>
          <p className="hero-lead">
            Premium siding, soffit, and fiber cement installation for Vancouver Island homes and new
            builds.
          </p>
          <p className="hero-description">
            SG Siding delivers refined exterior work with a builder&apos;s eye for detail, durable
            materials, and a clean finish that feels at home on the coast.
          </p>

          <div className="hero-highlights" aria-label="Key services">
            {heroHighlights.map((highlight) => (
              <span key={highlight} className="hero-highlight-pill">
                {highlight}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="mailto:shaungersthofer@gmail.com">
              Request a Quote
            </a>
            <button
              type="button"
              className="hero-button hero-button-secondary"
              onClick={scrollToGallery}
            >
              View Recent Work
            </button>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-block">
              <span className="hero-meta-label">Serving</span>
              <span className="hero-meta-value">Cowichan Valley and Vancouver Island</span>
            </div>
            <div className="hero-meta-block">
              <span className="hero-meta-label">Focus</span>
              <span className="hero-meta-value">
                Custom siding, soffit, fiber cement, and new builds
              </span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-frame">
            <div className="hero-frame-topbar">
              <span className="hero-frame-label">Featured Project Photos</span>
              <span className="hero-frame-count">
                {String(activeSlideIndex + 1).padStart(2, "0")} /{" "}
                {String(heroSlides.length).padStart(2, "0")}
              </span>
            </div>

            <div className="hero-carousel" aria-live="polite">
              {heroSlides.map((slide, index) => (
                <figure
                  key={slide.id}
                  className={`hero-slide ${index === activeSlideIndex ? "is-active" : ""}`}
                  aria-hidden={index !== activeSlideIndex}
                >
                  <img src={slide.src} alt={slide.alt || `SG Siding project photo ${index + 1}`} />
                </figure>
              ))}
              <div className="hero-carousel-scrim" />
            </div>

            <div className="hero-carousel-footer">
              <p className="hero-carousel-caption">{heroCaptions[activeSlideIndex]}</p>
              <div className="hero-carousel-dots" aria-label="Hero slide picker">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`hero-dot ${index === activeSlideIndex ? "is-active" : ""}`}
                    onClick={() => setActiveSlideIndex(index)}
                    aria-label={`Show hero photo ${index + 1}`}
                    aria-pressed={index === activeSlideIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
