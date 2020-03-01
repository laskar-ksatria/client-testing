import React from 'react';

//Components
import { TopBarLeft } from './topBar/TopBarLeft';
import { TopBarRight } from './topBar/TopBarRight';

const TopBar = () => {

    return (
        <>
            
            <nav className="topbar-main">
                <TopBarLeft />
                <TopBarRight />
                <ul className="list-unstyled topbar-nav mb-0">
                </ul>
            </nav>


        </>
    )
};


export default TopBar;