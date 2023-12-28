import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Emperors from './Emperors';
import EmperorForm from './EmperorForm';
import NavBar from './NavBar';

function App() {

    const [emperors, setEmperors] = useState([]);

    function handleAddNewEmperor(newEmperor) {
      const updatedEmperors = [...emperors, newEmperor]
      console.log(updatedEmperors);
      setEmperors(updatedEmperors);
    }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <h1>Roman Empire App</h1>
      <EmperorForm handleAddNewEmperor={handleAddNewEmperor} />
    </div>
  );
}

export default App;
