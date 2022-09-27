import React from 'react';

export function Button({children, otherClass}) {

    return (
        <button type="button" class={`btn p-1 rounded-5 w-100 ${otherClass ? otherClass : "btn-primary"}`}>
            {children}
        </button>
    );
}