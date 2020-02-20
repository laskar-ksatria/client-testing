import React, { Component } from 'react';
import axios from 'axios';
import Header from './wallet/Header';


export default class MyWallet extends Component {

    state = {
        user: null,
        errStatus: {
            status: false,
            errMessage: ''
        }
    };


    alertMe = () => {
        alert('hallo this is from child')
    }

    componentDidMount() {
        axios({
            url: 'http://35.247.159.61/users',
            method: 'GET'
        })
        .then(({data}) => {
            this.user = data;
        })
        .catch(err => {
            this.setState({err: {
                status: true,
                errMessage: err.response.data.message
            }})
        })
    };

    render() {
        return (
            <div>
                <Header logout={this.props.logout} alertMe={this.alertMe} />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffa259', height: '700px'}}>
                    <h1 style={{color: 'black',cursor: 'pointer', marginTop: '370px'}} onClick={this.props.logout}>Main Content</h1>
                </div>
            </div>
        )
    };


};
