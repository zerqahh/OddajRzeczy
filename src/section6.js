import React from 'react';
import './section6.scss';
import Decoration from './assets/Decoration.svg'

function Section6() {
    return (
        <div className='section6'>
            <div className='section6__container'>
                <div className='section6__content_top'>
                    <div className='content__top__items'>
                        <div className='top__items_top'><p>Komu pomagamy?</p></div>
                        <> <img src={Decoration} style={{ width: "250px", height: "100%" }}></img></>


                        <div className='top__items_bottom'>
                            <div className="bottom__buttons" id="Fundacjom"><p>Fundacjom</p></div>
                            <div className="bottom__buttons" ><p>Organizacjom <br /> pozarządowym</p></div>
                            <div className="bottom__buttons" ><p>Lokalnym <br /> zbiórkom</p></div>
                        </div>


                        <div className='top__items_description'><p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi wspólpracujemy. Mozesz sprawdzić czym się zajmuja, komu pomagają i czego potrzebują.</p></div>
                    </div>
                </div>

                <div className='section6__content_bottom'>
                    <div className='content_bottom_container'>
                        <div className='content_bottom_items'>

                            <div className='bottom_items_left'>
                                <p className='item_left_top'>Fundacja "Dbam o Zdrowie"</p>
                                <p className='item_left_bottom'>Cel i misja: Pomoc osobom znajdującym się w trudnej stuacji życiowej</p>

                            </div>

                            <div className='bottom_items_right'>
                                <p className='item_right'>Ubrania, jedzenie, sprzet AGD, meble, zabawki</p>
                            </div>

                        </div>
                        <div className='content_bottom_items'>
                            <div className='bottom_items_left'>
                                <p className='item_left_top'>Fundacja "Dla dzieci"</p>
                                <p className='item_left_bottom'>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            </div>
                            <div className='bottom_items_right'>
                                <p className='item_right'>Ubrania, jedzenie</p>
                            </div>

                        </div>
                        <div className='content_bottom_items'>
                            <div className='bottom_items_left'>
                                <p className='item_left_top'>Fundacja "Bez domu"</p>
                                <p className='item_left_bottom'>Cel i misja:
                                    Pomoc dla osób nie posiadających miejsca zamieszkania</p></div>
                            <div className='bottom_items_right'>
                                <p className='item_right'>Ubrania, jedzenie, ciepłe koce</p>
                            </div>

                        </div>
                        <div className='content_bottom_scroll'>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Section6;