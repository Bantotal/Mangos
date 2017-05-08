import initialState from '../store/initialState'

export default (state = initialState.movements, action) => {
  switch (action.type) {
    case 'SET_MOVEMENTS': {
      return action.payload
    }
    default: {
      return state
    }
  }
}
