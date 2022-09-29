import React from 'react';
import { Page } from '../../components';
import { Carousel } from '../../ui';

const ExploreCardList = {
    printPhoto: {
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

export function Details() {

    return (
        <Page visibleBottomNavigation={false}>
            <Carousel images={ExploreCardList.printPhoto.images} />
            <div className='p-3'>
                <h1>{ExploreCardList.printPhoto.title}</h1>
                {ExploreCardList.printPhoto.oldPrice ? <h2>{ExploreCardList.printPhoto.oldPrice}</h2> : null}
                <h2>{ExploreCardList.printPhoto.price}</h2>

                <p>{ExploreCardList.printPhoto.text}</p>
            </div>
        </Page>
    );
}