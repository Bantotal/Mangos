import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import initialState from './initialState'
import reducers from '../reducers'

const middleware = applyMiddleware(
  thunk
)

const store = createStore(
  reducers,
  initialState,
  middleware
)

export default store
