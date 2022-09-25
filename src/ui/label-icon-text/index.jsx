import React from 'react';

function LabelIconText({icon, text}) {

    return (
        <div className="card">
            {icon}
            {text}
        </div>
    );
}

export default LabelIconText;
