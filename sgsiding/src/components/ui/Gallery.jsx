import { useEffect, useMemo, useState } from "react";
import { slides } from "../../assets/sidingImages";
import "../styles/Gallery.css";
import { lockBodyScroll, unlockBodyScroll } from "../../utils/scrollLock";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const initialImages = 5;

  const displayedImages = useMemo(
    () => (showAll ? slides : slides.slice(0, initialImages)),
    [showAll],
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      lockBodyScroll();
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (selectedImage) {
        unlockBodyScroll();
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [selectedImage]);

  return (
    <div className="gallery-container">
      <div className="gallery-intro">
        <p className="gallery-eyebrow">Project Showcase</p>
        <h2 className="gallery-title">Featured Exterior Work</h2>
        <div className="title-underline"></div>
        <p className="gallery-description">
          A closer look at custom siding, soffit, and exterior finishing across Vancouver Island.
        </p>
      </div>

      <div className="gallery-grid">
        {displayedImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`gallery-item ${index === 0 ? "gallery-item-featured" : ""}`}
            onClick={() => setSelectedImage(image)}
            aria-label={`Open project photo ${index + 1}`}
          >
            <img src={image.src} alt={image.alt} />
            <div className="gallery-item-overlay">
              <div className="gallery-item-copy">
                {/* <span className="gallery-item-kicker">Featured Project</span> */}
                {/* <strong className="gallery-item-title">{getShowcaseLabel(index)}</strong> */}
                <span className="gallery-item-action">View full image</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="view-more-container">
        {!showAll ? (
          <button className="view-more-button" onClick={() => setShowAll(true)}>
            View More Projects
          </button>
        ) : (
          <button className="view-more-button" onClick={() => setShowAll(false)}>
            Show Less
          </button>
        )}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)} role="presentation">
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-label="Expanded gallery image"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-topbar">
              <div>
                <p className="modal-kicker">SG Siding Portfolio</p>
                <p className="modal-caption">
                  Exterior project photography from the shared site gallery.
                </p>
              </div>
            </div>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close expanded image"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
