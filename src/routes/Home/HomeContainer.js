import React, { Component, PropTypes } from 'react';
import {
  Text
} from 'react-native';
import Home from './Home';
import Swiper from '../../components/Swiper';
import api from '../../api'
 
class HomeContainer extends Component {
  constructor() {   
    super();
    this.loadingData = this.loadingData.bind(this);
    this.favorite = this.favorite.bind(this); 
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

  favorite(key) {  
    data.cuentas[key].heart= !data.cuentas[key].heart
    this.setState({ heart : !data.cuentas[key].heart }); //?
    //this.setState({ cuentas : data });
  }

  loadingData(key) {
     api().movimientos.get(1)
      .then(response => {
        this.setState({ movimientos: response});
      })
     api().cuentas.get()
      .then((response) => {
        this.setState({ cuentas: response })
      })  
     this.setState({index:key });
  }

  render() {
    return (
      this.state.movimientos && this.state.cuentas ?
      <Home favorite={this.favorite} heart={this.state.heart} cuentas={this.state.cuentas} index={this.state.index} movimientos={this.state.movimientos} loadingData={this.loadingData}/>
      :
      <Text>Cargando...</Text>
    )
  }
}

export default HomeContainer;