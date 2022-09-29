import React from 'react';
import { BottomNavigation } from '..';
import { TopNavigation } from '..';

export function Page({ children,visibleBottomNavigation=true, customBottomSection = null, title = null }) {

    return (
        <div className={`vw-100 vh-100 position-relative overflow-auto ${visibleBottomNavigation ? "pb-5" : ""} ${title ? "pt-5" : ""}`}>
            {title && <TopNavigation title={title}/>}
            <div className='d-grid gap-3'>
                {children}
            </div>
            {visibleBottomNavigation && (customBottomSection ||  <BottomNavigation />)}
        </div>
    );
}
