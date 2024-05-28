// zone3 => 한글 

import React, {useState} from 'react';



export const Zone3_T = ({onClose}) => {
    return (
        <div style={{ position: 'fixed', top: '20%', left: '20%', width: '60%', height: '60%', backgroundColor: 'white', border: '1px solid black', zIndex: 100, padding: 20, boxSizing: 'border-box' }}>
        <button onClick={onClose} style={{ position: 'absolute', right: 10, top: 10 }}>Close</button>
        <div></div>
      </div>
    );
};