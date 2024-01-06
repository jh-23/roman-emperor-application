import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components'

function Resources() {

    const H3 = styled.h3`
    color: red;
    font-size: 3rem;
    `

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <br />
            <main>
                <H3>Resources</H3>
                <p>Emperor information and images extracted from the following websites:</p>
                <ul>
                    <li>https://www.history.com/news/timeline-emperors-roman-republic</li>
                    <li>https://www.thecollector.com/roman-emperors/</li>
                    <li>https://www.metmuseum.org/toah/hd/roru/hd_roru.htm</li>
                    <li>https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Augustus_of_Prima_Porta_%28inv._2290%29.jpg/1024px-Augustus_of_Prima_Porta_%28inv._2290%29.jpg</li>
                    <li>https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Nero_Glyptothek_Munich_321.jpg/1280px-Nero_Glyptothek_Munich_321.jpg</li>
                    <li>https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/CVT_APX_Amphitheater_Traiansstatue.jpg/1024px-CVT_APX_Amphitheater_Traiansstatue.jpg</li>
                    <li>https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/MSR-ra-61-b-1-DM.jpg/1280px-MSR-ra-61-b-1-DM.jpg</li>
                    <li>https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Commodus_Musei_Capitolini_MC1120.jpg/1024px-Commodus_Musei_Capitolini_MC1120.jpg</li>
                </ul>
            </main>  
        </div>
    )
}

export default Resources;