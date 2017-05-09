import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Platform } from 'react-native'
import {
  Scene,
  Router,
  ActionConst,
  Actions
} from 'react-native-router-flux'
import { Provider } from 'react-redux'

import routes from './config/routes'
import store from './redux/store'

const salir = () => {
  Actions.login({type: ActionConst.RESET})
}

class Mangos extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} rightButtonTextStyle={styles.rightButtonTitle} >
          <Scene key='login' component={routes.getLogin} hideNavBar />
          <Scene key='home' component={routes.getHome} type={ActionConst.REPLACE} title='MANGOS' rightTitle='Salir' onRight={() => salir()} />
        </Router>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#020F1D'
  },
  navBarTitle: {
    color: '#FFFFFF',
    fontFamily: (Platform.OS === 'ios') ? 'Dhurjati' : 'Dhurjati-Regular'
  },
  rightButtonTitle: {
    color: '#FFFFFF'
  }
})

AppRegistry.registerComponent('Mangos', () => Mangos)
