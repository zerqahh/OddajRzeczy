import React from 'react';
import './section1.scss';



function Section1() {
    return (
        <div className='section1'>
            <div className='section1__container'>
                <div className='section1__content'>
                    <p className='top'>10</p>
                    <p className='mid'>ODDANYCH WORKÓW</p>
                    <p className='bottom'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ornare metus, vitae dictum sapien. Integer et dictum mi. In consectetur commodo nisl, sit amet dapibus felis molestie id.  </p>
                </div>
                <div className='section1__content'>
                    <p className='top'>5</p>
                    <p className='mid'>WSPARTYCH ORGANIZACJI</p>
                    <p className='bottom'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ornare metus, vitae dictum sapien. Integer et dictum mi. In consectetur commodo nisl, sit amet dapibus felis molestie id.  </p>
                </div>
                <div className='section1__content'>
                    <p className='top'>7</p>
                    <p className='mid'>ZORGANIZOWANYCH ZBIÓREK</p>
                    <p className='bottom'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ornare metus, vitae dictum sapien. Integer et dictum mi. In consectetur commodo nisl, sit amet dapibus felis molestie id.  </p>
                </div>
            </div>
        </div>

    );
}


export default Section1;