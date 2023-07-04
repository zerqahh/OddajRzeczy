import React, { useState } from 'react';
import './section6.scss';
import Decoration from './assets/Decoration.svg';

const pagesData = {
    Fundacjom: [
        {
            title: 'Fundacja "Dbam o Zdrowie"',
            description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
            items: 'Ubrania, jedzenie, sprzęt AGD, meble, zabawki'
        },
        {
            title: 'Fundacja "Dla dzieci"',
            description: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
            items: 'Ubrania, jedzenie'
        },
        {
            title: 'Fundacja "Bez domu"',
            description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
            items: 'Ubrania, jedzenie, ciepłe koce'
        },
        {
            title: 'Fundacja "test2"',
            description: 'Cel i misja: test',
            items: 'test'
        },
        {
            title: 'Fundacja "test2"',
            description: 'Cel i misja: test',
            items: 'test'
        },
        {
            title: 'Fundacja "test2"',
            description: 'Cel i misja: test',
            items: 'test'
        },
        {
            title: 'Fundacja "test3"',
            description: 'Cel i misja: test',
            items: 'test'
        },
        {
            title: 'Fundacja "test3"',
            description: 'Cel i misja: test',
            items: 'test'
        },
        {
            title: 'Fundacja "test3"',
            description: 'Cel i misja: test',
            items: 'test'
        },

    ],
    Organizacjom: [
        {
            title: 'Fundacja "Test"',
            description: 'Cel i misja: Test.',
            items: 'test1, test2'
        },
        {
            title: 'Fundacja "Test"',
            description: 'Cel i misja: Test.',
            items: 'test1, test2'
        },
        {
            title: 'Fundacja "Test"',
            description: 'Cel i misja: Test.',
            items: 'test1, test2'
        },
        {
            title: 'Fundacja "Test"',
            description: 'Cel i misja: Test.',
            items: 'test1, test2'
        },
        {
            title: 'Fundacja "Test12"',
            description: 'Cel i misja: Test.',
            items: 'test1, test2'
        },
        {
            title: 'Fundacja "Test1"',
            description: 'Cel i misja: Test.',
            items: 'test1, test2'
        },
    ],
    Lokalnym: [
        {
            title: 'Fundacja "Bez domu"',
            description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
            items: 'Ubrania, jedzenie, ciepłe koce'
        },
        {
            title: 'Fundacja "Test"',
            description: 'Cel i misja: Test.',
            items: 'test1, test2'
        },
    ]
};

function Section6() {
    const [activeButton, setActiveButton] = useState('Fundacjom');
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (button) => {
        setActiveButton(button);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderContent = () => {
        const itemsPerPage = 3;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        let itemsToRender;
        if (activeButton === 'Fundacjom') {
            itemsToRender = pagesData.Fundacjom.slice(startIndex, endIndex);
        } else if (activeButton === 'Organizacjom') {
            itemsToRender = pagesData.Organizacjom.slice(startIndex, endIndex);
        } else if (activeButton === 'Lokalnym') {
            itemsToRender = pagesData.Lokalnym.slice(startIndex, endIndex);
        } else {
            return null;
        }

        return itemsToRender.map((page, index) => (
            <div className="content_bottom_items" key={index}>
                <div className="bottom_items_left">
                    <p className="item_left_top">{page.title}</p>
                    <p className="item_left_bottom">{page.description}</p>
                </div>
                <div className="bottom_items_right">
                    <p className="item_right">{page.items}</p>
                </div>
            </div>
        ));
    };

    const totalPages =
        activeButton === 'Fundacjom'
            ? Math.ceil(pagesData.Fundacjom.length / 3)
            : activeButton === 'Organizacjom'
                ? Math.ceil(pagesData.Organizacjom.length / 3)
                : activeButton === 'Lokalnym'
                    ? Math.ceil(pagesData.Lokalnym.length / 3)
                    : 0;

    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
            <p
                key={i}
                className={currentPage === i ? 'active' : ''}
                onClick={() => handlePageChange(i)}
            >
                {i}
            </p>
        );
    }

    return (
        <div className="section6">
            <div className="section6__container">
                <div className="section6__content_top">
                    <div className="content__top__items">
                        <div className="top__items_top">
                            <p>Komu pomagamy?</p>
                        </div>
                        <img src={Decoration} style={{ width: '250px', height: '100%' }} alt="Decoration" />
                        <div className="top__items_bottom">
                            <div
                                className={`bottom__buttons ${activeButton === 'Fundacjom' ? 'active' : ''}`}
                                onClick={() => handleClick('Fundacjom')}
                            >
                                <p>Fundacjom</p>
                            </div>
                            <div
                                className={`bottom__buttons ${activeButton === 'Organizacjom' ? 'active' : ''}`}
                                onClick={() => handleClick('Organizacjom')}
                            >
                                <p>Organizacjom<br />pozarządowym</p>
                            </div>
                            <div
                                className={`bottom__buttons ${activeButton === 'Lokalnym' ? 'active' : ''}`}
                                onClick={() => handleClick('Lokalnym')}
                            >
                                <p>Lokalnym<br />zbiórkom</p>
                            </div>
                        </div>
                        <div className="top__items_description">
                            <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                        </div>
                    </div>
                </div>

                <div className="section6__content_bottom">
                    <div className="content_bottom_container">
                        {renderContent()}
                        <div className="content_bottom_scroll">
                            {pageButtons}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section6;
