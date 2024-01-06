import React, { useState } from 'react';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';

function EmperorForm() {

    const addEmperor = useOutletContext();
    console.log(addEmperor);

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
        setName("");
        setReign("");
        setImage("");
        setInfo("");

        fetch('http://localhost:3000/emperors', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then((data) => addEmperor(data))
    }

    const H4 = styled.h4`
    color: red;
    font-size: 3rem;
    `

    return (
        <div className="new-emperor-form">
            <H4>Add Roman Emperor Form</H4>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Emperor name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="reign" placeholder="Reign time period" value={reign} onChange={(e) => setReign(e.target.value)} />
                <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                <input type="text" name="info" placeholder="Emperor info" value={info} onChange={(e) => setInfo(e.target.value)} />
                <button type="submit">Add Roman Emperor</button>
            </form>
        </div>
    )
}

export default EmperorForm;