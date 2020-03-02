import React from 'react';
import CardDataBody from '../components/ProfileComponents/CardDataBody';
import SummaryDetail from '../components/ProfileComponents/SummaryDetail';

function Profile(){
    return (
        <div>
            <div className="page-wrapper">
                {/* Page Content*/}
                <div className="page-content">
                    <div className="container-fluid">
                        {/* Page-Title */}
                        
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <div className="float-right">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                                            <li className="breadcrumb-item"><a href="javascript:void(0);">User</a></li>
                                            <li className="breadcrumb-item active">Profile</li>
                                        </ol>{/*end breadcrumb*/}
                                    </div>{/*end /div*/}
                                    <h4 className="page-title">Profile</h4>
                                </div>{/*end page-title-box*/}
                            </div>{/*end col*/}
                        </div>{/*end row*/} {/* end page title end breadcrumb */}
                        
                        <CardData/>
                        
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-content detail-list" id="pills-tabContent">

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
                                    </div>{/*end fa detail */}
                                
                                </div>{/*end tab-content*/}
                            </div>{/*end col*/}
                        </div>{/*end row*/}
                    
                    </div>{/* container */}
                </div>
                {/* end page content */}
            </div>
            {/* end page-wrapper */}
        </div>
    );
};

const CardData = (props) => {
    return(
        <div className="row">
            <div className="col-12">
                <div className="card">
                
                    <CardDataBody/>

                    <CardDataNavigation/>

                </div>
            </div>
        </div>
    )
};

const CardDataNavigation = (props) => {
    return (
        <>
            <div className="card-body">
                <ul className="nav nav-pills mb-0" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="summary_detail_tab" data-toggle="pill" href="#summary_detail">Summary</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="general_detail_tab" data-toggle="pill" href="#general_detail">KYC Document</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="financial_detail_tab" data-toggle="pill" href="#financial_detail">Financial &amp; Bank</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="fa_detail_tab" data-toggle="pill" href="#fa_detail">2 FA</a>
                    </li>
                </ul>
            </div>
            <CardDataContent/>
        </>
    )
};

const CardDataContent = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="tab-content detail-list" id="pills-tabContent">
                    <SummaryDetail/>
                </div>
            </div>
        </div>
    )
};

export default Profile;