import React from 'react';

export function ImageOverlay({ image, children, altImage, otherClass }) {

    return (
        <div className={`card bg-dark text-white ${otherClass}`}>
            <div className='ratio ratio-16x9'>
                <img src={image} className="card-img" alt={altImage} />
            </div>
            <div className="card-img-overlay">
                {children}
            </div>
        </div>
    );
}