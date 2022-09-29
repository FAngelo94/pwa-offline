import React from 'react';
import { Page } from '../../components';
import { Carousel } from '../../ui';
import { BottomButton } from '../../components/bottom-button';

const detailsId = window.location.pathname.split('/')[2];

const ExploreCardList = {
    classicPrint: {
        title: 'Stampa Foto',
        price: '0,11 €',
        oldPrice: "",
        text: "Stampa foto su carta fotografica, poster, calendari, quadri e molto altro.",
        images: [
            {
                url: 'https://via.placeholder.com/300x180?text=Placeholder',
                alt: 'Placeholder'
            },
            {
                url: 'https://via.placeholder.com/300x180?text=Placeholder',
                alt: 'Placeholder'
            }
        ]
    },
}

const handleButtonClick = () => {
    window.location.href = `/product/${detailsId}`;
}

const handleBackPage = () => {
    window.history.back();
}

export function Details() {

    return (
        <Page
            customBottomSection={<BottomButton content="Crea Ora" onClick={handleButtonClick} />}>
            <div className='position-relative'>
                <Carousel images={ExploreCardList[detailsId].images} />
                <span className='position-absolute p-2 bg-black top-0 start-0 ms-3 mt-3' onClick={handleBackPage}></span>
            </div>
            <div className='p-3'>
                <h1>{ExploreCardList[detailsId].title}</h1>
                {ExploreCardList[detailsId].oldPrice ? <h2>{ExploreCardList[detailsId].oldPrice}</h2> : null}
                <h2>{ExploreCardList[detailsId].price}</h2>

                <p>{ExploreCardList[detailsId].text}</p>
            </div>
        </Page>
    );
}