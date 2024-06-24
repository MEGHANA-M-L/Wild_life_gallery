import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import ImageModal from './ImageModal';
import './App.css'; // Import your CSS for styling

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <h1>WildLife Image Gallery</h1>
      <ImageGallery openModal={openModal} />
      {selectedImage && <ImageModal image={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default App;
