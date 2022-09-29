import React from 'react';

export function Button({children, otherClass, onClick}) {

    return (
        <button type="button" className={`btn p-0 rounded-5 w-100 text-white fs-6 ${otherClass ? otherClass : "btn-primary"}`} onClick={onClick}>
            {children}
        </button>
    );
}