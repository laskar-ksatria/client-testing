import React, { useState, useContext, useEffect }from 'react';
import axios from 'axios';
import { QRCode } from "react-qr-svg";
import {CopyToClipboard} from 'react-copy-to-clipboard';

//Context
import { userContext } from '../../context';
import { urlContext } from '../../context';

import Swal from 'sweetalert2';

function Wallet (props) {

    let user = useContext(userContext);
    let baseUrl = useContext(urlContext);
    let Barcode;

    const [textCopied, setTextCopied] = useState(false);

    const generateToken = () => {
        Swal.showLoading();
        axios({
            url: `${baseUrl}/accounts/newAccount`,
            method: 'POST',
            headers: {
                jwttoken: localStorage.getItem('codeoToken')
            }
        })
        .then(({data}) => {
            Swal.close();
            Swal.fire({
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(err => {
            Swal.close();
            Swal.fire({
                icon: 'error',
                title: err.response.data.message,
                showConfirmButton: false,
                timer: 1500
              })
        })
    };


    if (user.account) {
        Barcode = <QRCode bgColor="#FFFFFF" fgColor="#000000" level="Q" style={{width: 256}} value={user.account.ETH} />
    }else {
        Barcode = <div className="default-qr-users d-block"><img src="../assets/images/qr.jpg" /></div>;
    };

    return (
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
                                        {Barcode}
                                    </div>
                                    <div className="col-md-7 mt-1">
                                        
                                        <h5>Address</h5>
                                        {/* <h6 className="mb-2">{this.state.eth} */}

                                        {props.ETH != '' ?  
                                            <h5 className="mb-2" value={props.ETH}>
                                                {props.ETH}
                                            
                                            <CopyToClipboard text={props.ETH} 
                                            onCopy={() => setTextCopied(true)}>
                                                <button className="btn btn-primary btn-xs btn-silver-cus" type='button'>
                                                    Copy
                                                </button>
                                            </CopyToClipboard>
                                            
                                            </h5> : 
                                            <button onClick={generateToken}  type="button" className="btn btn-success btn-xs btn-silver-cus">
                                                Generate
                                            </button>
                                        }
                                    {/* <button onClick={this.props.generateToken} className="btn btn-success btn-xs btn-silver-cus">Generate</button> */}
                                    {/* <h6 className="mb-2">{this.props.account.ETH}<button className="btn btn-primary btn-xs btn-silver-cus">Copy</button></h6><button onClick={this.props.generateToken} className="btn btn-success btn-xs btn-silver-cus">Generate</button>  */}
                                        {/* <button className="btn btn-primary btn-xs btn-silver-cus">Copy</button></h6><button onClick={this.generateToken} className="btn btn-success btn-xs btn-silver-cus">Generate</button> */}
                                        <h5>Balance</h5>
                                        <h3 className="mb-2">0000 CODEO</h3>
                                        <h5>Asset Estimation</h5>
                                        <h3 className="mb-2">$0000</h3>
                                        <button className="btn btn-warning full-right btn-orange-dark" type="button">Topup</button>
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
    )

};


export default Wallet;