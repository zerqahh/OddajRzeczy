import React from 'react';
import './navbar.scss';
import './registerpage.scss'
import Decoration from './assets/Decoration.svg'
import Navbar from './navbar';
import { NavLink } from 'react-router-dom';

function RegisterPage() {
    return (
        <div className='registerpage__container'>
            <Navbar />
            <div className='registerpage__content'>
                <div className='registerpage__form_box'>

                    <div className='registerpage__form_item-top'>
                        <div className='form_item-top-top'><p>Zarejestruj się</p></div>

                        <div className='registerpage__form_item-top-bottom'><img src={Decoration} style={{ width: "300px", height: "auto" }}></img>
                        </div>
                    </div>

                    <div className='registerpage__form_item-bottom'>
                        <div className='registerpage__form_item-bottom-box'>
                            <p>E-mail:</p>
                            <input type="email" id="email" name="email" required />

                            <p>Hasło:</p>
                            <input type="password" id="password" name="password" required />

                            <p>Powtórz hasło:</p>
                            <input type="password" id="password" name="password" required />

                        </div></div>
                    <div className='registerpage__form_item-buttons-container'>
                        <p>Zaloguj się</p>
                        <p>Załóż konto</p>
                    </div>
                </div>
            </div>

        </div >

    )

}

export default RegisterPage;