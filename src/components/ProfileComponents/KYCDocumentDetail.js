import React from 'react'

function KYCDocumentDetail() {
    return (
        <div className="tab-pane fade" id="general_detail">
            <div className="row">
                <div className="col-lg-12" style={{margin: 0, padding: '8px'}}>

                    <KYCDocumentForm />
                
                </div> {/*end col*/}
            </div>{/*end row*/}
        </div>
    )
}

const KYCDocumentForm = (props) => {
    return(
        <div className="card">
            <div className="card-body col-lg-8 mx-auto">
                <h3 className="mb-4" align="center">KYC Document</h3>
                <form method="post" className="card-box">
                    <div className="form-group row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="far fa-user" /></span>
                                </div>
                                <input type="text" id="example-input1-group1" name="id_ic_number" className="form-control" placeholder="ID/IC Number" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <select className="form-control">
                                <option value>Document Type</option>
                                <option value={1}>ID/IC</option>
                                <option value={2}>Driver License</option>
                                <option value={3}>Passport</option>
                                <option value={4}>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <select className="form-control">
                                <option value>Country Issued</option>
                                <option value={1}>WNI</option>
                                <option value={2}>WNA</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="customFile" />
                                <label className="custom-file-label" htmlFor="customFile">Upload Document</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <input type="text" placeholder="HOME ADDRESS" className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <input type="text" placeholder="CITY" className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <input type="text" placeholder="ZIP" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-phone" /></span>
                                </div>
                                <input type="text" id="example-input2-group2" name="phone_1" className="form-control" placeholder="Phone Number 1" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-phone" /></span>
                                </div>
                                <input type="text" id="example-input3-group3" name="phone_2" className="form-control" placeholder="Phone Number 2 (Optional)" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <button className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0">Submit KYC</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default KYCDocumentDetail;