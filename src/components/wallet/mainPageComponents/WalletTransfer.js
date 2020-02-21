import React from 'react';
import axios from 'axios';
// import { QRCode } from "react-qr-svg";
import Swal from 'sweetalert2';

class WalletTransfer extends React.Component {

    state = {
        eth: '',
        isAccount: false,
        errStatus: {
            status: false,
            errMessage: ''
        }
    };

    componentDidMount() {
        this.getToken();
    };

    changeStatus = () => {
        this.setState({isAccount: true});
        alert(this.state.isAccount)
    }

    getToken = () => {
        Swal.showLoading();
        axios({
            url: 'http://localhost:3005/accounts/eth',
            method: 'GET',
            headers: {
                jwttoken: localStorage.getItem('codeoToken')
            }
        })
        .then(({data}) => {
            Swal.close();
            this.setState({eth: data.eth});
            this.changeStatus();
        })
        .catch(err => {
            Swal.close();
            this.setState({errStatus: {
                status: true,
                errMessage: err.response.data.message
            }})
        })
    }

    generateToken = () => {
        Swal.showLoading();
        axios({
            url: 'http://localhost:3005/accounts/newAccount',
            method: 'POST',
            headers: {
                jwttoken: localStorage.getItem('codeoToken')
            }
        })
        .then(({data}) => {
            this.setState({err: {status: false}});
            this.setState({eth: data.eth});
            this.getToken();
            Swal.close();
        })
        .catch(err => {
            Swal.close();
            this.setState({isAccount: false});
            this.setState({errStatus: {
                status: true,
                errMessage: err.response.data.message
            }});
        })
    };

    render() {
        return (
            <>
                <div className="card card-new-op">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3>Wallet Transfer</h3>
                                        <form className="form-horizontal">
                                            <div className="form-group mb-0">
                                                <div className="box-result-cod col-md-12 mt-3">
                                                    <div className="row">
                                                        <div className="col-md-5 barcodeQR mt-2 mb-2">
                                                            <img src="./assets/images/QRbarcode.png" width="100%" alt="Wallet transfer" />
                                                        </div>
                                                        <div className="col-md-7 mt-1">
                                                            <h5>Address</h5>
                                                            {/* <h6 className="mb-2">{this.state.eth} */}
                                                            {this.state.isAccount ? <h6 className="mb-2">{this.state.eth} <button className="btn btn-primary btn-xs btn-silver-cus">Copy</button></h6> : <button onClick={this.generateToken} className="btn btn-success btn-xs btn-silver-cus">Generate</button> }
                                                            
                                                            
                                                            {/* <button className="btn btn-primary btn-xs btn-silver-cus">Copy</button></h6><button onClick={this.generateToken} className="btn btn-success btn-xs btn-silver-cus">Generate</button> */}
                                                            <h5>Balance</h5>
                                                            <h3 className="mb-2">0000 CODEO</h3>
                                                            <h5>Asset Estimation</h5>
                                                            <h3 className="mb-2">$0000</h3>
                                                            <button className="btn btn-warning full-right btn-orange-dark">Topup</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end form-group*/}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/*end card-body*/}
                    </div>
                    {/*end card*/}
            </>
        )
    };
};


export default WalletTransfer;