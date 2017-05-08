import store from '../redux/store'

const url = 'https://developers.bantotal.com/api/v1'

const api = {
  cuentas: {
    async get () {
      try {
        let token = store.getState().auth.access_token || null
        let result = await fetch(`${url}/accounts`, { // eslint-disable-line
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        let resultJson = await result.json()
        console.log(`resultJson accounts ${JSON.stringify(resultJson)}`)
        return resultJson
      } catch (err) {
        console.log(`error ${JSON.stringify(err)}`)
      }
    }
  },

  movimientos: {
    async get (uid) {
      try {
        let token = store.getState().auth.access_token || null
        let result = await fetch(`${url}/accounts/${uid}/movements`, { // eslint-disable-line
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        let resultJson = await result.json()
        console.log(`resultJson movements ${JSON.stringify(resultJson)}`)
        return resultJson
      } catch (err) {
        console.log(`error ${JSON.stringify(err)}`)
      }
    }
  }
}

export default api
