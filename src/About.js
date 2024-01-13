import NavBar from './NavBar';
import styled from 'styled-components';

function About() {

    const H2 = styled.h2`
    color: red;
    font-size: 3rem;
    `

    const P = styled.p`
    color: red;
    font-size: 2rem;
    `
    const H4 = styled.h4`
    color: red;
    font-size: 1rem;
    `

    return (
        <div className='About'>
            <header>
                <NavBar />
            </header>
            <H2>About the App</H2>
            <H4>Roman Emperor Introduction</H4>
            <P>
            The Roman emperor was the ruler and monarchical head of state of the Roman Empire, starting with the granting of the title augustus to Octavian in 27 BC.[2] The term "emperor" is a modern convention, and did not exist as such during the Empire. Often when a given Roman is described as becoming emperor in English, it reflects his taking of the title augustus and later basileus. Another title often used was imperator, originally a military honorific, and caesar, originally a surname. Early emperors also used the title princeps ("first one") alongside other Republican titles, notably consul and pontifex maximus.
            </P>
        </div>

    )
}

export default About;