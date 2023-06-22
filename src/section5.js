import React from 'react';
import './section5.scss';
import Decoration from './assets/Decoration.svg'
import Signature from './assets/Signature.svg'


function Section5() {
    return (
        <div className='section5'>
            <div className='section5__container'>
                <div className='section5__content_left'>
                    <div className='section5__content_left_items'>

                        <div className='top'>
                            <p>O nas</p>
                        </div>

                        <div className='mid'>
                            <img src={Decoration} style={{ width: "300px", height: "100%" }}></img>
                        </div>

                        <div className='bottom'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ornare metus, vitae dictum sapien. Integer et dictum mi. In consectetur commodo nisl, sit amet dapibus felis molestie id. Vivamus et purus pulvinar, tristique lacus ut, dictum quam. Nulla vehicula eros id volutpat eleifend. </p>

                        </div>
                        <div className='signature'>
                            <img src={Signature} style={{ width: "150px", height: "100%" }}></img>

                        </div>
                    </div>
                </div>

                <div className='section5__content_right'></div>

            </div></div>

    );
}


export default Section5;