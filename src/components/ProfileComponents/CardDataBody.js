import React from 'react'

export default function CardDataBody() {
    return (
        <div className="card-body met-pro-bg">
            <div className="met-profile">
                <div className="row">
                    <div className="col-lg-6 align-self-center mb-3 mb-lg-0">
                        <div className="met-profile-main">
                            <div className="met-profile-main-pic">
                                <img src="./assets/images/picture1.jpg" alt="" className="rounded-circle" width="128px" />
                                <span className="fro-profile_main-pic-change">
                                                    <i className="fas fa-camera" />
                                                </span>
                            </div>
                            <div className="met-profile_user-detail">
                                <h5 className="met-user-name" style={{float: 'left'}}>Ivan Juliant </h5><span className="badge badge-success" style={{marginTop: '15px', marginLeft: '10px'}}><i className="fa fa-check" /> Verified</span>
                                <br />
                                <br />
                                <p className="mb-0 met-user-name-post" style={{float: 'left'}}>
                                    <label style={{float: 'left', width: '60px'}} className="mb-0">Email</label> : ivanjuliant30@gmail.com</p>
                                <br />
                                <p className="mb-0 met-user-name-post" style={{float: 'left'}}>
                                    <label style={{float: 'left', width: '60px'}} className="mb-0">Country</label> : Indonesia</p>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    <div className="col-lg-6">
                        <div className="mt-5" style={{float: 'right'}}>
                            
                                <i className="fa fa-edit" /> Edit Data
                            
                            
                                <i className="fa fa-edit" /> Change Password
                        
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end f_profile*/}
        </div>/*end card-data-body*/
    )
}
