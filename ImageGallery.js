import React from 'react';
import './ImageGallery.css'; // Import your CSS for styling

const ImageGallery = ({ openModal }) => {
  const images = [
    { id: 1, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/094_Wild_female_Alpine_Ibex_at_Creux_du_Van_Photo_by_Giles_Laurent.jpg/675px-094_Wild_female_Alpine_Ibex_at_Creux_du_Van_Photo_by_Giles_Laurent.jpg' },
    { id: 4, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Roan_antelope_%28Hippotragus_equinus_koba%29.jpg/675px-Roan_antelope_%28Hippotragus_equinus_koba%29.jpg' },
    { id: 3, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Eastern_quoll_%28Dasyurus_viverrinus%29_fawn_morph_Esk_Valley.jpg/675px-Eastern_quoll_%28Dasyurus_viverrinus%29_fawn_morph_Esk_Valley.jpg' },
    { id: 2, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Short-beaked_echidna_%28Tachyglossus_aculeatus_setosus%29_Scottsdale.jpg/675px-Short-beaked_echidna_%28Tachyglossus_aculeatus_setosus%29_Scottsdale.jpg'},
    { id: 5, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Zaniskari_Horse_in_Ladakh.jpg/675px-Zaniskari_Horse_in_Ladakh.jpg'},
    { id: 6, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/680px-Red_Panda_%2824986761703%29.jpg'},
    { id: 7, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lince_ib%C3%A9rico_%28Lynx_pardinus%29%2C_Almuradiel%2C_Ciudad_Real%2C_Espa%C3%B1a%2C_2021-12-19%2C_DD_07.jpg/450px-Lince_ib%C3%A9rico_%28Lynx_pardinus%29%2C_Almuradiel%2C_Ciudad_Real%2C_Espa%C3%B1a%2C_2021-12-19%2C_DD_07.jpg'},
    { id: 8, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/South-western_black_rhinoceros_%28Diceros_bicornis_occidentalis%29_female.jpg/675px-South-western_black_rhinoceros_%28Diceros_bicornis_occidentalis%29_female.jpg'},
    { id: 9, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg/675px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg'}
    // Add more images as needed
  ];

  return (
    <div className="image-gallery">
      {images.map(image => (
        <div key={image.id} className="image-item">
          <img src={image.url} alt={`Image ${image.id}`} onClick={() => openModal(image)} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
