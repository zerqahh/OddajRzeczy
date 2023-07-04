import React from 'react';
import './loginpage.scss';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
    return (

        <div className='navbar__content'>
            <div className='navbar__container'>
                <div className='navbar__content'>
                    <div className='navbar__navbar'>
                        <div className='navbar__navbar__top'>
                            <>
                                <NavLink exact to="/logowanie" className="navlogin"><p>Zaloguj</p></NavLink>
                                <NavLink exact to="/rejestracja" className="navlogin"> <p>Załóż konto</p>
                                </NavLink>
                            </>
                        </div>
                        <div className='navbar__navbar__bottom'>
                            <NavLink exact to="/" className="navlogin"><p>Start</p></NavLink>
                            <Link
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >  <p>O co chodzi?</p>
                            </Link>
                            <Link
                                activeClass="active"
                                to="section5"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >  <p>O nas</p>
                            </Link>
                            <Link
                                activeClass="active"
                                to="section6"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <p> Fundacje i organizacje</p>

                            </Link>
                            <Link
                                activeClass="active"
                                to="section7"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={500}
                            > <p>Kontakt</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>      </div>

    );
}


export default Navbar;