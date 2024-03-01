import React, { useState } from 'react';
import './App.css';
import AdminView from './components/AdminView';
import UserView from './components/UserView';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleView = () => {
    setIsAdmin((prevIsAdmin) => !prevIsAdmin);
  };

  return (
    <div className="App">
      <h1>Secret Santa App</h1>
      <button onClick={toggleView}>
        Switch to {isAdmin ? 'User View' : 'Admin View'}
      </button>
      {isAdmin ? <AdminView /> : <UserView />}
    </div>
  );
}

export default App;
