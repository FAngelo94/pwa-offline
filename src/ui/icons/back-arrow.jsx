import React from "react";

export const BackArrow = ({ dimension = 24, color = "#000000" }) => {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={dimension} height={dimension} viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill={color} stroke="none">
                <path d="M127 462 c-70 -70 -127 -134 -127 -142 0 -24 252 -270 276 -270 24 0
44 18 44 39 0 9 -37 53 -82 98 l-83 83 220 0 c183 0 224 3 243 16 28 19 28 49
0 68 -19 13 -60 16 -243 16 l-220 0 83 83 c82 82 93 102 70 125 -28 28 -55 10
-181 -116z"/>
            </g>
        </svg>

    );
}