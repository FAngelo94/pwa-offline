import React from 'react';
import { List } from '../../ui';

export function ProductListOption({productId}) {

    const list = {
        classicPrint: [
            {
                textUp: 'Carta:',
                textDown: 'Carta Classica (Lucida)',
                path: "/product/classicPrint/card"
            },
            {
                textUp: 'Formato:',
                textDown: '10x15 cm',
                path: "/product/classicPrint/format"
            }
        ],
    }

    return (
        <List list={list[productId]} />
    );
}