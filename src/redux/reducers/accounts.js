import initialState from '../store/initialState'

export default (state = initialState.accounts, action) => {
  switch (action.type) {
    case 'SET_ACCOUNTS': {
      return action.payload
    }
    default: {
      return state
    }
  }
}
