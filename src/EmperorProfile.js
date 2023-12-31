import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

function EmperorProfile() {
    const [emperor, setEmperor] = useState({});
    const params = useParams();
    const emperorId = params.id;

    useEffect(() => {
        fetch(`http://localhost:3000/emperors/${emperorId}`)
            .then((r) => r.json())
            .then(data => setEmperor(data))
            .catch(error => console.error(error));
    }, [emperorId]);

    if(!emperor.name){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>{emperor.name}</h1>
                <p>Reign: {emperor.reign}</p>
                <img src={emperor.image} alt={emperor.name} />
                <p>Emperor Info: {emperor.info}</p>
            </main>
        </div>
    )
}

export default EmperorProfile;