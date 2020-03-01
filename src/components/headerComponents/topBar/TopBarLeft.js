import React from 'react';


export const TopBarLeft = () => {
    return (
        <div className="topbar-left">
            <div className="logo">
                <span>
                    <img style={{cursor: 'pointer'}} src="./assets/images/codeoku.png" alt="logo-small" className="logo-sm" />
                </span>
                    <span>
                    <img style={{cursor: 'pointer'}} src="./assets/images/codeo.png" alt="logo-large" className="logo-lg" />
                </span>
            </div>
        </div>
    )
};

