import React from 'react';

import './ImageGrid.css'; // Import or create a CSS file for styling

const ImageGrid = ({ donationItems }) => {
  return (
    <div className="image-grid">
      {donationItems.map((item) => (
        <div key={item.id} className="image-item">
          <img src={item.imageUrl} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;