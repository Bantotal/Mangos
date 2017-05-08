const setAuthentication = (auth) => {
  return {
    type: 'SET_AUTH',
    payload: auth
  }
}

const authenticate = (auth) => {
  return (dispatch) => {
    dispatch(setAuthentication(auth))
  }
}

const setAccounts = (accounts) => {
  return {
    type: 'SET_ACCOUNTS',
    payload: accounts
  }
}

const accounts = (accounts) => {
  return (dispatch) => {
    dispatch(setAccounts(accounts))
  }
}

const setMovements = (movements) => {
  return {
    type: 'SET_MOVEMENTS',
    payload: movements
  }
}

const movements = (movements) => {
  return (dispatch) => {
    dispatch(setMovements(movements))
  }
}

export default {
  authenticate,
  accounts,
  movements
}
