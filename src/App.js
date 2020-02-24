import React from 'react';
import Login from './components/Login';
import MyWallet from './components/MyWallet';
import Register from './components/Register';
import Axios from 'axios';
import Swal from 'sweetalert2';

class App extends React.Component {

  state = {
    pages: {
      login: false,
      register: true,
      myWallet: false
    },
    email: '',
    password: '',
    user: {},
    isLogin: false,
    username: '',
    url: 'http://35.247.159.61'
  };
  
  loginShow = () => {
    this.setState({pages: {
      login: true,
      register: false,
      myWallet: false
    }})
  };

  registerShow = () => {
    this.setState({pages: {
      login: false,
      register: true,
      myWallet: false
    }})
  };

  walletShow = () => {
    this.setState({pages: {
      login: false,
      register: false,
      myWallet: true
    }})
  };

  userName = (name) => {
    this.setState({username: name})
  };

  changeLoginStatus = () => {
    this.setState({isLogin: true});
  };

  logout = () => {
    localStorage.removeItem('codeoToken')
    this.setState({isLogin: false});
    this.loginShow();
  };

  login = (e) => {
    e.preventDefault();
    Swal.showLoading()
    Axios({
      url: `${this.state.url}/users/login`,
      method: 'POST',
      data: {
        email: this.state.email,
        password: this.state.password
      }
    })
    .then(({data}) => {
      this.setState({user: data.user});
      localStorage.setItem('codeoToken', data.token);
      this.userName(data.user.name)
      this.walletShow();
      Swal.close();
    })
    .catch(err => {
      console.log(err);
    })
  };

  onUserstateChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  componentDidMount() {
    if (localStorage.getItem('codeoToken')) {
      this.walletShow();
    }else {
      this.registerShow();
    }
  };

  render() {
    return (
      <div>
        {this.state.pages.login ? <Login myWalletShow={this.walletShow} login={this.login} onUserstateChange={this.onUserstateChange}/> : ""}
        {this.state.pages.register ? <Register loginShow={this.loginShow} /> : ""}
        {this.state.pages.myWallet ? <MyWallet user={this.state.user} username={this.state.user.name} logout={this.logout} /> : ""}
      </div>
    )
  };
};


export default App;
