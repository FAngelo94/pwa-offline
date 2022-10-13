import React from 'react';

export function BottomNavigation({children}) {

    return (
        <div className='nav container justify-content-around position-fixed bottom-0 border-top bg-white'>
            {children}
        </div>
    );
}