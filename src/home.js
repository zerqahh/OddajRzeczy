import React from 'react';
import './home.scss';
import Decoration from './assets/Decoration.svg'
import HeroImage from './assets/Home-Hero-Image.png'
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';



function Home() {
    return (
        <div className='home__container'>
            <div className='home__content'>
                <Navbar />
                <div className='home__bottom'>

                    <div className='home__bottom_left'>
                        <img src={HeroImage}></img>
                    </div>

                    <div className='home__bottom_right'>
                        <div className='home__bottom_right_content'>
                            <div className='home__bottom_right_content_top'>
                                <div className='home_bottom_right_bottom_text'>
                                    <p>Zacznij pomagać!</p>
                                    <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                                    <img src={Decoration} style={{ width: "300px", height: "100%" }}></img>
                                </div>
                            </div>


                            <div className='home__bottom_right_content_bottom'>

                                <div className='home__bottom_right_bottom_buttons'>
                                    <p>ODDAJ<br /> RZECZY</p>
                                    <p>ZORGANIZUJ <br />ZBIÓRKĘ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}


export default Home;