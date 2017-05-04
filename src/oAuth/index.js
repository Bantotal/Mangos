import { Linking } from 'react-native'
import base64 from 'base-64'

import constants from '../config/constants'

const oAuth = {
  bdevelopers: (opts, callback) => {
    return new Promise((resolve, reject) => {
      url = `${constants.urls.authRedirect}?client_id=${opts.client_id}&response_type=code&redirect_uri=mangos://authorize/`
      
      Linking.openURL(url)
        .catch(err => console.error('An error occurred', err))

      Linking.addEventListener('url', (event) => {
        const url = event.url
        const code = url.substring(url.indexOf("=") + 1)

        const string = opts.client_id + ':' + opts.client_secret
        const auth = 'Basic ' + base64.encode(string)

        fetch(constants.urls.authToken, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
          }, 
          body: JSON.stringify({
            client: opts.client_id,
            code,
            redirect_uri: 'mangos://authorize/',
            grant_type: 'authorization_code'
          })
        })
          .then(response => {
            if(response.status == 200)
              return response.json()
            else 
              resolve(response)
          })
          .then(response => {
            resolve(response)
          })
          .catch(err => reject(err))

        Linking.removeEventListener('url', this._handleOpenURL)    
      })
    })
  },
}

export default oAuth
