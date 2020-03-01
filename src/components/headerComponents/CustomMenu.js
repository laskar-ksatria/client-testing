import React from 'react'

//Router
import { Link } from 'react-router-dom';

const CustomMenu = () => {
    return (
    <div className="navbar-custom-menu" style={{backgroundColor: '#0f4c75'}}>
        <div className="container-fluid">
            <div id="navigation">
                <NavigationMenu />
            </div>
        </div>
    </div>
    )
};


const NavigationMenu = () => {
    return (
    <ul className="navigation-menu">
        
        <li className="has-submenu" style={{cursor: 'pointer'}}>
            <Link to="/mywallet">
                <i className="dripicons-view-thumb" /><span> Dashboard </span>
            </Link>
            {/* <a href="#">
                <i className="dripicons-view-thumb" /><span> Dashboard </span>
            </a> */}
        </li>
        <li className="has-submenu" style={{cursor: 'pointer'}}>
            {/* <Link to="/">
                <i className="dripicons-view-thumb" /><span> Exchange </span>
            </Link> */}
            <a href="#">
                <i className="dripicons-view-thumb" /><span> Exchange </span>
            </a>
        </li>
        {/*end has-submenu*/}
        {/* <li className="has-submenu">
            <a>
                <svg className="nav-svg" version="1.1" id="Layer_5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                    <g>
                        <path className="svg-primary" d="M376,192h-24v-46.7c0-52.7-42-96.5-94.7-97.3c-53.4-0.7-97.3,42.8-97.3,96v48h-24c-22,0-40,18-40,40v192c0,22,18,40,40,40
                                    h240c22,0,40-18,40-40V232C416,210,398,192,376,192z M270,316.8v68.8c0,7.5-5.8,14-13.3,14.4c-8,0.4-14.7-6-14.7-14v-69.2
                                    c-11.5-5.6-19.1-17.8-17.9-31.7c1.4-15.5,14.1-27.9,29.6-29c18.7-1.3,34.3,13.5,34.3,31.9C288,300.7,280.7,311.6,270,316.8z
                                        M324,192H188v-48c0-18.1,7.1-35.1,20-48s29.9-20,48-20s35.1,7.1,48,20s20,29.9,20,48V192z" />
                    </g>
                </svg>
                <span> Settings </span>
            </a>
            <ul className="submenu">
                <li> */}
                    {/* <Link to="/login"><i className="dripicons-enter" />Log In</Link> */}
                    {/* <div><i className="dripicons-enter" />Log In</div>
                </li>
                <li> */}
                    {/* <Link to="/register"><i className="dripicons-pencil" />Register</Link> */}
                    {/* <div><i className="dripicons-pencil" />Register</div> */}
                {/* </li>
                <li> */}
                    {/* <Link to="/recover"><i className="dripicons-clockwise" />Recover Password</Link> */}
                    {/* <div><i className="dripicons-clockwise" />Recover Password</div> */}
                {/* </li> */}

                {/*
                <li><a href="authentication/auth-lock-screen.html"><i class="dripicons-lock"></i>Lock Screen</a></li>
                <li><a href="authentication/auth-404.html"><i class="dripicons-warning"></i>Error 404</a></li>
                <li><a href="authentication/auth-500.html"><i class="dripicons-wrong"></i>Error 500</a></li>*/}
            {/* </ul> */}
        {/* </li> */}
        {/*end has-submenu*/}
        {/*
        <li className="has-submenu">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
                <span className="fa fa-database" />
                <span> Popup </span>
            </a>
        </li>*/}
        {/*end has-submenu*/}
    </ul>
    )
};


export default CustomMenu;

