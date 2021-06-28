import React from 'react';
import { Switch, Route } from 'react-router';

import './bmmmaindisplay.css';

import BMMhome from './home/bmmhome';
import BMMpandr from './services/performanceandrecording/performanceandrecording';
import BMMblog from './blog/bmmblog';

import BMMerror from './error/bmmerror';

function BMMmaindisplay() {
    return(
        <div>
            <main>
                <Switch>
                    <Route path="/" exact component={BMMhome} />
                    <Route path="/performance_and_recording" component={BMMpandr} />
                    <Route path="/blog" component={BMMblog} />
                    <Route path="*" component={BMMerror} />
                </Switch>
            </main>
        </div>
    )
}

/* HOLDING AREA FOR FUTURE COMPONENTS-----------------------------------------------
                    
                    <Route path="/writing_and_arranging" component={BMMwanda} />
                    <Route path="/teaching" component={BMMteach} />
                    <Route path="/links" component={BMMlinks} />
                    <Route path="/contact" component={BMMcontact} />
----------------------------------------------------------------------------------*/

export default BMMmaindisplay