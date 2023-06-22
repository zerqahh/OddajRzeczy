import React from 'react';
import './loginpage.scss';
import { NavLink } from 'react-router-dom';

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
                            <p>O co chodzi?</p>
                            <p>O nas</p>
                            <p>Fundacje i organizacje</p>
                            <p>Kontakt</p>
                        </div>
                    </div>

                </div>
            </div>      </div>

    );
}


export default Navbar;