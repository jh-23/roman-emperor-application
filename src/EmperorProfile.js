import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

function EmperorProfile() {
    const [emperor, setEmperor] = useState([]);
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
        //Conditional rendering to make sure app doesn't error out while it's waiting for the emperor to be fetched.  
    }

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>{emperor.name}</h1>
                <h3>Reign: {emperor.reign}</h3>
                <p>Emperor Info: {emperor.info}</p>
                <img src={emperor.image} alt={emperor.name} />
            </main>
        </div>
    )
}

export default EmperorProfile;