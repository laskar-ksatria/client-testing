import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';


//Router
import { Link } from 'react-router-dom';

//Context
import { urlContext } from '../context';


export default function Register() {
    
    let baseUrl = useContext(urlContext);

    const [registerData, setRegisterData] = useState({name: '', email: '', password: '', confirm_password: ''});
    
    const handleChange = (e) => {
        setRegisterData({...registerData, [e.target.name]: e.target.value});
    };

    const onRegister = (e) => {
        e.preventDefault();
        Swal.showLoading();
        axios({
            url: `${baseUrl}/users`,
            method: 'POST',
            data: {
                name: registerData.name,
                email: registerData.email,
                password: registerData.password,
                confirm_password: registerData.confirm_password
            }
        })
        .then(({data}) => {
            Swal.close();
            Swal.fire({
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 3000
              });
            setRegisterData({name: '', email: '', password: '', confirm_password: ''})
        })
        .catch(err => {
            Swal.close();
            Swal.fire({
                icon: 'error',
                title: err.response.data.message,
                showConfirmButton: false,
                timer: 3000
              });
        });
    };


    return (
        <RegisterTemplate handleChange={handleChange} onRegister={onRegister} registerData={registerData} />
    )
};


//Template;

function RegisterTemplate(props) {


    return (
        <div className="account-body accountbg">
        <div className="row vh-100 bg-city">
            <div className="col-md-6 hidden-sm align-self-center">
                <p align="center">
                    <img src="../assets/images/coins/codeoku.png" alt="hallo" width="50%" className="hidden-sm" />
                </p>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 align-self-center">
                <div className="auth-page ml-10-per">
                    <div className="card auth-card shadow-lg custom-cardnew" style={{marginBottom: 0}}>



            {/* CARD ========================================== */}
                        <div className="card-body">
                            <div className="px-3">
                                <div className="auth-logo-box">
                                    {/* <Link to="/MyWallet" className="logo logo-admin"><img src="../assets/images/logo_codeo.png" height={55} alt="logo" className="auth-logo" /></Link> */}
                                    <div className="logo logo-admin"><img src="../assets/images/logo_codeo.png" height={55} alt="logo" className="auth-logo" /></div>

                                
                                </div>
                                {/*end auth-logo-box*/}
                                <div className="text-center auth-logo-text">
                                    <h4 className="mt-0 mb-2 mt-4">Register</h4>
                                </div>
                                {/*end auth-logo-text*/}

                                {/* FORM============================== */}




                                        <RegisterForm registerData={props.registerData} handleChange={props.handleChange} onRegister={props.onRegister} />




                                {/*end form*/}
                            </div>
                            <div className="account-social text-center">
                                <h6 className="my-4">Or Signup With</h6>
                                <ul className="list-inline">
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
                            {/*end account-social*/}
                            <div className="m-3 text-center text-muted" style={{display: 'none'}}>
                                <p>
                                    {/* <a href="" className="text-primary ml-2" /> */}
                                </p>
                            </div>
                        </div>
            {/* CARD ========================================== */}
                    


                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end auth-page*/}
            </div>
            {/*end col*/}
            <div align="center" style={{width: '100%'}}>
                <span align="center">
                    ©2020 Five Angel Investment Limited - BVI
                </span>
            </div>
        </div>
        {/*end row*/}
    </div>
    )

};

function RegisterForm(props) {
    return (
    <form className="form-horizontal auth-form my-4" onSubmit={props.onRegister}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <div className="input-group mb-3">
                <span className="auth-form-icon">
                    <i className="dripicons-user" /> 
                    </span>
        {/* INPUT =========================================== */}   
                    <input value={props.registerData.name} onChange={props.handleChange} type="text" className='form-control frm-new' id="name" placeholder="Enter name" name="name" />
        {/* INPUT =========================================== */}   
            
            </div>
            {/* {errors.name && (<div className="invalid-feedback pesanerror">{errors.name}</div>)} */}
        </div>
        {/*end form-group*/}
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-group mb-3">
                <span className="auth-form-icon">
                    <i className="dripicons-mail" /> 
                </span>


    {/* INPUT =========================================== */}   
                <input value={props.registerData.email} onChange={props.handleChange} type="text" className='form-control frm-new' id="email" placeholder="Enter email" name="email"/>
    {/* INPUT =========================================== */}   

            </div>
            {/* {errors.email && (<div className="invalid-feedback pesanerror">{errors.email}</div>)} */}
        </div>
        {/*end form-group*/}
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-group mb-3">
                <span className="auth-form-icon">
                    <i className="dripicons-lock" /> 
                </span>


    {/* INPUT =========================================== */}
        <input value={props.registerData.password} onChange={props.handleChange} type="password" className='form-control frm-new' id="password" placeholder="Enter password" name="password" />
    {/* INPUT =========================================== */}
            
            </div>
            {/* {errors.password && (<div className="invalid-feedback pesanerror">{errors.password}</div>)} */}
        </div>
        {/*end form-group*/}
        <div className="form-group">
            <label htmlFor="password_confirm">Confirm Password</label>
            <div className="input-group mb-3">
                <span className="auth-form-icon">
                    <i className="dripicons-lock" /> 
                </span>


            {/* INPUT =========================================== */}
                <input value={props.registerData.confirm_password} onChange={props.handleChange} type="password" className='form-control frm-new' id="password_confirm" placeholder="Enter password" name="confirm_password"/>
            {/* INPUT =========================================== */}
            
            </div>
            {/* {errors.password_confirm && (<div className="invalid-feedback pesanerror">{errors.password_confirm}</div>)} */}
        </div>
        {/*end form-group*/}
        <div class="m-3 text-center text-muted">
            {/* <p class="">Already have an account ? <Link to="/login" class="text-primary ml-2">Log in</Link></p> */}
            <Link to="/">
                <p style={{cursor: 'pointer'}} class="">Already have an account ? <div class="text-primary ml-2"></div></p>
            </Link>
      </div>
        {/*end /div*/}
        <div className="form-group mb-0 row">
            <div className="col-12 mt-2">
                <button className="btn btn-primary btn-round btn-block waves-effect waves-light" type="submit">Register <i className="fas fa-sign-in-alt ml-1" /></button>
            </div>
            {/*end col*/}
        </div>
        {/*end form-group*/}
    </form>
    )
}