import initialState from '../store/initialState'

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case 'SET_AUTH': {
      return action.payload
    }
    default: {
      return state
    }
  }
}
