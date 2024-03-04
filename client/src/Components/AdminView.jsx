import React, { useState } from 'react';
import './AdminView.css';
//import Card.jsx from './Card.jsx';

function AdminView({ addItems }) {
  const [donations, setDonations] = useState({
    title: '',
    description: '',
    url: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDonations((prevDonations) => ({
      ...prevDonations,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItems(donations);
    // Clear the form fields after submitting
    setDonations({
      title: '',
      description: '',
      url: '',
    });
  };

  return (
    <div className="admin-view">
      <h2>Secret Santa</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Donations:
          <input
            type="text"
            name="title"
            value={donations.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={donations.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Gift URL:
          <input
            type="url"
            name="url"
            value={donations.url}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Gift</button>
      </form>
    </div>
  );
}

export default AdminView;