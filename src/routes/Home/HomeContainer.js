import React, { Component } from 'react'
import {
  Text
} from 'react-native'

import Home from './Home'
import api from '../../api'

class HomeContainer extends Component {
  constructor () {
    super()
    this.loadAccounts = this.loadAccounts.bind(this)
    this.loadMovements = this.loadMovements.bind(this)
    this.setFavorite = this.setFavorite.bind(this)
    this.state = {
      movimientos: null,
      cuentas: null,
      index: 0,
      heart: false
    }
  }

  setFavorite (key) {
    // data.cuentas[key].heart = !data.cuentas[key].heart
    // this.setState({ heart : !data.cuentas[key].heart })
  }

  loadAccounts () {
    api().cuentas.get()
      .then(result => {
        this.loadMovements(result[0].uid)
        this.setState({ cuentas: result })
      })
  }

  loadMovements (uid, index) {
    api().movimientos.get(uid)
      .then((result) => {
        this.setState({ movimientos: result, index })
      })
  }

  componentWillMount () {
    this.loadAccounts()
  }

  render () {
    return (
      this.state.movimientos && this.state.cuentas
      ? <Home index={this.state.index} cuentas={this.state.cuentas} heart={this.state.heart} movimientos={this.state.movimientos} loadMovements={this.loadMovements} setFavorite={this.setFavorite} />
      : <Text>Cargando...</Text>
    )
  }
}

export default HomeContainer
