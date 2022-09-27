import React from 'react';
import { Page } from '../../components';
import { Card } from '../../ui';

const sectionId = window.location.pathname.split('/')[2];

const SectionCardList = {
    printPhoto: {
        headerText: 'Dai vita ai tuoi ricordi più cari con le stampe fotografiche. Carica le tue foto e trasformale in bellissime stampre da conservare e toccare con mano: è facile con Digitalpix!',
        cards:
            [
                {
                    title: 'Classic Print',
                    id: "classicPrint",
                    image: 'https://via.placeholder.com/300x180?text=Placeholder',
                    price: '0,11 €',
                }
            ],
    },
    picturesPaintings: {
        headerText: '',
        cards: [],
    },
    calendar: {
        headerText: '',
        cards: [],
    },
    photoAlbum: {
        headerText: '',
        cards: [],
    },
    poster: {
        headerText: '',
        cards: [],
    },
    gift: {
        headerText: '',
        cards: [],
    },
    fineArt: {
        headerText: '',
        cards: [],
    },
    specialCard: {
        headerText: '',
        cards: [],
    },
};

const handleCardClick = (id) => {
    window.location.href = `/details/${id}`;
}

export function Section() {

    return (
        <Page>
            <div className='p-3'>
                <p className='text-center text-secondary pb-4 border-bottom'>{SectionCardList[sectionId].headerText}</p>
                <div className='pt-3'>
                {SectionCardList[sectionId].cards.map((card, index) => (
                    <div onClick={() => handleCardClick(card.id)} key={index} className='mb-4'>
                        <Card
                            title={card.title}
                            image={card.image}
                            price={card.price}
                            oldPrice={card.oldPrice}
                        />
                    </div>
                ))}
            </div></div>
        </Page>
    );
}