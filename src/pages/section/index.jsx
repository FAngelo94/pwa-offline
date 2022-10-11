import React from 'react';
import { Page } from '../../components';
import { Card } from '../../ui';

const urlParams = new URLSearchParams(window.location.search);
const sectionId = "printPhoto"
const title = urlParams.get('id');

const SectionCardList = {
    printPhoto: {
        title: 'Stampa Foto',
        headerText: '........',
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
    window.location.href = `/details?id=${id}`;
}

export function Section() {
    console.log("SECTION ID: ", sectionId);

    return (
        <Page visibleBottomNavigation={false} title={"Id of Section Page: " +title}>
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