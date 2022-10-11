import React from 'react';
import { Page } from '../../components';
import { Carousel, BackArrow } from '../../ui';
import { BottomButton } from '../../components/bottom-button';

const urlParams = new URLSearchParams(window.location.search);
const detailsId = "classicPrint";
const title = urlParams.get('id');

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
    window.location.href = `/product?id=${title}`;
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
                <span className='position-absolute top-0 start-0 ms-3 mt-3 cursor-pointer' onClick={handleBackPage}>
                    <BackArrow />
                </span>
            </div>
            <div className='p-3'>
                <h1>Id of Details Page: {title}</h1>
                {ExploreCardList[detailsId].oldPrice ? <h2>{ExploreCardList[detailsId].oldPrice}</h2> : null}
                <h2>{ExploreCardList[detailsId].price}</h2>

                <p>{ExploreCardList[detailsId].text}</p>
            </div>
        </Page>
    );
}