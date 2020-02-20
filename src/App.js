import React from 'react';
import Login from './components/Login';
import MyWallet from './components/MyWallet';
import Register from './components/Register';

class App extends React.Component {

  state = {
    pages: {
      login: false,
      register: true,
      myWallet: false
    },
    user: null,
    isLogin: false
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

  changeUserState = (data) => {
    this.setState({user: data});
  };

  changeLoginStatus = () => {
    this.setState({isLogin: true})
  };

  logout = () => {
    localStorage.removeItem('codeoToken')
    this.setState({isLogin: false});
    this.loginShow();
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
        
        {this.state.pages.login ? <Login myWalletShow={this.walletShow} changeUser={this.changeUserState} changeLoginStatus={this.changeLoginStatus} /> : ""}
        {this.state.pages.register ? <Register loginShow={this.loginShow} /> : ""}
        {this.state.pages.myWallet ? <MyWallet user={this.user} logout={this.logout} /> : ""}

      </div>
    )
  }


};


export default App;
