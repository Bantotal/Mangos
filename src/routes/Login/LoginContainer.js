import React, { Component } from 'react';
import Login from './Login';
import SplashScreen from 'react-native-splash-screen'

class LoginContainer extends Component {
 
  componentDidMount() {
     SplashScreen.hide();
  }
  render() {
    return (
      <Login/>
    )
  }
}

export default LoginContainer;
