import React, { Component } from 'react';
import axios from 'axios';
import Header from './wallet/Header';
import MainPage from './wallet/MainPage';
import Footer from './wallet/Footer';


export default class MyWallet extends Component {

    state = {
        user: '',
        errStatus: {
            status: false,
            errMessage: ''
        }
    };

    testAgain = () => {
        console.log(this.props.user)
    }

    componentDidMount() {
        axios({
            url: 'http://localhost:3005/users/account',
            method: 'GET',
            headers: {
                jwttoken: localStorage.getItem('codeoToken')
            }
        })
        .then(({data}) => {      
            this.setState({user: data})
            // alert(this.state.user.name)        
        })
        .catch(err => {
            this.setState({err: {
                status: true,
                // errMessage: err.response.data.message
            }})
        })
    };

    render() {
        return (
            <div>
                <Header logout={this.props.logout}
                 username={this.state.user.name} 
                 />
                <MainPage />
                {/*              
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffa259', height: '700px'}}>
                    <h1 style={{color: 'black',cursor: 'pointer', marginTop: '370px'}} onClick={this.props.logout}>Main Content</h1>
                </div> */}

                <Footer />
            </div>
        )
    };


};
