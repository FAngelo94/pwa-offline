import React from 'react';

export function List({ list }) {

    return (
        <div className="list-group">
            {list.map((item, index) => (
                <a href={item.path} className={`list-group-item list-group-item-action border-0 rounded-0 ${index % 2 === 0 ? "list-group-item-secondary" : ""}`} key={index}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <div className='fw-bold'>{item.textUp}</div>
                            <div>{item.textDown}</div>
                        </div>
                        <div className='position-relative'>
                        <span className='position-absolute p-2 bg-secondary translate-middle-y top-50 end-0 me-3'>

                        </span>
                        </div>
                    </div>
                </a>)
            )}
        </div>
    );
}