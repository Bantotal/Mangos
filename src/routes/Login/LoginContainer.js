import React, { Component } from 'react'
import Login from './Login'

import oAuth from '../../oAuth'
import constants from '../../config/constants'

class LoginContainer extends Component {
  constructor() {
    super()
    this._authenticate.bind(this)
  }

  _authenticate() {
    oAuth.bdevelopers(constants.auth)
      .then(response => console.warn(`response ${JSON.stringify(response)}`))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Login authenticate={this._authenticate} />
    )
  }
}

export default LoginContainer
