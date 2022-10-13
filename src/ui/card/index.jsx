import React from 'react';

export function Card({ image, title, price, oldPrice = null, otherClass = "" }) {

    return (
        <div className={`card rounded-5 overflow-hidden shadow  ${otherClass}`}>
            <div className=' ratio ratio-16x9'>
                <img src={image} className="card-img-top" alt={title} />
            </div>
            <div className="card-body">
                <h5 className="card-titlefs-6">{title}</h5>
                <p className="card-text fs-6">da {
                    oldPrice ?
                        <React.Fragment>
                            <span className='text-primary me-4'>{price}</span>
                            <span className="text-decoration-line-through">{oldPrice}</span>
                        </React.Fragment>
                        :
                        <span className>{price}</span>
                }</p>
            </div>
        </div>
    );
}