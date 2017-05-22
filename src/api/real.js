import store from '../redux/store'
import bdevelopers from 'bd-client-js'

const url = 'https://developers.bantotal.com/api/v1'
let bd = new bdevelopers()

const api = {
  cuentas: {
    async get() {
      try {        
        let token = store.getState().auth.access_token || null
        const resultJson = await bd.getAccounts(token)        
        return resultJson
      } catch (err) {
        console.log(`error ${JSON.stringify(err)}`)
      }
    }
  },

  movimientos: {
    async get(uid) {
      try {       
        let token = store.getState().auth.access_token || null
        const resultJson = await bd.getMovements(uid, token)    
        return resultJson
      } catch (err) {
        console.log(`error ${JSON.stringify(err)}`)
      }
    }
  }
}

export default api
