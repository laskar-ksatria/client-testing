import React, { useEffect } from 'react';


// Router 

import { Route, Switch, useHistory, Redirect } from 'react-router-dom';


//Pages
import Login from './pages/Login';
import Register from './pages/Register';
import MyWallet from './pages/MyWallet';

//Auth
import auth from './auth';


function App() {

  let history = useHistory();
  
  useEffect(() => {
    if(localStorage.getItem('codeoToken')) {
      auth.login(() => {
        history.push("/mywallet");
      })

    }else {
      auth.logout(() => {
        history.push("/");
      })

    }
  },[])

  return (

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/mywallet" component={MyWallet} />
        </Switch>

  )

};


function ProtectedRoute({ component: Component, ...rest }) {
  return (
      <Route 
          {...rest }
          render={props => {
              if(auth.isAuthenticated()) {
                  return <Component {...props} />
              }else {
                  return <Redirect 
                              to={
                                  {
                                      pathname: "/",
                                      state: {
                                          from: props.location
                                      }
                                  }
                              }
                          />
              }
          }}
       />
  )
};


export default App;