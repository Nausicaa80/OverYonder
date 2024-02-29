import React, { useState } from 'react';
import './UserView.css';

function UserView() {
  const [selectedItems, setSelectedItems] = useState(null);

  const handleSelectedItems = (donation) => {
    setSelectedItems(donation);
  };

  // Replace this with your actual array of donation items
  const donationItems = [
    { id: 1, title: 'Handcream', description: 'Rose Scented Cream', url: 'https://example.com/handcream' },
    // Add other donation items
  ];

  return (
    <div className='user-view'>
      <h2>Be a Secret Santa!</h2>
      <h1>Give a gift to a vulnerable young person</h1>

      <div className="donations-items">
        <h3>Choose between our gift options</h3>
        <ul>
          {donationItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleSelectedItems(item)}>
                {item.title} - {item.description}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="selected-items">
        <h3>Add to basket</h3>
        {selectedItems ? (
          <div>
            <p>Title: {selectedItems.title}</p>
            <p>Description: {selectedItems.description}</p>
            <p>
              <a href={selectedItems.url} target="_blank" rel="noopener noreferrer">
                View Details
              </a>
            </p>
          </div>
        ) : (
          <p>No gift selected</p>
        )}
      </div>
    </div>
  );
}

export default UserView;