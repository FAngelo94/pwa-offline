import React from 'react';
import {Page} from '../../components';
import { BottomButton, ProductListOption } from '../../components';

const productId = window.location.pathname.split('/')[2];

const handleButtonClick = () => {
    window.location.href = `/product/${productId}`;
}


export function Product() {

    return (
        <Page 
        customBottomSection={
        <BottomButton content="Prosegui" onClick={handleButtonClick} contentUp={"Prezzo totale: 0.24 €"}/>} 
        title="Stampe Classiche">
            <div className='position-relative ps-5'>
            <span class="position-absolute p-2 bg-secondary translate-middle-y top-50 start-0 ms-3"></span>
                <span className='fw-bold'>Prodotto</span>
            </div>
            <ProductListOption productId={productId}/>
        </Page>
    );
}