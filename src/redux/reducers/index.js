import { combineReducers } from 'redux'

import auth from './auth'
import accounts from './accounts'
import movements from './movements'

export default combineReducers({
  auth,
  accounts,
  movements
})
