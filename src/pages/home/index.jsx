import React from 'react';
import { Page } from '../../components';
import { Card, LabelIconText, CardTitleText } from '../../ui';

const cardsList = [
    {
        title: 'Card title',
        image: 'https://via.placeholder.com/300.png/09f/fff',
    }
]

export function Home() {

    return (
        <Page>
            <LabelIconText
                icon={<span className='p-1 bg-primary'></span>}
                text="Promozioni" />
            <CardTitleText
                title={
                    <LabelIconText
                        icon={<span className='p-1 bg-primary'></span>}
                        text="Ti diamo il benvenuto" />}
                text="Questa è la nostra nuova webapp ottimizzata per i dispositivi mobili"
            />

            <LabelIconText
                icon={<span className='p-1 bg-primary'></span>}
                text="Prodotti di tendenza" />


            <LabelIconText
                icon={<span className='p-1 bg-primary'></span>}
                text="Prodotti consigliati" />
        </Page>
    );
}