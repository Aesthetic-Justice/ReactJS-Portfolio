import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar subtitle is-6 is-right">
            <ul className="navbar-brand columns is-vcentered is-centered is-multiline">
                <li>
                    <Link className="column" to="/">About Me</Link>
                </li>
                <li>
                    <Link className="column" to="/projects">Projects</Link>
                </li>
                <li>
                    <Link className="column" to="/resume">Resume</Link>
                </li>
                <li>
                    <Link className="column" to="/contact-me">Contact Me</Link>
                </li>
            </ul>

           
        </nav>
    );
};

export default Navigation;