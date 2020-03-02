import React from 'react'

export const DropdownBankAccount = () => {
    return(
        <div className="card border mb-0 shadow-none">
            <div className="card-header p-0" id="headingOne">
                <h5 style={{margin: '15px'}}>
                            <label style={{color: '#FFF', width: '100%'}} className="mb-0">
                            <input type="radio" id="r11" name="occupation" defaultValue={1} required className="btn btn-link text-dark collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" /> Bank Account <img src="../assets/images/bank/bca.png" width="30px" /> <img src="../assets/images/bank/mandiri.png" width="30px" />
                            </label>
                        </h5>
            </div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body col-lg-6 mx-auto">
                    <p className="mb-0 text-muted">
                    </p>
                    <h3 align="center">Bank Account</h3>
                    <form method="post" className="card-box">
                        <div className="form-group row">
                            <div className="col-md-4">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-credit-card" /></span>
                                    </div>
                                    <input type="text" id="example-input1-group1" name="bank_name" className="form-control" placeholder="Bank Name" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <select className="form-control">
                                    <option value>Country</option>
                                    <option value={1}>Indonesia</option>
                                    <option value={2}>Singapore</option>
                                    <option value={3}>Malaysia</option>
                                    <option value={4}>Thailand</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <input type="text" placeholder="Swift Code" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input2-group2" name="account_holder_name" className="form-control" placeholder="Account Holder Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder="Account Number" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <button className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0">Save Changes</button>
                            </div>
                        </div>
                    </form>
                    <p />
                </div>
            </div>
        </div>
    )
}

export const DropdownCreditCard = () => {
    return(
        <div className="card mb-0 border shadow-none">
            <div className="card-header p-0" id="headingTwo">
                <h5 style={{margin: '15px'}}>
                            <label style={{color: '#FFF', width: '100%'}} className="mb-0">
                            <input type="radio" id="r11" name="occupation" defaultValue={1} required className="btn btn-link text-dark collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne" /> Credit Card <img src="../assets/images/bank/mastercard.png" width="30px" /> <img src="../assets/images/bank/visa.png" width="30px" />
                            </label>
                        </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body col-lg-6 mx-auto">
                    <p className="mb-0 text-muted">
                    </p>
                    <h3 align="center">Credit Card</h3>
                    <form method="post" className="card-box bill-form">
                        <div className="card-wrapper mb-4" />
                        <div className="form-group row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input1-group1" name="name" className="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input2-group2" name="surname" className="form-control" placeholder="Surname" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <input type="email" id="example-input3-group3" name="credit_card" className="form-control" placeholder="Credit Card Number" />
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fab fa-cc-visa" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6">
                                <input type="text" placeholder="Exp Date" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <input type="number" placeholder="CVC" className="form-control" name="cvc" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <button className="btn btn-primary btn-sm px-4 float-right mb-0">Save Changes</button>
                            </div>
                        </div>
                    </form>
                    <p />
                </div>
            </div>
        </div>
    )
}

export const DropdownCryptoDigitalAsset = () => {
    return(
        <div className="card mb-0 border shadow-none">
            <div className="card-header p-0" id="headingThree">
                <h5 style={{margin: '15px'}}>
                            <label style={{color: '#FFF', width: '100%'}} className="mb-0">
                            <input type="radio" id="r11" name="occupation" defaultValue={1} required className="btn btn-link text-dark collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseOne" /> Crypto / Digital Asset  <img src="../assets/images/bank/bitcoin.png" width="20px" />  <img src="../assets/images/bank/paypal.png" width="20px" />  <img src="../assets/images/bank/ethereum.png" width="20px" />
                            </label>
                        </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body col-lg-6 mx-auto">
                    <p className="mb-0 text-muted">
                    </p>
                    <h3 align="center">Crypto / Digital Asset</h3>
                    <form method="post" className="card-box">
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input4-group4" name="bitcoin" className="form-control" placeholder="Paypal Email" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input4-group4" name="bitcoin" className="form-control" placeholder="Address Bitcoin" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input4-group4" name="bitcoin" className="form-control" placeholder="Address Ethereum" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <button className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0">Save Changes</button>
                            </div>
                        </div>
                    </form>
                    <p />
                </div>
            </div>
        </div>
    )
}