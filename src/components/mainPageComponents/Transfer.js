import React from 'react';
import Swal from 'sweetalert2';
// import axios from 'axios';

class TransferHistory extends React.Component {

    state = {
        amount: 0,
        address: '',
        total: 0,
        fee: 0.30,
        url: 'http://35.240.211.254'
    };

    onChangeAmount = (e) => {
        this.setState({amount: Number(e.target.value)});
        this.setState({total: Number(e.target.value) - (Number(e.target.value) * (this.state.fee / 100))});
    };

    onChangeAddress = (e) => {
        let addressCodeo = e.target.value;
        this.setState({address: addressCodeo});
    };

    onSend = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
            title: '<h3>Transfer Confirmation</h3>',
            text: this.state.amount,
            html:
                  '<div class="message-trf-confirm">' +
                    '<div class="row" style="text-align:left;">' +
                        '<div class="col-md-4 mb-3">' +
                            'Transfer To :' +
                        '</div>' +
                        
                        '<div class="col-md-8">' +
                            '<span class="text-warning">' +
                                `${this.state.address}` +
                            '</span>' +
                        '</div>' +

                        '<div class="col-md-4">' +
                            'Amount :' +
                        '</div>' +

                        '<div class="col-md-8">' +
                            '<span class="text-success">' +
                                `${this.state.total}` +
                            '</span>' +
                        '</div>' +
                    '</div>' +
                  '</div>',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            imageUrl: '../assets/images/codeoku.png',
            imageHeight: 80,
            reverseButtons: true
        })
        .then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire(
                    'Send!',
                    'Code Token Has been Sent',
                    'success'
                );
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    };

    render() {
        return (
            <>
            <div className="card card-new-op">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <h3>Transfer Balance</h3>
                            <form className="form-horizontal">
                                <div className="form-group mb-0">
                                    <label className="full-left">Receiver</label>
                                    <div className="input-group mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-light" id="basic-addon1">Address</span>
                                        </div>
                                        <input type="text" onChange={this.onChangeAddress} className="form-control" placeholder="0-X" aria-label="Address" aria-describedby="basic-addon1" />
                                    </div>
                                    <br />
                                    <label className="full-left">Amount</label>
                                    <div className="input-group mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-light" id="basic-addon1">Codeo</span>
                                        </div>
                                        <input type="text" onChange={this.onChangeAmount} className="form-control" placeholder="CODEO" aria-label="CODEO" aria-describedby="basic-addon1" />
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-light" id="basic-addon2">{this.state.fee}% Fee</span>
                                        </div>
                                    </div>
                                    <div className="box-result-cod mt-3">
                                        <span>The Receive Will Get {this.state.total} CODEO</span>
                                    </div>
                                    <div className="mt-3 ml-auto" align="right">
                                        <button className="btn btn-success btn-sm btn-green-cus" type="button" onClick={this.onSend}>SEND NOW</button>
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
    }

};


export default TransferHistory;