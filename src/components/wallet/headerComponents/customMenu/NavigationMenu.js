import React from 'react';


function NavigationMenu(props) {


    return (

        <ul className="navigation-menu">
                    <li className="has-submenu" style={{cursor: 'pointer'}}>
                        {/* <Link to="/">
                            <i className="dripicons-view-thumb" /><span> Dashboard </span>
                        </Link> */}
                        <div>
                            <i className="dripicons-view-thumb" /><span> Dashboard </span>
                        </div>
                    </li>
                    <li className="has-submenu" style={{cursor: 'pointer'}}>
                        {/* <Link to="/exchange"> */}
                        <a>
                            <svg className="nav-svg" version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                                <g>
                                    <ellipse className="svg-primary" transform="matrix(0.9998 -1.842767e-02 1.842767e-02 0.9998 -7.7858 3.0205)" cx={160} cy={424} rx={24} ry={24} />
                                    <ellipse className="svg-primary" transform="matrix(2.381651e-02 -0.9997 0.9997 2.381651e-02 -48.5107 798.282)" cx="384.5" cy={424} rx={24} ry={24} />
                                    <path d="M463.8,132.2c-0.7-2.4-2.8-4-5.2-4.2L132.9,96.5c-2.8-0.3-6.2-2.1-7.5-4.7c-3.8-7.1-6.2-11.1-12.2-18.6
                                                c-7.7-9.4-22.2-9.1-48.8-9.3c-9-0.1-16.3,5.2-16.3,14.1c0,8.7,6.9,14.1,15.6,14.1c8.7,0,21.3,0.5,26,1.9c4.7,1.4,8.5,9.1,9.9,15.8
                                                c0,0.1,0,0.2,0.1,0.3c0.2,1.2,2,10.2,2,10.3l40,211.6c2.4,14.5,7.3,26.5,14.5,35.7c8.4,10.8,19.5,16.2,32.9,16.2h236.6
                                                c7.6,0,14.1-5.8,14.4-13.4c0.4-8-6-14.6-14-14.6H189h-0.1c-2,0-4.9,0-8.3-2.8c-3.5-3-8.3-9.9-11.5-26l-4.3-23.7
                                                c0-0.3,0.1-0.5,0.4-0.6l277.7-47c2.6-0.4,4.6-2.5,4.9-5.2l16-115.8C464,134,464,133.1,463.8,132.2z" />
                                </g>
                            </svg>
                            <span> Exchange </span>
                        </a>

                        {/* </Link> */}
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


export default NavigationMenu;