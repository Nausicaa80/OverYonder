import React, { useState } from 'react';
import './AdminView.css';

function AdminView({ addItems }) {
  const [donations, setDonations] = useState({
    title: '',
    description: '',
    url: '',
  });

  // // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setDonations((prevDonations) => ({
  //     ...prevDonations,
  //     [name]: value,
  //   }));
  // // };

  const sendThankYouEmail = async () => {
    try {
      const response = await fetch('/api/sendThankYouEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'recipient@example.com', // replace with the recipient's email address
          subject: 'Thank You for Being a Secret Santa',
          message: 'Thank you for your generous donation!',
        }),
      });

      if (!response.ok) {
        console.error('Failed to send thank you email:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error sending thank you email:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addItems(donations);
    await sendThankYouEmail();
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
        {/* ... (your form inputs) */}
        <button type="submit">Send Thank You</button>
      </form>
    </div>
  );
}

export default AdminView;