import React from 'react';

import './contact.css';

function BMMcontact() {
    return(
        <div>
            <form class="contactform" method="post" action="BMMphp/contactform.php">
                <div class="contactformleft">
                    <div className="inputfield">
                        <div className="label">
                            <label htmlFor="name">Name:</label>
                        </div>
                        <div class="contactpageinput"><input type="text" id="fullname" placeholder="Name" /></div>
                    </div>
                    <div className="inputfield">
                        <div className="label">
                            <label htmlFor="email">Email Address:</label>
                        </div>
                        <div class="contactpageinput"><input type="email" id="email" placeholder="Email Address" /></div>
                    </div>
                    <div className="inputfield">
                        <div className="label">
                            <label htmlFor="subject">Subject:</label>
                        </div>
                        <div class="contactpageinput"><input type="text" id="subject" placeholder="Subject" /></div>
                    </div>
                </div>
                <div class="contactformright">
                    <div className="inputfield">
                        <div className="label">
                            <label htmlFor="Message">Message:</label>
                        </div>
                        <div class="contactpageinput"><textarea name="message" type="text" id="message" placeholder="Message" /></div>
                    </div>
                    <div className="inputfield">
                        <input type="checkbox"/>Subscribe to our monthly newsletter
                    </div>
                </div>
                <div>
                    <button id="contactformsubmit" type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default BMMcontact;