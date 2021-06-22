import React from 'react';

import './bmmheader.css';

import BMMnavbar from './navbar/bmmnavbar';

function BMMheader() {
    return(
        <div>
            <div className="titleCard">
                <h1>Evan Mackey</h1>
                <h2>Bone Man Mack</h2>
                <h3>Los Angeles Trombonist</h3>
            </div>
            <BMMnavbar />
        </div>
    )
}

export default BMMheader;