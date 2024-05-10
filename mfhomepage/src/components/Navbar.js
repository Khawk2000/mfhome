import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../MF_Logo_Banner.png";
import { Button } from './Button';
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    //copy and paste navitem for other tabs at top to go to different pages Home, About, etc.
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        <img src={logo} alt='MFLOGO'></img>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon className='fa-bars' icon={click ? faTimes: faBars} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle={'btn--outline'} goto={'/contact'}>Contact</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
