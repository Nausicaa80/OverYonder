import React from 'react';
import './ImageGrid.css'; 
function ImageGrid({ donations, onDonationSelect }) {
  return (
    <div className='image-grid'>
      {donations.map((donation) => (
        <div key={donation.id} className='image-container'>
          <img
            //src={donation.itemImg}
            alt={donation.item}
            onClick={() => onDonationSelect(donation)}
          />
          <button onClick={() => onDonationSelect(donation)}>Select</button>
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;