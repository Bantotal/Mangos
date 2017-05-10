import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Login from './Login'
import { Actions } from 'react-native-router-flux'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import oAuth from '../../oAuth'
import constants from '../../config/constants'

import actions from '../../redux/actions'

class LoginContainer extends Component {
  constructor () {
    super()
    this.state = {}
    this._authenticate = this._authenticate.bind(this)
  }

  async _authenticate () {
    try {
      const result = await oAuth.bdevelopers(constants.auth)
      this.props.actions.authenticate(result)
    } catch (err) {
      console.log(`_authenticate error ${JSON.stringify(err)}`)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.auth) {
      Actions.home()
    }
  }

  render () {
    return (
      <Login authenticate={this._authenticate} />
    )
  }
}

LoginContainer.propTypes = {
  actions: PropTypes.object,
  auth: PropTypes.object // eslint-disable-line
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
