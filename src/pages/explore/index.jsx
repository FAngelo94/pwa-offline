import React from 'react';
import { Page } from '../../components';
import { Card } from '../../ui';

const ExploreCardList = [
    {
        title: 'Stampa Foto',
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '0,11 €',
    },
    {
        title: 'Foto Quadri',
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '4,90 €',
        oldPrice: '17,90 €'
    },
    {
        title: 'Calendari',
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '4,50 €',
    },
    {
        title: 'Portafoto',
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '0.11 €',
    },
    {
        title: 'Poster',
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '10 €',
    },
    {
        title: 'Idee Regalo',
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '12,90 €'
    },
    {
        title: 'Fine-Art',
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '8,10 €',
    },
    {
        title: 'Carte Speciali',
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '1,19 €',
    },
];

export function Explore() {

    return (
        <Page>
            <div className='p-3'>
                {ExploreCardList.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        image={card.image}
                        price={card.price}
                        oldPrice={card.oldPrice}
                        otherClass="mb-4" />
                ))}
            </div>
        </Page>
    );
}
