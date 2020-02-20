import React from 'react';
import {TopBar} from './headerComponents/TopBar';
import CustomMenu from './headerComponents/CustomMenu';

class Header extends React.Component {
   

    render() {
        return (
            <>
                <div className="topbar">
                    <TopBar logout={this.props.logout} alertMe={this.props.alertMe} />
                    <CustomMenu />
                </div>
            </>
        )
    }



};


export default Header;