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
    this.state = {
      movimientos: null,
      cuentas: null,
      index: 0,
      heart: null
    }
  }

  async _loadAccounts () {
    try {
      const result = await api().cuentas.get()

      // carga movimientos
      this._loadMovements(result[0].uid)

      // carga valor de cuenta favorita
      const value = await AsyncStorage.getItem('@MangosStore:cuentaFavorita')
      if (value !== null) {
        // reordena cuentas para poner la favorita por delante
        const accounts = result
        accounts.sort((x, y) => {
          return x.uid === value ? -1 : y.uid === value ? 1 : 0
        })
        // setea valores
        this.props.actions.accounts(accounts)
        this.setState({ heart: value })
      } else {
        this.props.actions.accounts(result)
        this.setState({ heart: result[0].uid })
      }
    } catch (err) {
      console.log(`_loadAccounts error ${JSON.stringify(err)}`)
    }
  }

  async _loadMovements (uid, index) {
    try {
      this.props.actions.movements([])
      this.setState({ index })
      const result = await api().movimientos.get(uid)
      this.props.actions.movements(result)
    } catch (err) {
      console.log(`_loadMovements error ${JSON.stringify(err)}`)
    }
  }

  _setFavorite (uid) {
    try {
      AsyncStorage.setItem('@MangosStore:cuentaFavorita', uid)
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
