import React, { useState } from 'react';

const Card = ({ number, project }) => {
  return (
    <div className="card">
      <h2>Card {number}</h2>
      <div>Card details</div>
      <img src={project.url} alt="" />
    </div>
  );
};

export default Card