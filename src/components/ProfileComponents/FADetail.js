import React from 'react'

function FADetail() {
    return (
        <div className="tab-pane fade" id="fa_detail">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <ul className="col container-filter categories-filter mb-0" id="filter">
                                    <li><a className="categories active" data-filter="*">STEP 1</a></li>
                                    <li><a className="categories" data-filter=".branding">STEP 2</a></li>
                                    <li><a className="categories" data-filter=".design">STEP 3</a></li>
                                    <li><a className="categories" data-filter=".photo">FINISH</a></li>
                                </ul>
                            </div>{/* End portfolio */}
                        </div>{/*end card-body*/}
                    </div>{/*end card*/}
                    <div className="card">
                        <div className="card-body">
                        </div>{/*end card-body*/}
                    </div>{/*end card*/}
                </div>{/*end col*/}
            </div>{/*end row*/}
        </div>
    )
}

export default FADetail;