import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
/*     const NavBar = document.getElementsByClassName('navbar-brand')[0];
    switch (window.location.pathname) {
        case "/contact-me":
            NavBar.children[3].children[0].classList.add('is-outlined');
            break;
        default:
            console.log(window.location.pathname)
            break;
    } */

    return (
        <nav className="navbar subtitle is-6 is-justify-content-right">
            <ul className="navbar-brand columns is-vcentered is-multiline" >
                <li className='mr-2'>
                    <button className='button is-info is-outlined'>
                        <Link className="column" to="/">About Me</Link>
                    </button>
                </li>
                <li className='mr-2'>
                    <button className='button is-info'>
                        <Link className="column" to="/projects">Projects</Link>
                    </button>
                </li>
                <li className='mr-2'>
                    <button className='button is-info'>
                        <Link className="column" to="/resume">Resume</Link>
                    </button>
                </li>
                <li className='mr-2'>
                    <button className='button is-info'>
                        <Link className="column" to="/contact-me">Contact Me</Link>
                    </button>
                </li>
            </ul>


        </nav>
    );
};

export default Navigation;