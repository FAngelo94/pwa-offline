import React from 'react';

export function LabelIconText({icon, text}) {

    return (
        <div className="card">
            {icon}
            {text}
        </div>
    );
}