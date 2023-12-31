import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import images from '../../constants/images';
import { BiMap } from "react-icons/bi"
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from "react-icons/bs"

const openFacebook = () => {
    window.open('https://www.facebook.com', '_blank');
};

const openInstagram = () => {
    window.open('https://www.instagram.com', '_blank');
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [slideDirection, setSlideDirection] = useState('');

    const handleOpenMenu = () => {
        setToggleMenu(true);
        setSlideDirection('slide-right');
    };

    const handleCloseMenu = () => {
        setSlideDirection('slide-left');
        setTimeout(() => {
            setToggleMenu(false);
            setSlideDirection('');
        }, 500); // Adjust the delay to match the duration of the slide animation
    };

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a href="/">
                    <img src={images.logoWhite} alt="app_logo" />
                </a>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans">
                    <a href="oferta">Oferta</a>
                </li>
                <li className="p__opensans">
                    <a href="konsultacja-online">Konsultacja </a>
                </li>
                <li className="p__opensans">
                    <a href="cennik">Cennik</a>
                </li>
                <li className="p__opensans">
                    <a href="metamorfozy">Metamorfozy</a>
                </li>
                <li className="p__opensans">
                    <a href="o-mnie">O Mnie</a>
                </li>
                <li className="p__opensans">
                    <a href="kontakt">Kontakt</a>
                </li>
            </ul>
            <div className="app__navbar-login">
                <a href="/login" className="p__opensans"></a>
                <div />
                <a
                    href="/umow-wizyte"
                    className="p__opensans custom__button action-button"
                    style={{ color: '#ffffff' }}
                >
                    Umów wizytę
                </a>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu
                    className="app__navbar-hamburger"
                    onClick={handleOpenMenu}
                />

                {toggleMenu && (
                    <div className={`app__navbar-smallscreen_overlay  ${slideDirection}`}>
                        <MdClose
                            className="overlay__close"
                            onClick={handleCloseMenu}
                        />
                        <ul className="app__navbar-smallscreen_links">
                            <li className="p__opensans">
                                <a href="/">
                                    <img src={images.logoK} alt="app_logo-small" />
                                </a>
                            </li>
                            <li className="p__opensans">
                                <a href="oferta">Oferta</a>
                            </li>
                            <li className="p__opensans">
                                <a href="konsultacja-online">Konsultacja</a>
                            </li>
                            <li className="p__opensans">
                                <a href="cennik">Cennik</a>
                            </li>
                            <li className="p__opensans">
                                <a href="metamorfozy">Metamorfozy</a>
                            </li>
                            <li className="p__opensans">
                                <a href="o-mnie">O Mnie</a>
                            </li>
                            <li className="p__opensans">
                                <a href="kontakt">Kontakt</a>
                            </li>
                            <div className="app_navbar-smallscreen-infos">
                                <div className='app__navbar-smallscreen-address' style={{ color: 'white' }}>
                                    <BiMap className='mail' />
                                    <a href="https://goo.gl/maps/GiL8GV9ENU33pqfN6">
                                        <p className='p__opensans' style={{ color: 'white' }}> Jana Heweliusza 22, Gdańsk</p>
                                    </a>
                                </div>
                                <div className='app_navbar-smallscreen-info__phone__together' style={{ color: 'white' }}>
                                    <BsFillTelephoneFill className='tele' />
                                    <a href="tel:+48666909599"><p className='p__opensans' style={{ color: 'white' }}>+48 537900699</p></a>
                                </div>
                                <div className='info__medias'>
                                    <BsInstagram className='info__instagram' onClick={openInstagram}></BsInstagram>
                                    <BsFacebook className='info__facebook' onClick={openFacebook}></BsFacebook>
                                </div>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
