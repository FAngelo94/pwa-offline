import React from 'react';
import { Page } from '../../components';
import { Card, LabelIconText, CardTitleText } from '../../ui';

const HomeCardList1 = [
    {
        title: 'Stampe Classiche',
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '0,11 €',
    },
    {
        title: 'Foto su Tela',
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '4,90 €',
        oldPrice: '17,90 €'
    }
]

const HomeCardList2 = [
    {
        title: 'Foto su Forex',
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '4,90 €',
        oldPrice: '5,50 €'
    },
    {
        title: 'Foto con Cornice',
        image: 'https://via.placeholder.com/300x180?text=Placeholder',
        price: '14,90 €',
    }
]

export function Home() {

    return (
        <Page>
            <div className='p-3'>
                <LabelIconText
                    icon={<span className='p-1 bg-secondary'></span>}
                    text="Promozioni" />
                <CardTitleText
                    title={
                        <LabelIconText
                            icon={<span className='p-1 bg-secondary'></span>}
                            text="Ti diamo il benvenuto" />}
                    text="Questa è la nostra nuova webapp ottimizzata per i dispositivi mobili"
                    otherClass="bg-primary text-white mt-3" />

                <LabelIconText
                    icon={<span className='p-1 bg-secondary'></span>}
                    text="Prodotti di tendenza"
                    otherClass={'mt-4 mb-3'} />
                {HomeCardList1.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        image={card.image}
                        price={card.price}
                        oldPrice={card.oldPrice}
                        otherClass="mb-4" />
                ))}

                <LabelIconText
                    icon={<span className='p-1 bg-secondary'></span>}
                    text="Prodotti consigliati"
                    otherClass={'mt-4 mb-3'} />
                {HomeCardList2.map((card, index) => (
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