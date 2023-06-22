import React from 'react';
import './section3.scss';
import Icon1 from './assets/Icon-1.svg'
import Icon2 from './assets/Icon-2.svg'
import Icon3 from './assets/Icon-3.svg'
import Icon4 from './assets/Icon-4.svg'


function Section3() {
    return (
        <div className='section3'>
            <div className='section3__container'>
                <div className='section3__content'>

                    <div className='section3__items'>
                        <img src={Icon1} />
                        <p className='top'>Wybierz rzeczy</p>
                        <div className='mid-line'></div>
                        <p className='bottom'>ubrania, zabawki, sprzęt i inne</p>
                    </div>

                    <div className='section3__items'>
                        <img src={Icon2} />
                        <p className='top'>Spakuj je</p>
                        <div className='mid-line'></div>
                        <p className='bottom'>skorzystaj z worków na śmieci</p>
                    </div>

                    <div className='section3__items'>
                        <img src={Icon3} />
                        <p className='top'>zdecyduj komu chcesz pomóc</p>
                        <div className='mid-line'></div>
                        <p className='bottom'>wybierz zaufane miejsce</p>
                    </div>

                    <div className='section3__items'>
                        <img src={Icon4} />
                        <p className='top'>Zamów kuriera</p>
                        <div className='mid-line'></div>
                        <p className='bottom'>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Section3;