import React, { useState, useContext } from 'react';

//Router
import { useHistory, useRouteMatch, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

//auth;
import auth from '../../../auth';

//Context
import { userContext } from '../../../context';

export const TopBarRight = (props) => {

    return (
        <>
          <ListUnstyled  />
        </>
    )
};


function AuthOne(props) {
    return (
        <>
           <li className="dropdown notification-list">
                <button style={{backgroundColor: '#1c233f', border: 'none'}} className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                    <i className="dripicons-bell noti-icon" />
                    <span className="badge badge-danger badge-pill noti-icon-badge">2</span>
                </button>
                <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                    {/* item*/}
                    <h6 className="dropdown-item-text">
                    Notifications (18)
                </h6>
                    <div className="slimscroll notification-list">
                        {/* item*/}
                        <button className="dropdown-item notify-item active">
                            <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline" /></div>
                            <p className="notify-details">Your order is placed<small className="text-muted">Dummy text of the printing and typesetting industry.</small></p>
                        </button>
                        {/* item*/}
                        <button className="dropdown-item notify-item">
                            <div className="notify-icon bg-warning"><i className="mdi mdi-message" /></div>
                            <p className="notify-details">New Message received<small className="text-muted">You have 87 unread messages</small></p>
                        </button>
                        {/* item*/}
                        <button className="dropdown-item notify-item">
                            <div className="notify-icon bg-info"><i className="mdi mdi-glass-cocktail" /></div>
                            <p className="notify-details">Your item is shipped<small className="text-muted">It is a long established fact that a reader will</small></p>
                        </button>
                        {/* item*/}
                        <button className="dropdown-item notify-item">
                            <div className="notify-icon bg-primary"><i className="mdi mdi-cart-outline" /></div>
                            <p className="notify-details">Your order is placed<small className="text-muted">Dummy text of the printing and typesetting industry.</small></p>
                        </button>
                        {/* item*/}
                        <button className="dropdown-item notify-item">
                            guestNotificationLinks<p className="notify-details">New Message received<small className="text-muted">You have 87 unread messages</small></p>
                        </button>


                    </div>
                    {/* All*/}
                    {/* <button className="dropdown-item text-center text-primary">
                    View all <i className="fi-arrow-right" />
                    </button> */}
                </div>
            </li>   
        </>
    )
};

function AuthTwo(props) {

    let history = useHistory();

    let user = useContext(userContext);

    let { url } = useRouteMatch();

    const logout = () => {
        Swal.showLoading();
        auth.logout(() => {
            localStorage.removeItem('codeoToken')
            history.push('/');
        })
        Swal.close();
    };

    return (
        <>
            <li className="dropdown">
                <button style={{backgroundColor: '#1c233f', border: 'none'}} className="nav-link dropdown-toggle waves-effect waves-light nav-user pr-0" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                    <img src="./assets/images/picture1.jpg" alt="profile-user" className="rounded-circle" />
                    <span className="ml-1 nav-user-name hidden-sm" style={{color: 'white'}}> {user.name} <i className="mdi mdi-chevron-down" /> </span>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    {/* <Link to="Profile" className="dropdown-item" style={{cursor: 'pointer'}}>
                        <i className="dropicons-user text-muted mr-2"/>
                        Profile                        
                    </Link> */}
                    <div className="dropdown-item" to="/profile" style={{cursor: 'pointer'}}>
                        <Link to={`${url}/profile`}>
                            <i className="dripicons-user text-muted mr-2" />
                            Profile
                        </Link>
                    </div>
                    <button className="dropdown-item" type="button"><i className="dripicons-wallet text-muted mr-2" /> My Wallet</button>
                    <button className="dropdown-item" type="button"><i className="dripicons-gear text-muted mr-2" /> Settings</button>
                    {/*<a class="dropdown-item" href="#"><i class="dripicons-lock text-muted mr-2"></i> Lock screen</a>*/}
                    <div className="dropdown-divider" />
                    {/* <button className="dropdown-item" href="#" onClick={this.onLogout.bind(this)}><i className="dripicons-exit text-muted mr-2" />Logout</a> */}
                    <button className="dropdown-item" type="button" onClick={logout}><i className="dripicons-exit text-muted mr-2" /> Logout</button>
                
                </div>
            </li>
        </>
    )


};

function ListUnstyled(props) {

    const [country, setCountry] = useState('English');
    const [flag, setFlag] = useState('./assets/images/flags/us_flag.jpg')
    

    const language = (type) => {
        if (type === 'english') {      
            setCountry('English');
            setFlag('./assets/images/flags/us_flag.jpg');
        }else if (type === 'german') {
            setCountry('German');
            setFlag('./assets/images/flags/germany_flag.jpg');
        }else if (type === 'italia') {
            setCountry('Italia');
            setFlag('./assets/images/flags/italy_flag.jpg');
        }else if (type === 'french') {
            setCountry('French');
            setFlag('./assets/images/flags/french_flag.jpg');
        }else if (type === 'spanish') {
            setCountry('Spanish');
            setFlag('./assets/images/flags/spain_flag.jpg');
        }else if (type === 'russia') {
            setCountry('Russia');
            setFlag('./assets/images/flags/russia_flag.jpg');
        }
    };
    
    return (
        <>
            <ul className="list-unstyled topbar-nav float-right mb-0">
            <li className="hidden-sm">
                <div className="crypto-balance">
                    <div className="btc-balance mr-4">
                        <h5 className="m-0">CODEO/BTC</h5>
                        <h6 align="center" style={{margin: 0, marginTop: '3px'}}>0.0 BTC</h6>
                    </div>
                    <div className="btc-balance mr-4">
                        <h5 className="m-0">CODEO/ETH</h5>
                        <h6 align="center" style={{margin: 0, marginTop: '3px'}}>0.0 ETH</h6>
                    </div>
                    <div className="btc-balance mr-4">
                        <h5 className="m-0">CODEO/USD</h5>
                        <h6 align="center" style={{margin: 0, marginTop: '3px'}}>$0.0</h6>
                    </div>
                </div>
            </li>  

            <li className="hidden-sm">
                <button style={{backgroundColor: '#1c233f', border: 'none'}} className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown"  aria-haspopup="false" aria-expanded="false">
                
                    {country}
                
                <img src={flag} className="ml-2" height={16} alt="" /><i className="mdi mdi-chevron-down" /> 
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <button onClick={() => language('german')}  className="dropdown-item"><span> German </span><img src="./assets/images/flags/germany_flag.jpg" alt="" className="ml-2 float-right" height={14} /></button>
                    <button onClick={() => language('italia')}  className="dropdown-item"><span> Italian </span><img src="./assets/images/flags/italy_flag.jpg" alt="" className="ml-2 float-right" height={14} /></button>
                    <button onClick={() => language('french')}   className="dropdown-item"><span> French </span><img src="./assets/images/flags/french_flag.jpg" alt="" className="ml-2 float-right" height={14} /></button>
                    <button onClick={() => language('spanish')}  className="dropdown-item"><span> Spanish </span><img src="./assets/images/flags/spain_flag.jpg" alt="" className="ml-2 float-right" height={14} /></button>
                    <button onClick={() => language('russia')}  className="dropdown-item"><span> Russian </span><img src="./assets/images/flags/russia_flag.jpg" alt="" className="ml-2 float-right" height={14} /></button>
                    <button onClick={() => language('english')}  className="dropdown-item"><span> English </span><img src="./assets/images/flags/us_flag.jpg" alt="" className="ml-2 float-right" height={14} /></button>
                </div>
            </li>

            <AuthOne />
            <AuthTwo />

            </ul>
        </>
    )
};

