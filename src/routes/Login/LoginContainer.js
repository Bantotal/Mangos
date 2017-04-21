import React, { Component } from 'react'
import Login from './Login'

import oAuth from '../../oAuth'

const authenticate = () => {
  console.warn('ejecuta authenticate')
  oAuth.facebook()
}

class LoginContainer extends Component {
  render() {
    return (
      <Login authenticate={authenticate} />
    )
  }
}

export default LoginContainer;
