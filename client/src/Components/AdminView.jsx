import { useState } from 'react';
import './Admin.View.css';

function AdminView({ addProject }) {
  const [project, setProject] = useState({
    url: '',
    title: '',
    description: '',
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setProject((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Added!');
    console.log(project);
    // pass data back up to parent using props.addProject();
    addProject(project);
    // don't forget to accept the props in the arguments of the function AdminView
  };

  return (
    <div>
      <h3>Add to basket</h3>
      <form>
        <label>
          Project Title
          <input
            name="Secret Santa"
            value={project.title}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Project URL
          <input
            name="url"
            value={project.url}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className="span-2-cols">
          Project Description
          <textarea
            name="description"
            value={project.description}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <div className="span-2-cols">
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminView;