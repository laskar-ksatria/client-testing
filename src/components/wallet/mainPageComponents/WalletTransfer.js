import React from 'react';
import axios from 'axios';
import { QRCode } from "react-qr-svg";
// import Swal from 'sweetalert2';

class WalletTransfer extends React.Component {
   
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
                                                        <QRCode 
                                                            bgColor="#FFFFFF"
                                                            fgColor="#000000"
                                                            level="Q"
                                                            style={{width: 256}}
                                                            // value={this.state.eth}
                                                            />
                                                        </div>
                                                        <div className="col-md-7 mt-1">
                                                            
                                                            <h5>Address</h5>
                                                            {/* <h6 className="mb-2">{this.state.eth} */}
                                                          
                                                            {this.props.eth !== '' ?  <h5 className="mb-2">{this.props.eth}<button className="btn btn-primary btn-xs btn-silver-cus" type='button'>Copy</button></h5> : <button onClick={this.props.generateToken} type="button" className="btn btn-success btn-xs btn-silver-cus">Generate</button>}
                                                           {/* <button onClick={this.props.generateToken} className="btn btn-success btn-xs btn-silver-cus">Generate</button> */}
                                                           {/* <h6 className="mb-2">{this.props.account.ETH}<button className="btn btn-primary btn-xs btn-silver-cus">Copy</button></h6><button onClick={this.props.generateToken} className="btn btn-success btn-xs btn-silver-cus">Generate</button>  */}
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