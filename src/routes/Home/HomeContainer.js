import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Home from './Home'
import api from '../../api'

import actions from '../../redux/actions'

class HomeContainer extends Component {
  constructor () {
    super()
    this._loadAccounts = this._loadAccounts.bind(this)
    this._loadMovements = this._loadMovements.bind(this)
    this._setFavorite = this._setFavorite.bind(this)
    console.warn(`camila ${deviceLocale}`)
    this.state = {
      movimientos: null,
      cuentas: null,
      index: 0,
      heart: null
    }
  }

  _loadAccounts () {
    api().cuentas.get()
      .then(async result => {
        this._loadMovements(result[0].uid)
        this.props.actions.accounts(result)
        // carga valor de cuenta favorita
        const value = await AsyncStorage.getItem('@MangosStore:cuentaFavorita')
        if (value !== null) {
          this.setState({ heart: value })
        } else {
          this.setState({ heart: result[0].uid })
        }
      })
  }

  _loadMovements (uid, index) {
    this.props.actions.movements([])
    this.setState({ index })
    api().movimientos.get(uid)
      .then(result => {
        this.props.actions.movements(result)
      })
  }

  async _setFavorite (uid) {
    try {
      await AsyncStorage.setItem('@MangosStore:cuentaFavorita', uid)
      this.setState({ heart: uid })
    } catch (err) {
      console.log(`_setFavorite error ${JSON.stringify(err)}`)
    }
  }

  componentWillMount () {
    this._loadAccounts()
  }

  render () {
    return (
      <Home index={this.state.index} cuentas={this.props.accounts} heart={this.state.heart} movimientos={this.props.movements} loadMovements={this._loadMovements} setFavorite={this._setFavorite} />
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
