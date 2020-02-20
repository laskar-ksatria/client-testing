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

                <Header />
                <h1 style={{cursor: 'pointer'}} onClick={this.props.logout}>Logout</h1>
            </div>
        )
    };


};
