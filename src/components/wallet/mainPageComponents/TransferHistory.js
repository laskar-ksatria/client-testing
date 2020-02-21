import React from 'react';


class TransferHistory extends React.Component {

    state = {

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
                                        <input type="text" className="form-control" placeholder="0-X" aria-label="Address" aria-describedby="basic-addon1" />
                                    </div>
                                    <br />
                                    <label className="full-left">Amount</label>
                                    <div className="input-group mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-light" id="basic-addon1">Codeo</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="CODEO" aria-label="CODEO" aria-describedby="basic-addon1" />
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-light" id="basic-addon2">0.30% Fee</span>
                                        </div>
                                    </div>
                                    <div className="box-result-cod mt-3">
                                        <span>The Receive Will Get 9.8 CODEO</span>
                                    </div>
                                    <div className="mt-3 ml-auto" align="right">
                                        <button className="btn btn-success btn-sm btn-green-cus">SEND NOW</button>
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