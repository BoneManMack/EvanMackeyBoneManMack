import React from 'react';

import './writingandarranging.css';
import MusicWritingAndArranging from './writing_and_arranging_music_sheet_music_transcription.jpg';

function BMMwanda() {
    return(
        <div>
            <div className="container">
                <div id="wandaimg" class="video">
                    <img src={MusicWritingAndArranging} alt="Written, arranged, or transcribed sheet music" id="sheetmusicimg" />
                </div>
                <div id="wandatxt" class="text">
                    <h2>Writing and Arranging</h2>
                    <p>
                        Over the years Evan has had to do a lot of writing and arranging. Starting in his college years he wrote jazz tunes and arranged big band charts from jazz standardsthat he used in various organizations since graduating college. In his professional life, Evan has used his skills to write and arrange horn charts for several of the ensembles he has played in as well as writing and arranging horn parts on the spot for most of the one-off recording sessions he gets called for. Evan's writing and arranging can be heard in the horn parts of the Cliff Beach band and the horn parts for the 2016 to 2020 Eric Burdon and the Animals tour sets. This Ain't Your Daddy's Big Band has full big band arrangements and compositions by Evan in their book.
                    </p>
                </div>
            </div>
            <div>
                <h2 class="cta">Reach out through the contact page for availability and rates.</h2>
            </div>
        </div>
    )
}

export default BMMwanda;