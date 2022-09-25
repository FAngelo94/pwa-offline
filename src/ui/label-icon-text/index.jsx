import React from 'react';

export function LabelIconText({icon, text}) {

    return (
        <div>
            {icon}
            <span className='ms-2'>{text}</span>
        </div>
    );
}