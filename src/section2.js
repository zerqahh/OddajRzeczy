import React from 'react';
import './section2.scss';
import Decoration from './assets/Decoration.svg'


function Section2() {
    return (
        <div className='section2'>
            <div className='section2__container'>
                <div className='section2__content'>
                    <p>Wystarczą 4 proste kroki</p>
                    <img src={Decoration} style={{ width: "250px", height: "100%" }}></img>
                </div>

            </div>
        </div>

    );
}


export default Section2;