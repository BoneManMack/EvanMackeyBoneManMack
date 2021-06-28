import React from 'react';

import './performanceandrecording.css';

function BMMpandr() {
    return(
        <div>
            <div className="container">
                <div id="prat1" className="text">
                    <h2>Recording</h2> 
                    <p>
                        In the modern era, recording has gained a new dimension. Gone are the days of worrying about wearing out two-inch tape, in are the days of 1,000 easy punches. 
                        The mentality behind the sessions of the olden days remains though. You don't call a musician on to your session to have them spend hours struggling to play one riff,
                        you call them because they can lay it down in one pass and move on. You hire the best not to see them, you hire them to not see them. This way of thinking is maintained 
                        in the best orchestras, big bands, movie recording sessions, and rock sessions. Why spend more on a studio then you should have to? It is a mentality Evan maintains as  
                        a professional and brings with him to every session. It's about nailing it the first time and not having to make a second attempt. It's about playing the right notes
                        with good intonation and tone quality in time.          
                    </p>
                </div>
                <div id="prav1" className="video">
                        <aside>
                            <iframe className="video-embed" width="560" height="315" src="https://www.youtube.com/embed/8RSfKlcDMEc" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen />
                        </aside>
                </div>
                <div id="prat2" className="text">
                    <h2>Performance</h2>  
                    <p id="prd2">
                        The art of performance is an entirely different beast from recording. While a great many things go into recording, live performance adds 
                        layers on top of the necessary skills to perform on ones instrument. What can be expected can vary even by style. In popular music styles 
                        the expectation is to dance while on stage adding a level of physicality beyond to the physical demands of your instrument. It is important 
                        to remember that movement should match the music, you as a viewer would find it odd to hear a string quartet playing the music of Brahms but 
                        visually rocking out like they were performing Led Zeppelin. Evan's experience working with ensembles performing in a variety of styles and is 
                        capable of adapting to the needs of the ensemble he is performing with. 
                    </p>
                </div>
                <div id="prav2" className="video">
                    <aside>
                        <iframe className="video-embed" width="560" height="315" src="https://www.youtube.com/embed/O1Q5uQg2xAQ" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen />
                    </aside> 
                </div>
            </div>  
            <div>
                <h2 className="cta">Reach out through the contact page for availability and rates.</h2>
            </div>
        </div>
    )
}

export default BMMpandr;