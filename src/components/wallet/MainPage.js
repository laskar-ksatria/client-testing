import React from 'react';
import WalletTransfer from './mainPageComponents/WalletTransfer';
import TransferHistory from './mainPageComponents/TransferHistory';
import History from './mainPageComponents/History';
import axios from 'axios';
import Swal from 'sweetalert2';

class MainPage extends React.Component {

    state = {
        user: '',
        errStatus: {
            status: false,
            errMessage: ''
        },
        account: null,
        url: 'http://localhost:3005',
        isAccount: false
    };

    getMyAccount = () => {
       
        axios({
            url: `${this.state.url}/accounts/myAccount`,
            method: 'GET',
            headers: {
                jwttoken: localStorage.getItem('codeoToken')
            }
        })
        .then(({data}) => {   
            this.setState({account: data});
            this.setState({isAccount: true})
        })
        .catch(err => {
            console.log(err);
        })
    };


    componentDidMount() {
        // Swal.showLoading()
        // axios({
        //     url: `${this.state.url}/users`,
        //     method: 'GET',
        //     headers: {
        //         jwttoken: localStorage.getItem('codeoToken')
        //     }
        // })
        // .then(({data}) => {
        //     this.setState({user: data});
        //     this.getMyAccount();
        //     Swal.close()
        // })
        // .catch(err => {
        //     this.setState({errStatus: {
        //         status: true,
        //         // errMessage: err.response.data.message
        //     }})
        // });
    };

    render() {
        return (
            <>
                <div className="page-wrapper">
                    <div className="page-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-7 mt-4">
                                    <WalletTransfer generateToken={this.props.generateToken} eth={this.props.eth}/>
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