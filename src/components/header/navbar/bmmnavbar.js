import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './bmmnavbar.css';

function BMMnavbar() {
    const [ dropDownActive, setDropDownActive ] = useState(false);

    return(
        <nav class="nav-main">
            <div id="navbar">
                <ul>
                    <li><Link to="/" className="navbarLink"><h3>Home</h3></Link></li>
                    <li>
                        <div class="dropdown">
                        <div id="menu" className="menu navbarLink" tabindex="0" onClick={() => setDropDownActive(dropDownActive => !dropDownActive)}>
                            <h3>Services</h3>
                        </div>
                        </div>
                    </li>
                    <li><Link to="/blog" className="navbarLink"><h3>Blog</h3></Link></li>
                    <li><Link to="/links" className="navbarLink"><h3>Links</h3></Link></li>
                    <li><Link to="/contact" className="navbarLink"><h3>Contact</h3></Link></li>
                </ul>
            </div>
            <ul>
                <div id="dropdown-container">
                    <div id="myDropdown" className={`dropdown-content ${dropDownActive ? "show" : ""}`}>
                        <li>
                            <div id="pandr"> 
                                <Link to="/performance_and_recording" className="navbarLink"><h3>Performance and Recording</h3></Link>
                            </div>
                        </li>
                        <li>
                            <div id="wanda">
                                <Link to="/writing_and_arranging" className="navbarLink"><h3>Writing and Arranging</h3></Link>
                            </div>
                        </li>
                        <li>
                            <div id="teach">
                                <Link to="/teaching" className="navbarLink"><h3>Teaching</h3></Link>
                            </div>
                        </li>
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default BMMnavbar;