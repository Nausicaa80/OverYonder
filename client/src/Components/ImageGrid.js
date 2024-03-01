import {useState} from "react";
import Donations from "Donations";
export default function ImageGrid({ projects }) {
    return (
      <>
        <h1>Gift Selection</h1>
        <div className="img-grid">
          
        </div>
        <div className="img-grid">
          {projects.map((p) => (
            <img
              key={p.id}
              src={p.image}
              alt={p.title}
              onClick={(e) => console.log("Handle update image", e)}
            />
          ))}
        </div>
      </>
    );
  }