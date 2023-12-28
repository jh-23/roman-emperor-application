import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

function Emperors() {

    const [emperors, setEmperors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/emperors')
            .then((r) => r.json())
            .then((data) => setEmperors(data))
    }, [])

    const emperorsList = emperors.map((emperor) => {
        return <li key={emperor.id}>{emperor.name}</li>
    })

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <h2>Roman Emperors</h2>
            <hr />
            {emperorsList}
        </div>

    )
}

export default Emperors;