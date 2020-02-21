import React from 'react';
import WalletTransfer from './mainPageComponents/WalletTransfer';
import TransferHistory from './mainPageComponents/TransferHistory';
import History from './mainPageComponents/History';
import axios from 'axios';

class MainPage extends React.Component {

    state = {
        user: null,
        errStatus: {
            status: false,
            errMessage: ''
        }
    };

    componentDidMount() {
        axios({
            url: 'http://localhost:3005/users/account',
            method: 'GET',
            headers: {
                jwttoken: localStorage.getItem('codeoToken')
            }
        })
        .then(({data}) => {
            this.setState({user: data.user});
        })
        .catch(err => {
            this.setState({errStatus: {
                status: true,
                errMessage: err.response.data.message
            }})
        })
    };

    render() {
        return (
            <>
                <div className="page-wrapper">
                    <div className="page-content">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-lg-7 mt-4">
                                    <WalletTransfer user={this.state.user} />
                                </div>

                                <div className="col-lg-5 mt-4">
                                    <TransferHistory />
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
            </>
        )
    };


};

export default MainPage;