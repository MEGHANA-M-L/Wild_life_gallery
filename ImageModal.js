import React from 'react';
import './ImageModal.css'; // Import your CSS for styling

const ImageModal = ({ image, closeModal }) => {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>&times;</span>
        <img src={image.url} alt={`Image ${image.id}`} />
      </div>
    </div>
  );
};

export default ImageModal;
