import React, { Component } from 'react'
import Login from './Login'
import { Actions } from 'react-native-router-flux'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import oAuth from '../../oAuth'
import constants from '../../config/constants'

import actions from '../../redux/actions'

class LoginContainer extends Component {
  constructor() {
    super()
    this.state = {}
    this._authenticate = this._authenticate.bind(this);
  }

  _authenticate() {
    oAuth.bdevelopers(constants.auth)
      .then(response => {
        this.props.actions.authenticate(response)
      })
      .catch(err => console.log(err))
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth) {
      Actions.home()
    }
  }

  render() {
    return (
      <Login authenticate={this._authenticate} />
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
