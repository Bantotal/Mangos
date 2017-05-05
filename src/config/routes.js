import React from 'react'
import Login from '../routes/Login'
import Home from '../routes/Home'

export const routes = {
  getLogin () {
    return <Login />
  },
  getHome () {
    return <Home />
  }
}

export default routes
