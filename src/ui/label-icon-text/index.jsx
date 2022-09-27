import React from 'react';

export function LabelIconText({icon, text, otherClass}) {

    return (
        <div className={otherClass}>
            {icon}
            <span className='ms-2'>{text}</span>
        </div>
    );
}