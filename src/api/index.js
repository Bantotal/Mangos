import dummy from './dummy'
import real from './real'

const env = 'test'

function api () {
  if (env === 'test') {
    return dummy
  }
  return real
}

export default api