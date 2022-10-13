import React from 'react';
import { Page } from '../../components';
import { Card } from '../../ui';

const ExploreCardList = [
    {
        title: 'Stampa Foto',
        id: "printPhoto",
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '0,11 €',
    },
    {
        title: 'Foto Quadri',
        id: "picturesPaintings",
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '4,90 €',
        oldPrice: '17,90 €'
    },
    {
        title: 'Calendari',
        id: "calendar",
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '4,50 €',
    },
    {
        title: 'Portafoto',
        id: "photoAlbum",
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '0.11 €',
    },
    {
        title: 'Poster',
        id: "poster",
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '10 €',
    },
    {
        title: 'Idee Regalo',
        id: "gift",
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '12,90 €'
    },
    {
        title: 'Fine-Art',
        id: "fineArt",
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '8,10 €',
    },
    {
        title: 'Carte Speciali',
        id: "specialCard",
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '1,19 €',
    },
];

const handleCardClick = (id) => {
    window.location.href = `/section?id=${id}`;
}

export function Explore() {

    return (
        <Page>
            <div className='p-3 row'>
                {ExploreCardList.map((card, index) => (
                    <div onClick={() => handleCardClick(card.id)} key={index} className='mb-4 col-sm-5 col-md-4'>
                        <Card
                            title={card.title}
                            image={card.image}
                            price={card.price}
                            oldPrice={card.oldPrice}
                            />
                    </div>
                ))}
            </div>
        </Page>
    );
}
