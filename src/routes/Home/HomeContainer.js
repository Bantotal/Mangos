import React, { Component } from 'react'
import {
  Text
} from 'react-native';
import Home from './Home';
import Swiper from '../../components/Swiper';
import api from '../../api';
import moment from 'moment'


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
