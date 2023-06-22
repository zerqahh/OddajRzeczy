import React from 'react';
import './section7.scss';
import Decoration from './assets/Decoration.svg'
import Facebook from "./assets/Facebook.svg"
import Instagram from "./assets/Instagram.svg"

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
                                <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '></textarea>
                                <div className='btn-container'>
                                    <div id="send-btn"><p>Wyślij</p></div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

                <div className='section7__icons'>
                    <div className='icons__container'>
                        <div className='icons_content'>
                            <img src={Facebook} style={{ width: "30%", height: "30%" }}></img>
                            <img src={Instagram} style={{ width: "30%", height: "30%" }}></img>
                        </div>
                    </div>

                </div>

            </div>
        </div>



    );
}


export default Section7;