import React from 'react';

export function CardTitleText({title, text, otherClass}) {

    return (
        <div className={`card ${otherClass}`}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text fs-6">{text}</p>
            </div>
        </div>
    );
}