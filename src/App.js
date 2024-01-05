import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import EmperorForm from './EmperorForm';
import { Outlet } from "react-router-dom"
import NavBar from './NavBar';
import EmperorCard from './EmporerCard';
import styled from 'styled-components';

function App() {

    const [emperors, setEmperors] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/emperors')
          .then((r) => r.json())
          .then((data) => setEmperors(data))
  }, [])

    function addEmperor(newEmperor) {
      const updatedEmperors = [...emperors, newEmperor]
      console.log(updatedEmperors);
      setEmperors(updatedEmperors);
    }

    const emperorList = emperors.map((emperor) => {
      return <EmperorCard key={emperor.id} emperor={emperor} />
    });

    const H1 = styled.h1`
    color: red;
    font-size: 4rem;
    `

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <H1>My Roman Emperor App</H1>
      <Outlet context={addEmperor} />
      {emperorList}
    </div>
  );
}

export default App;
