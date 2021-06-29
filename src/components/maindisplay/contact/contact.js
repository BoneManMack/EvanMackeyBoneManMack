import React, { useState } from 'react';

import './contact.css';

function BMMcontact() {
    const [ status, setStatus ] = useState("Submit");
    const contactFormSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, subject, message, subscribe } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
            subscribe: subscribe.value
        };
        let response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details)
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return(
        <div>
            <form class="contactform" method="post" action="BMMphp/contactform.php">
                <div class="contactformleft">
                    <div className="inputfield">
                        <div className="label">
                            <label htmlFor="name">Name:</label>
                        </div>
                        <div class="contactpageinput"><input type="text" id="fullname" placeholder="Name" required /></div>
                    </div>
                    <div className="inputfield">
                        <div className="label">
                            <label htmlFor="email">Email Address:</label>
                        </div>
                        <div class="contactpageinput"><input type="email" id="email" placeholder="Email Address" required /></div>
                    </div>
                    <div className="inputfield">
                        <div className="label">
                            <label htmlFor="subject">Subject:</label>
                        </div>
                        <div class="contactpageinput"><input type="text" id="subject" placeholder="Subject" required /></div>
                    </div>
                </div>
                <div class="contactformright">
                    <div className="inputfield">
                        <div className="label">
                            <label htmlFor="Message">Message:</label>
                        </div>
                        <div class="contactpageinput"><textarea name="message" type="text" id="message" placeholder="Message" required /></div>
                    </div>
                    <div className="inputfield">
                        <input type="checkbox" id="subscribe" />Subscribe to our monthly newsletter
                    </div>
                </div>
                <div>
                    <button id="contactformsubmit" type="submit" value="Submit" onClick={contactFormSubmit}>{status}</button>
                </div>
            </form>
        </div>
    )
}

export default BMMcontact;