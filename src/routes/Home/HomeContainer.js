import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Home from './Home'
import api from '../../api'

import actions from '../../redux/actions'

class HomeContainer extends Component {
  constructor () {
    super()
    this.loadAccounts = this.loadAccounts.bind(this)
    this.loadMovements = this.loadMovements.bind(this)
    this.setFavorite = this.setFavorite.bind(this)
    this.state = {
      movimientos: null,
      cuentas: null,
      index:0,
      heart:false
    };   
  }

  componentWillMount() {
    api().movimientos.get(1)
      .then((response) => {
        this.setState({ movimientos: response })
      })
    api().cuentas.get()
      .then((response) => {
        this.setState({ cuentas: response })
      })
  }

  loadAccounts () {
    api().cuentas.get()
      .then(result => {
        this.loadMovements(result[0].uid)
        this.props.actions.accounts(result)
      })
  }

  loadMovements (uid, index) {
    this.props.actions.movements([])
    this.setState({ index })
    api().movimientos.get(uid)
      .then(result => {
        this.props.actions.movements(result)
      })
  }

  componentWillMount () {
    this.loadAccounts()
  }

  render () {
    return (
      <Home index={this.state.index} cuentas={this.props.accounts} heart={this.state.heart} movimientos={this.props.movements} loadMovements={this.loadMovements} setFavorite={this.setFavorite} />
    )
  }
}

HomeContainer.propTypes = {
  actions: PropTypes.object,
  accounts: PropTypes.array,
  movements: PropTypes.array
}

const mapStateToProps = (state, props) => {
  return {
    accounts: state.accounts,
    movements: state.movements
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
