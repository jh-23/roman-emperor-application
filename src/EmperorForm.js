import React, { useState } from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

function EmperorForm({ onAddEmperor }) {

    const [name, setName] = useState("");
    const [reign, setReign] = useState("");
    const [image, setImage] = useState("");
    const [info, setInfo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name: name,
            reign: reign,
            image: image,
            info: info,
        }
        fetch('http://localhost:3000/emperors', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then((data) => onAddEmperor(data))
    }

    const H2 = styled.h2`
    color: red;
    font-size: 4rem;
    `

    return (
        <div className="roman-emperor-form">
            <header>
                <NavBar />
            </header>
        <div className="new-emperor-form">
            <H2>New Emperor Form</H2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Emperor name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="reign" placeholder="Reign time period" value={reign} onChange={(e) => setReign(e.target.value)} />
                <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                <input type="text" name="info" placeholder="Emperor info" value={info} onChange={(e) => setInfo(e.target.value)} />
                <button type="submit">Add Roman Emperor</button>
            </form>
        </div>
        </div>
    )
}

export default EmperorForm;