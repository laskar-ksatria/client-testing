import React from 'react';
import NavigationMenu from './customMenu/NavigationMenu';

function CustomMenu(props) {
    return (
        <div className="navbar-custom-menu">
            <div className="container-fluid">
                <div id="navigation">
                    {/* <NavigationMenu /> */}
                    <h1>This is Nav</h1>
                </div>
            </div>
        </div>
    );
};


export default CustomMenu;