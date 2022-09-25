import React from 'react';

export function BottomNavigation({children}) {

    return (
        <div className='nav w-100 justify-content-around position-absolute bottom-0 border-top'>
            {children}
        </div>
    );
}