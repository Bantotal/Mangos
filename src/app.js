import React, { Component } from 'react';
import { AppRegistry ,StyleSheet} from 'react-native';
import {
  Scene,
  Router,
  ActionConst
} from 'react-native-router-flux';

import routes from './config/routes';

class Mangos extends Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} >         
        <Scene key="login" component={routes.getLogin} hideNavBar />
        <Scene key="home" component={routes.getHome} type={ActionConst.REPLACE}  title="MANGOS"/>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
      backgroundColor:'#020F1D',
  },
  navBarTitle:{
      color:'#FFFFFF',
      fontSize: 22,
      fontFamily: 'Dhurjati-Regular',
  },
})

AppRegistry.registerComponent('Mangos', () => Mangos);

