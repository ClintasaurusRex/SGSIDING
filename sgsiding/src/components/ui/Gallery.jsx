import { useState } from 'react';
import { slides } from '../../assets/sidingImages';
import '../styles/Gallery.css';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? slides : slides.slice(0, 3);

  return (
    <div className='gallery-container'>
      <h2 className='gallery-title'>Our Work</h2>
      <div className='title-underline'></div>

      <div className='gallery-grid'>
        {displayedImages.map((image) => (
          <div
            key={image.id}
            className='gallery-item'
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.alt} />
            <div className='gallery-item-overlay'>
              <span>View Larger</span>
            </div>
          </div>
        ))}
      </div>

      <div className='view-more-container'>
        {!showAll ? (
          <button className='view-more-button' onClick={() => setShowAll(true)}>
            View More Projects
          </button>
        ) : (
          <button
            className='view-more-button'
            onClick={() => setShowAll(false)}
          >
            Show Less
          </button>
        )}
      </div>

      {selectedImage && (
        <div className='modal-overlay' onClick={() => setSelectedImage(null)}>
          <div className='modal-content'>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button
              className='modal-close'
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
