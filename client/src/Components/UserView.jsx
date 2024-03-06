
import React, { useState, useEffect } from 'react';
import './UserView.css';

import ImageGrid from './ImageGrid';

function UserView() {
  const [selectedItems, setSelectedItems] = useState(null);
  const [donations, setDonations] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch('/api/donations');
        if (!response.ok) {
          console.error('Error fetching donations:', response.status, response.statusText);
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setDonations(data.data);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    fetchDonations();
  }, []);

  const handleDonationSelect = (donation) => {
    setSelectedItems(donation);
  };

  const handleAddToBasket = () => {
    if (selectedItems) {
      setBasket([...basket, selectedItems]);
      setSelectedItems(null);
    }
  };

  return (
    <div className='user-view'>
      <h2>Be a Secret Santa!</h2>
      <h2>See our Gift List for Vulnerable Young People</h2>

      <ImageGrid donations={donations} onDonationSelect={handleDonationSelect} />

      <div className='donations-items'>
        <h3>Choose between our gift options</h3>
      </div>

      <div className='selected-items'>
        {selectedItems ? (
          <div>
            <p>Title: {selectedItems.item}</p>
            <p>Description: {selectedItems.itemDescription}</p>
            <p>
              <a href={selectedItems.itemUrl} target='_blank' rel='noopener noreferrer'>
                View Details
              </a>
            </p>
            <button onClick={handleAddToBasket}>Add to Basket</button>
          </div>
        ) : (
          <p>No gift selected</p>
        )}
      </div>

      <div className='basket'>
        <h3>Basket</h3>
        <ul>
          {basket.map((item, index) => (
            <li key={index}>{item.item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserView;