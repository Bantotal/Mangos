import React from 'react';
import Login from '../routes/Login';
import Home from '../routes/Home';
import Splash from '../routes/Splash';

export const routes = {
  getLogin() {
    return <Login />;
  },
  getHome() {
    return <Home />;
  },
  getSplash() {
    return <Splash />;
  },
};

export default routes;