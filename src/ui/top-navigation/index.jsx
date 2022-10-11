import React from 'react';
import { BackArrow } from '..';

export function TopNavigation({text, arrowClick}) {

    return (
        <div className='w-100 justify-content-around position-fixed top-0 border-bottom bg-white fw-bold text-center p-2 position-relative'>
            <span className='position-absolute translate-middle-y top-50 start-0 ms-3 cursor-pointer' onClick={arrowClick}>
                <BackArrow dimension={20}/>
            </span>
            {text}
        </div>
    );
}