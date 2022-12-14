import React from 'react';
import { Page } from '../../components';
import { Card, LabelIconText, CardTitleText } from '../../ui';

const HomeCardList1 = [
    {
        title: 'Stampe Classiche',
        id: "classicPrint",
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '0,11 €',
    },
    {
        title: 'Foto su Tela',
        id: "picturesPaintings",
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '4,90 €',
        oldPrice: '17,90 €'
    }
]

const HomeCardList2 = [
    {
        title: 'Foto su Forex',
        id: "photoOnForex",
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '4,90 €',
        oldPrice: '5,50 €'
    },
    {
        title: 'Foto con Cornice',
        id: "photoWithFrame",
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '14,90 €',
    }
]

const handleCardClick = (id) => {
    window.location.href = `/details?id=${id}`;
}


export function Home() {

    return (
        <Page>
            <div className='p-3'>
                <LabelIconText
                    icon={<span className='p-1 bg-secondary'></span>}
                    text="Introduzione" />
                <CardTitleText
                    title={
                        <LabelIconText
                            icon={<span className='p-1 bg-secondary'></span>}
                            text="PWA Offline App" />}
                    text="Una PWA (Progressive Web App) è un'applicazione web che si comporta come un'applicazione nativa. Può essere installata sul dispositivo e funziona offline. Inoltre anche sul browser, una volta fatto atterrato nel sito, si può navigare tra le pagine anche senza connessione internet."
                    otherClass="bg-primary text-white mt-3" />

                <LabelIconText
                    icon={<span className='p-1 bg-secondary'></span>}
                    text="Prodotti di tendenza"
                    otherClass={'mt-4 mb-3'} />
                <div className='row'>
                    {HomeCardList1.map((card, index) => (
                        <div onClick={() => handleCardClick(card.id)} key={index} className='mb-4 mb-sm-0 col-sm'>
                            <Card
                                key={index}
                                title={card.title}
                                image={card.image}
                                price={card.price}
                                oldPrice={card.oldPrice}
                            />
                        </div>
                    ))}
                </div>

                <LabelIconText
                    icon={<span className='p-1 bg-secondary'></span>}
                    text="Prodotti consigliati"
                    otherClass={'mt-4 mb-3'} />
                    <div className='row'>
                {HomeCardList2.map((card, index) => (
                    <div onClick={() => handleCardClick(card.id)} key={index} className='mb-4 mb-sm-0 col-sm'>
                        <Card
                            key={index}
                            title={card.title}
                            image={card.image}
                            price={card.price}
                            oldPrice={card.oldPrice}
                        />
                    </div>
                ))}
                </div>
            </div>
        </Page>
    );
}