import React, { useContext, useState, useEffect } from 'react';

//Router
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

//Dependency
import axios from 'axios';

//Components
import TopBar from '../components/headerComponents/TopBar';
import CustomMenu from '../components/headerComponents/CustomMenu';
import Wallet from '../components/mainPageComponents/Wallet';
import History from '../components/mainPageComponents/History';
import Transfer from '../components/mainPageComponents/Transfer';
import Profile from '../pages/Profile';

// Context 
import { urlContext, userContext } from '../context';
 
import Swal from 'sweetalert2';

export default function MyWallet() {
    
    let { path } = useRouteMatch();

    let baseUrl = useContext(urlContext);

    const [user, setUser] = useState({});

    const [ETH, setETH] = useState('');


    useEffect(() => {
        Swal.showLoading();
        axios({
            url: `${baseUrl}/users/account`,
            method: 'GET',
            headers: {
                jwttoken: localStorage.getItem('codeoToken')
            },
        })
        .then(({data}) => {
            setUser(data);
            setETH(data.account.ETH);
            Swal.close();
        })
        .catch(err => {
            Swal.close();
            console.log(err);
        })

    }, [])

    return(

        <div>
            <userContext.Provider value={user}>

                <Header/>
                
            <Switch>
                <Route exact path={path}>
                    <MainPage  ETH={ETH}/>
                </Route>
                <Route path={`${path}/profile`}>
                    <Profile />
                </Route>
            </Switch>

                    <Footer />

            </userContext.Provider>
        </div>
   
    )

};


const Header = (props) => {
    return (
        <div className="topbar">
            <TopBar />
            <CustomMenu />
        </div>
    )
};


const MainPage = (props) => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 mt-4">
                           
                            <Wallet ETH={props.ETH} />

                        </div>
                        <div className="col-lg-5 mt-4">
                            
                            <Transfer />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <History />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const Footer = () => {
    return (
        <div>
            <div>
                <footer className="footer text-center text-sm-left">
                    <div className="boxed-footer">
                    © 2020 Five Angels Investment Limited
                    <span className="text-muted d-none d-sm-inline-block float-right">
                        Powered <i className="mdi mdi-heart text-danger" /> by Codeo Token
                    </span>
                    </div>
                </footer>
            </div>
        </div>
    )
};