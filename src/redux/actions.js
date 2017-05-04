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

export default {
  authenticate,
}