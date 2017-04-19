import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
  Scene,
  Router,
  ActionConst
} from 'react-native-router-flux';

import routes from './config/routes';

class Mangos extends Component {
  render() {
    return (
      <Router>        
        <Scene key="login" component={routes.getLogin} hideNavBar />
        <Scene key="home" component={routes.getHome} type={ActionConst.REPLACE} />
      </Router>
    )
  }
}

AppRegistry.registerComponent('Mangos', () => Mangos);
