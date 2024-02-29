import { useState } from "react";
import './User.View.css';

function UserView(props) {

    return (
      <div>
        <h3>Choose your Gift</h3>
  
        <div className="img_grid">
          {props.allProjects.map((project) => (
            
            <div className="project" key={project.id}>
              <img src={project.url} />
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              <Link to={`/user/${project.id}`}>See more details</Link>
            </div>
          ))}
        </div>
  
      </div>
    );
  }
  
  export default UserView;
  