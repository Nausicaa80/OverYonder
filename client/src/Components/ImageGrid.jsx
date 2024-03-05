import Card from "./Card";
import React from "react";
//import Items from "./items.js";


export default function ImageGrid({ donations }) {
  return (
    <>
      
      <div className="img-grid">
       {/* <Card number={1} project={projects[0]} /> */}
        {/* <Card number={2} project={projects[1]} /> */}
        {/* <Card number={3} project={projects[2]} /> */}
        {/* <Card number={4}project={projects[2]}/> */}
      </div>
      <div className="img-grid">
        {donations.map((p) => (
          <img
            key={p.id}
            src={p.itemUrl}
            alt={p.item}
            onClick={(e) => console.log("Handle update image", e)}
          />
        ))}
      </div>
    </>
  );
}