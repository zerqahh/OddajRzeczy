import React from 'react';
import './navbar.scss';
import './loginpage.scss'
import Decoration from './assets/Decoration.svg'
import Navbar from './navbar';
import { NavLink } from 'react-router-dom';


function LoginPage() {
    return (
        <div className='loginpage__container'>
            <Navbar />
            <div className='loginpage__content'>
                <div className='loginpage__form_box'>

                    <div className='loginpage__form_item-top'>
                        <div className='form_item-top-top'><p>Zaloguj się</p></div>

                        <div className='loginpage__form_item-top-bottom'><img src={Decoration} style={{ width: "300px", height: "auto" }}></img>
                        </div>
                    </div>

                    <div className='loginpage__form_item-bottom'>
                        <div className='loginpage__form_item-bottom-box'>
                            <p>E-mail:</p>
                            <input type="email" id="email" name="email" required />

                            <p>Hasło:</p>
                            <input type="password" id="password" name="password" required />

                        </div></div>
                    <div className='loginpage__form_item-buttons-container'>
                        <NavLink exact to="/rejestracja" className="navlogin"> <p>Załóż konto</p>
                        </NavLink>
                        <p>Zaloguj się</p>
                    </div>
                </div>
            </div>

        </div >

    )

}

export default LoginPage;