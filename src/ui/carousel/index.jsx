import React from 'react';

export function Carousel({ images }) {

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            
            <div class="carousel-indicators">
                {images.map((image, index) => (
                    <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to={index.toString()} className={index === 0 ? "active" : ""} aria-current="true" aria-label={`Slide ${index + 1}`}></button>
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img src={image.url} className="d-block w-100" alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
}