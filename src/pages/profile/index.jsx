import React from 'react';
import { Page } from '../../components';
import { Button, ImageOverlay } from '../../ui';

export function Profile() {

    return (
        <Page>
            <ImageOverlay image="https://via.placeholder.com/300x180?text=Placeholder" altImage="login backgound" otherClass={"border-0"}>
                <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column p-4'>
                    <h1 className='mb-3'>digitalpix</h1>
                    <Button otherClass={"bg-tertiary"}>
                        Accedi/Registrati
                        <span className='ms-2 p-1 bg-secondary'></span>
                    </Button>
                </div>
            </ImageOverlay>
            <div className='p-3'>
                <div className='fw-bold'>Informazioni</div>
                <ul className="list-group list-group-flush" id="accordionExample">
                    <li className="list-group-item">Spese di spedizione</li>
                    <li className="list-group-item">Privacy Policy</li>
                    <li className="list-group-item">Assistenza</li>
                    <li className="list-group-item text-center">Digitalpix v.0.2.7</li>
                </ul>
            </div>
        </Page>
    );
}