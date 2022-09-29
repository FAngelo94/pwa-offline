import React from 'react';
import { TopNavigation as TopNavigationUI } from '../../ui';

const arrowClick = () => {
    window.history.back();
}

export function TopNavigation({title}) {
    return (
        <TopNavigationUI text={title} arrowClick={arrowClick}/>
    );
}