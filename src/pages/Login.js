import React, { useState, useContext } from 'react';
import axios from 'axios';
import { urlContext } from '../context';
import { Link,useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../auth';


export default function Login() {
    const baseUrl = useContext(urlContext)
    const [loginData, setLoginData] = useState({email: '', password: ''});

    let history = useHistory();

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    };

    const onLogin = (e) => {
        e.preventDefault();
        Swal.showLoading();
        axios({
            url: `${baseUrl}/users/login`,
            method: 'POST',
            data: {
                email: loginData.email,
                password: loginData.password
            }
        })
        .then(({data}) => {
            Swal.close();
              auth.login(() => {
                localStorage.setItem('codeoToken', data.token);
                history.push("/myWallet");
              })
        })
        .catch(err => {
            Swal.close();
            Swal.fire({
                icon: 'error',
                title: err.response.data.message,
                showConfirmButton: false,
                timer: 1500
              });
        })
    };

    return (
        <>
            <LoginTemplate 
                onLogin={onLogin} 
                handleChange={handleChange}
            />
        </>
    )
};



//Template

function LoginTemplate(props) {

    return(
        <>
        <div>
            <div className="account-body accountbg">
                {/* Log In page */}
                <div className="row vh-100 bg-city">
                    <div className="col-12 align-self-center">
                        <div className="auth-page">
                            <div className="card auth-card shadow-lg custom-cardnew">
                                <div className="card-body">
                                    <div className="px-3">
                                        <div className="auth-logo-box">
                                            {/* <Link to="/" className="logo logo-admin"><img src="./assets/images/logo_codeo.png" height={55} alt="logo" className="auth-logo" /></Link> */}
                                            <div className="logo logo-admin"><img src="./assets/images/logo_codeo.png" height={55} alt="logo" className="auth-logo" /></div>

                                        </div>{/*end auth-logo-box*/}
                                        <div className="text-center auth-logo-text">
                                            <h4 className="mt-0 mb-3 mt-5">Login</h4>
                                            <p className="text-muted mb-0" />
                                        </div>{/*end auth-logo-text*/}


                                        {/* FORM ================================================================ */}
                                       
                                        <LoginForm onLogin={props.onLogin} handleChange={props.handleChange} />

                                        {/* FORM ================================================================ */}


                                    </div>
                                </div>{/*end /div*/}
                                <div className="account-social text-center">
                                    <h6 className="my-4">Or Login With</h6>
                                    <ul className="list-inline mb-4">
                                        <li className="list-inline-item">
                                            <a href className>
                                                <i className="fab fa-facebook-f facebook" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href className>
                                                <i className="fab fa-twitter twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href className>
                                                <i className="fab fa-google google" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>{/*end card-body*/}
                        </div>{/*end card*/}
                    </div>{/*end auth-page*/}
                    <div align="center" style={{width: '100%'}}>
                        <span align="center">
                            ©2020 Five Angel Investment Limited - BVI
                        </span>
                    </div>
                </div>
                {/*end col*/} 
                {/*end row*/} 
                {/* End Log In page */}
            </div>

        </div>
        </>
    )

};

function LoginForm(props) {
  
    return (
        <form className="form-horizontal auth-form" onSubmit={props.onLogin}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-group mb-3">
                    <span className="auth-form-icon">
                                <i className="dripicons-mail" /> 
                            </span>


                    {/* INPUT ============================================ */}
                    <input type="text" name="email" className='form-control frm-new' id="email" placeholder="Enter email" onChange={props.handleChange} />
                    {/* INPUT ============================================ */}

                
                </div>
                {/* {errors.email && (<div className="invalid-feedback pesanerror" style={{display:'block !important'}}>{errors.email}</div>)} */}
            </div>{/*end form-group*/}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-group mb-3">
                    <span className="auth-form-icon">
                                <i className="dripicons-lock" /> 
                            </span>


                    {/* INPUT ============================================ */}
                    <input type="password" name="password" className='form-control frm-new' id="password" placeholder="Enter password" onChange={props.handleChange} />
                    {/* INPUT ============================================ */}

                
                </div>
                {/* {errors.password && (<div className="invalid-feedback pesanerror">{errors.password}</div>)} */}
            </div>{/*end form-group*/}
            <div className="form-group  mb-0 row mt-4">
                <div className="col-sm-6 text-left">
                    <Link to="/register">
                        <div className="text-muted font-13" style={{cursor: 'pointer'}}> Don't have account ?</div>
                    </Link>
                </div>
                <div className="col-sm-6 text-right">
                    <div className="text-muted font-13" style={{cursor: 'pointer'}}><i className="dripicons-lock" /> Forgot password?</div>
                </div>
                {/*end col*/}
            </div>
            {/*end form-group*/}
            <div className="form-group mb-0 row mt-3">
                <div className="col-12 mt-2" align="center">
                    <button className="btn btn-primary btn-round btn-block waves-effect waves-light" type="submit" style={{width: '100%'}}>Login <i className="fas fa-sign-in-alt ml-1" /></button>
                </div>{/*end col*/}
            </div> {/*end form-group*/} {/*end form*/}
        </form>

    )

};