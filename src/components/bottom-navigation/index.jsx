import React from 'react';
import { BottomNavigation as BottomNavigationUI } from '../../ui';

const menuItems = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'Explore',
        path: '/explore'
    },
    {
        label: 'Profile',
        path: '/profile'
    },
    {
        label: 'Cart',
        path: '/cart'
    }
];

export function BottomNavigation(props) {
    const page = window.location.pathname;

    return (
        <BottomNavigationUI>
            {menuItems.map((item) => (
                <a className={`nav-link text-capitalize fs-6 m-0${page===item.path ? " text-primary" : " text-dark"}`} key={item.label} href={item.path}>{item.label}</a>)
            )}
        </BottomNavigationUI>
    );
}