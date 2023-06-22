import React from 'react';
import './section7.scss';
import Decoration from './assets/Decoration.svg'

function Section7() {
    return (
        <div className='section7'>
            <div className='section7__container'>
                <div className='section7__content_left'>
                </div>

                <div className='section7__content_right'>
                    <div className='section7__right_items'>
                        <div className='right_items_top'>
                            <p>Skontaktuj się z nami</p>
                            <img src={Decoration} style={{ width: "280px", height: "auto" }}></img>
                        </div>
                        <div className='right_items_bottom_form'>
                            <div className='form-top'>
                                <div className='form-name'>
                                    <p>Wpisz swoje imię</p>
                                    <input type='text' placeholder="Krzysztof"></input>
                                </div>
                                <div className='form-surname' >
                                    <p>Wpisz swoje nazwisko</p>
                                    <input type='text' placeholder="xyz@gmail.com"></input>
                                </div>
                            </div>
                            <div className='form-bottom'>
                                <p>Wpisz swoją wiadomość</p>
                                <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'></textarea>

                            </div>
                        </div>

                    </div>
                </div>

            </div></div>

    );
}


export default Section7;