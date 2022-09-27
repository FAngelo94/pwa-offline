import React from 'react';

export function ImageOverlay({ image, children, altImage, otherClass }) {

    return (
        <div class={`card bg-dark text-white ${otherClass}`}>
            <div className=' ratio ratio-16x9'>
                <img src={image} class="card-img" alt={altImage} />
            </div>
            <div class="card-img-overlay">
                {children}
            </div>
        </div>
    );
}