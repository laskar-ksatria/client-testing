import React, { Component } from 'react';
import axios from 'axios';
import Header from './wallet/Header';
import MainPage from './wallet/MainPage';
import Footer from './wallet/Footer';
import Swal from 'sweetalert2';


export default class MyWallet extends Component {

    state = {
        user: '',
        errStatus: {
            status: false,
            errMessage: ''
        },
        successStatus: {
            status:true,
            message: ''
        },
        username: '',
        eth: '',
        account: '',
        url: 'http://localhost:3005'
    };

    generateToken = () => {
        Swal.showLoading();
        axios({
            url: `${this.state.url}/accounts/newAccount`,
            method: 'POST',
            headers: {
                jwttoken: localStorage.getItem('codeoToken')
            }
        })
        .then(({data}) => {
            this.setState({successStatus: {
                status: true,
                message: data.message
            }})
            this.setState({eth: data.userAccount.ETH});
            this.setState({account: data.userAccount});
            Swal.close();
        })
        .catch(err => {
            console.log(err);
            Swal.close();
            alert(err)
        })

    };

    getAccount = () => {
       alert('massuk get Account')
        axios({
            url: `${this.state.url}/accounts/myAccount`,
            method: 'GET',
            headers: {
                jwttoken: localStorage.getItem('codeoToken')
            }
        })
        .then(({data}) => {
            alert('masuk then dati get account')
            if (data === null) {
                alert('data null')
            }else {
                alert('data tidak null')
            }
        })
        .catch(err => {
            console.log(err);
        })
        // const account = await axios({
        //     url: `${this.state.url}/accounts/myAccount`,
        //     method: 'GET',
        //     headers: {
        //         jwttoken: localStorage.getItem('codeoToken')
        //     }
        // })
        // alert(account.ETH);
    }

    componentWillMount() {
        Swal.showLoading();
        axios({
            url: 'http://localhost:3005/users/account',
            method: 'GET',
            headers: {
                jwttoken: localStorage.getItem('codeoToken')
            }
        })
        .then(({data}) => {      
            Swal.close();
            this.setState({user: data});
            this.setState({username: data.name});
            if (data.account) {
                this.setState({eth: data.account.ETH});      
                this.setState({account: data.account});
            }
        })
        .catch(err => {
            this.setState({err: {
                status: true,
                // errMessage: err.response.data.message;
            }});
            Swal.close();
        })
    };

    render() {
        return (
            <div>
                <Header logout={this.props.logout}
                    username={this.state.username}
                 />
                <MainPage generateToken={this.generateToken} eth={this.state.eth} />
                
                {/*              
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffa259', height: '700px'}}>
                    <h1 style={{color: 'black',cursor: 'pointer', marginTop: '370px'}} onClick={this.props.logout}>Main Content</h1>
                </div> */}
                <Footer />
            </div>
        )
    };


};
