import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

function About() {

    const H2 = styled.h2`
    color: red;
    font-size: 4rem;
    `

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <H2>Roman Emperor App</H2>
            <p>

            </p>
            <hr />
        </div>

    )
}

export default About;