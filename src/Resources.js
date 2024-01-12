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
                <p>Emperor information extracted from the following websites: </p>
                <ul>
                    <li>
                    <a href="https://www.history.com/news/timeline-emperors-roman-republic">https://www.history.com/news/timeline-emperors-roman-republic</a>
                    </li>
                    <li>
                    <a href="https://www.thecollector.com/roman-emperors/">https://www.thecollector.com/roman-emperors/</a>
                    </li>
                    <li>
                    <a href="https://www.metmuseum.org/toah/hd/roru/hd_roru.htm">https://www.metmuseum.org/toah/hd/roru/hd_roru.htm</a>
                    </li>
                </ul>
                <p>Emperor images extracted from the following sources: </p>
                <ul>
                    <li>
                    <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Augustus_of_Prima_Porta_%28inv._2290%29.jpg/1024px-Augustus_of_Prima_Porta_%28inv._2290%29.jpg">https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Augustus_of_Prima_Porta_%28inv._2290%29.jpg/1024px-Augustus_of_Prima_Porta_%28inv._2290%29.jpg</a>
                    </li>
                    <li>
                    <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Nero_Glyptothek_Munich_321.jpg/1280px-Nero_Glyptothek_Munich_321.jpg">https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Nero_Glyptothek_Munich_321.jpg/1280px-Nero_Glyptothek_Munich_321.jpg</a>
                    </li>
                    <li>
                    <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/CVT_APX_Amphitheater_Traiansstatue.jpg/1024px-CVT_APX_Amphitheater_Traiansstatue.jpg">https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/CVT_APX_Amphitheater_Traiansstatue.jpg/1024px-CVT_APX_Amphitheater_Traiansstatue.jpg</a>
                    </li>
                    <li>https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/MSR-ra-61-b-1-DM.jpg/1280px-MSR-ra-61-b-1-DM.jpg</li>
                    <li>https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Commodus_Musei_Capitolini_MC1120.jpg/1024px-Commodus_Musei_Capitolini_MC1120.jpg</li>
                </ul>
            </main>  
        </div>
    )
}

export default Resources;