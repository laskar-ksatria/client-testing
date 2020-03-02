import React from 'react'

function SummaryDetail() {
    return (
    <div className="tab-pane fade show active" id="summary_detail">
        <div className="row">
            
            <div className="col-lg-4">
                <CardLogHistory/>
            </div>

            <div className="col-lg-8">
                <CardSummary/>
            </div>

        </div>
    </div>
    )
}

const CardLogHistory = (props) => {
    return(
        <div className="card">
            <div className="card-body">
                <h4 className="header-title mt-0 mb-3">Log History</h4>
                <div className="slimscroll education-activity">
                    <div className="activity">
                        <i className="mdi mdi-school icon-success" />
                        <div className="time-item">
                            <div className="item-info">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="m-0">University</h6>
                                    <span className="text-muted">Oct-2009 to Oct-2011</span>
                                </div>
                                <p className="text-muted mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                    <a href="#" className="text-info">[more info]</a>
                                </p>
                                <div>
                                    <span className="badge badge-soft-secondary">Design</span>
                                    <span className="badge badge-soft-secondary">HTML</span>
                                    <span className="badge badge-soft-secondary">Css</span>
                                </div>
                            </div>
                        </div>
                        <i className="mdi mdi-medal icon-pink" />
                        <div className="time-item">
                            <div className="item-info">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="m-0">Bachelor of Arts</h6>
                                    <span className="text-muted">Oct-2006 to Oct-209</span>
                                </div>
                                <p className="text-muted mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                    <a href="#" className="text-info">[more info]</a>
                                </p>
                                <div>
                                    <span className="badge badge-soft-secondary">Python</span>
                                    <span className="badge badge-soft-secondary">Django</span>
                                </div>
                            </div>
                        </div>
                        <i className="mdi mdi-book-open-page-variant icon-purple" />
                        <div className="time-item">
                            <div className="item-info">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="m-0">Secondary</h6>
                                    <span className="text-muted">Oct-2003 to Oct-2006</span>
                                </div>
                                <p className="text-muted mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                    <a href="#" className="text-info">[more info]</a>
                                </p>
                            </div>
                        </div>
                        <i className="mdi mdi-lead-pencil icon-warning" />
                        <div className="time-item">
                            <div className="item-info">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="m-0">Primary</h6>
                                    <span className="text-muted">Oct-1996 to Oct-2003</span>
                                </div>
                                <p className="text-muted mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                    <a href="#" className="text-info">[more info]</a>
                                </p>
                            </div>
                        </div>
                    </div>{/*end activity*/}
                </div>{/*end education-activity*/}
            </div> {/*end card-body*/}
        </div>
    )
}

const CardSummary = (props) => {
    return(
        <div className="card">
            <div className="card-body">
                <h4 className="header-title mt-0 mb-3">Summary</h4>
                <div className="row mb-5">
                    <div className="col-md-6">
                        <h5 align="center">Bank Account</h5>
                        <div style={{border: '1px dashed #FFF', padding: '10px'}}>
                            <dl className="row mb-0">
                                <dt className="col-md-5">Bank Name</dt>
                                <dd className="col-md-7">: BCA (Bank Central Asia).</dd>
                                <dt className="col-md-5">Swift Code</dt>
                                <dd className="col-md-7">: CENAIDJA</dd>
                                <dt className="col-md-5">Account Name</dt>
                                <dd className="col-md-7">: Ivan Juliant</dd>
                                <dt className="col-md-5">Account Number</dt>
                                <dd className="col-md-7">: 7300247657</dd>
                                <dt className="col-md-5">Country</dt>
                                <dd className="col-md-7 mb-0">: Indonesia</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 align="center">Credit Card</h5>
                        <p align="center" className="mb-0 mt-5">
                            <button type="button" className="btn btn-xl btn-primary btn-round waves-effect waves-light"><i className="mdi mdi-credit-card-plus mr-2" />Add Credit Card</button>
                        </p>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <h5 align="center">Crypto / Digital Asset</h5>
                        <p align="center" className="mb-0">
                            <button type="button" className="btn btn-xl btn-success btn-round waves-effect waves-light"><i className="mdi mdi-credit-card-plus mr-2" />Add Crypto / Digital Asset</button>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h5 align="center">2 FA</h5>
                        <p align="center" className="mb-0">
                            <button type="button" className="btn btn-xl btn-danger btn-round waves-effect waves-light"><i className="mdi mdi-lock-plus mr-2" />Create 2 FA</button>
                        </p>
                    </div>
                </div>
            </div>{/*end card-body*/}
        </div>
    )
}

export default SummaryDetail;