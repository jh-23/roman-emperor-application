import NavBar from './NavBar';
import styled from 'styled-components';

function About() {

    const H2 = styled.h2`
    color: red;
    font-size: 3rem;
    `

    const P = styled.p`
    color: white;
    font-size: 1rem;
    `
    const H3 = styled.h3`
    color: red;
    font-size: 1rem;
    `

    return (
        <div className='About'>
            <header>
                <NavBar />
            </header>
            <H2>About the Roman Emperors</H2>
            <H3>Introduction</H3>
            <P>
            The Roman emperor was the ruler and monarchical head of state of the Roman Empire, starting with the granting of the title augustus to Octavian in 27 BC.[2] The term "emperor" is a modern convention, and did not exist as such during the Empire. Often when a given Roman is described as becoming emperor in English, it reflects his taking of the title augustus and later basileus. Another title often used was imperator, originally a military honorific, and caesar, originally a surname. Early emperors also used the title princeps ("first one") alongside other Republican titles, notably consul and pontifex maximus. 
            </P>
            <hr />
            <br />
            <P>The ancient Roman emperors were the rulers of the vast Roman Empire that stretched over three continents at its peak. It was an empire that stretched from Britain in the West to Syria in the East, including the Mediterranean region as well as Northern Africa. The emperors of ancient Rome were the central authority in the empire while the provinces were run by their governors who were directly answerable to the Senate. The power of the emperor lay in their control of the Roman army, meaning emperors often needed the support of the troops or the Roman Senate, or both. Essentialy the Roman emperors were likened to a king, although the disinction was clear that the emperors were not a monarchy which has already been tried and passed over in ancient Rome.
            </P>
            
        </div>

    )
}

export default About;