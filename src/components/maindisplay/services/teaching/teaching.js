import React from 'react';

import './teaching.css';
import TeachingImg from './teaching_trombone_method_books.jpg';

function BMMteach() {
    return(
        <div>
            <div className="container">
                <div id="teachtxt" className="text">
                <h2>Teaching</h2>
                <p>
                    As a teacher Evan has worked in many different capacities. While in college Evan was pursuing a credential and spent time studying classroom teaching 
                    by working with active teachers in classroom settings in Burbank Unified School District. Evan also taught group lessons and small ensemble to students 
                    at Canyon High School in Santa Clarita under Randy Gilpin. Lastly, Evan taught private lessons through a music store, an online student teacher pairing 
                    program, and out of his own home which is a practice he continues.
                </p>
                <p>
                    Some times the old ways are the best ways, Evan teaches utilizing standard method books for the trombone. Some times they're not, in order to encourage students 
                    to practice in their spare time it is important that the student have music which they enjoy learning. While taking lessons students will be encouraged to learn 
                    music by ear as well as by reading. Any book with music the student wants to learn to play can be used as a teaching tool for learning the basics of the trombone 
                    as well as developing reading skills to allow them to perform as part of an ensemble.
                </p>
                </div>
                <div id="teachimg" className="video">
                    <img src={TeachingImg} alt="Trombone Teaching Tools and Trombone Method Books" className="subsectionimg" />
                </div>
            </div>
            <div>
                <h2 className="cta">Reach out through the contact page for availability and rates.</h2>
            </div>
        </div>
    )
}

export default BMMteach;