import React from 'react';
import './header.css'

function Header () {
    return(
        <header>
            <div className="header__container">
                <>
                    <a href="" className='logo'>Hola Fashion</a>
                </>
                <div className="header__nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#Home">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#Product">Product</a>
                        </li>
                        <li className="nav__item">
                            <a href="#Services">Services</a>
                        </li>
                        <li className="nav__item">
                            <a href="#Blog">Blog</a>
                        </li>
                        <li className="nav__item">
                            <a href="#Contacts">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;