import React from 'react';
import { BottomNavigation as BottomNavigationUI, Button } from '../../ui';

export function BottomButton({ onClick, content, active, contentUp }) {
    const page = window.location.pathname;

    return (
        <BottomNavigationUI>
            {contentUp}
            <div className='pt-2 pb-2 ps-3 pe-3 w-100'>
                <Button onClick={onClick}>
                    {content}
                </Button>
            </div>
        </BottomNavigationUI>
    );
}