import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const handleClick = event => {
        let NavBarButtons = document.getElementsByClassName('button')

        if(event.target.className==='column'){
            event.target=event.target.parentNode;
        } else {
            return;
        }

        NavBarButtons[0].className='button is-info';
        NavBarButtons[1].className='button is-info';
        NavBarButtons[2].className='button is-info';
        NavBarButtons[3].className='button is-info';

        event.target.className='button is-info is-outlined';
    }

    return (
        <nav className="navbar subtitle is-6 is-justify-content-right">
            <ul className="navbar-brand columns is-vcentered is-multiline" >
                <li className='mr-2'>
                    <button className='button is-info is-outlined' onClick={handleClick}>
                        <Link className="column" to="/">About Me</Link>
                    </button>
                </li>
                <li className='mr-2'>
                    <button className='button is-info' onClick={handleClick}>
                        <Link className="column" to="/projects">Projects</Link>
                    </button>
                </li>
                <li className='mr-2'>
                    <button className='button is-info' onClick={handleClick}>
                        <Link className="column" to="/resume">Resume</Link>
                    </button>
                </li>
                <li className='mr-2'>
                    <button className='button is-info' onClick={handleClick}>
                        <Link className="column" to="/contact-me">Contact Me</Link>
                    </button>
                </li>
            </ul>


        </nav>
    );
};

export default Navigation;