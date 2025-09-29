
import React from 'react';

export const BathIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor"
    >
       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l.42 1.68a2.25 2.25 0 002.162 1.82h12.336a2.25 2.25 0 002.162-1.82l.42-1.68m-17.634 0M21.75 15.75v-3.375c0-1.42-1.155-2.575-2.575-2.575H4.825c-1.42 0-2.575 1.155-2.575 2.575v3.375m17.634 0h-1.334M2.25 15.75h1.334m15.002 0h-3.334M5.918 15.75h3.334c.27.026.53.05.788.077M9.252 15.75A2.625 2.625 0 0111.877 13.5a2.625 2.625 0 012.625 2.25" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75V6.75m0 0l-2.02 2.02M12 6.75l2.02 2.02" />
    </svg>
);
