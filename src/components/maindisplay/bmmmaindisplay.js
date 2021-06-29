import React from 'react';
import { Switch, Route } from 'react-router';

import './bmmmaindisplay.css';

import BMMhome from './home/bmmhome';
import BMMpandr from './services/performanceandrecording/performanceandrecording';
import BMMwanda from './services/writingandarranging/writingandarranging';
import BMMteach from './services/teaching/teaching';
import BMMblog from './blog/bmmblog';
import BMMlinks from './links/links';
import BMMcontact from './contact/contact';

import BMMerror from './error/bmmerror';

function BMMmaindisplay() {
    return(
        <div>
            <main>
                <Switch>
                    <Route path="/" exact component={BMMhome} />
                    <Route path="/performance_and_recording" component={BMMpandr} />
                    <Route path="/writing_and_arranging" component={BMMwanda} />
                    <Route path="/teaching" component={BMMteach} />
                    <Route path="/blog" component={BMMblog} />
                    <Route path="/links" component={BMMlinks} />
                    <Route path="/contact" component={BMMcontact} />
                    <Route path="*" component={BMMerror} />
                </Switch>
            </main>
        </div>
    )
}

/* HOLDING AREA FOR FUTURE COMPONENTS-----------------------------------------------
                    
                    
                    
                    
                    
----------------------------------------------------------------------------------*/

export default BMMmaindisplay