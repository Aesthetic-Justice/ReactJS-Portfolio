import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav class="navbar subtitle is-6 is-right">
            <ul class="navbar-brand columns is-vcentered is-centered is-multiline">
                <li>
                    <Link class="column" to="/">About Me</Link>
                </li>
                <li>
                    <Link class="column" to="/projects">Projects</Link>
                </li>
                <li>
                    <Link class="column" to="/resume">Resume</Link>
                </li>
                <li>
                    <Link class="column" to="/contact-me">Contact Me</Link>
                </li>
            </ul>

           
        </nav>
    );
};

export default Navigation;