import React from 'react';
import {BottomNavigation} from '..';

export function Page({children}) {

    return (
        <div className='vw-100 vh-100 position-relative pb-5 overflow-auto'>
            <div className='p-3 d-grid gap-3'>
                {children}
            </div>
            <BottomNavigation />
        </div>
    );
}
