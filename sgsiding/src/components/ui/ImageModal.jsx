import React from "react";
import "../styles/ImageModal.css";
const ImageModal = ({ src, alt, onClose }) => {
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div className="modal-content">
        <img
          src={src}
          alt={alt}
        />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
