import React from 'react';

export function TopNavigation({text, arrowClick}) {

    return (
        <div className='w-100 justify-content-around position-fixed top-0 border-bottom bg-white fw-bold text-center p-2 position-relative'>
            <span className='position-absolute p-2 bg-secondary translate-middle-y top-50 start-0 ms-3' onClick={arrowClick}></span>
            {text}
        </div>
    );
}