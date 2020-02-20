import React from 'react';
import NavigationMenu from './customMenu/NavigationMenu';



function CustomMenu(props) {



    return (
    
        <div className="navbar-custom-menu">
            <div className="container-fluid">
                <div id="navigation">
                    <NavigationMenu />
                </div>
            </div>
        </div>
       
    )


};


export default CustomMenu;