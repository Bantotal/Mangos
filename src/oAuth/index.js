import { Linking } from 'react-native'
import qs from 'shitty-qs'

const oAuth = {
  facebook: (callback) => {
    url = 'https://www.facebook.com/dialog/oauth?client_id=1373029619402623&redirect_uri=fb1373029619402623://authorize&response_type=token'
    
    Linking.openURL(url)
      .catch(err => console.error('An error occurred', err))

    Linking.getInitialURL(url)
      .then((url) => { 
        const parse = url.substring(url.indexOf("/#") + 2)
        var credentials = qs(parse)
        console.warn('credentials: ' + JSON.stringify(credentials))
      })
      .catch(err => console.error('An error occurred', err))
  },
}

export default oAuth
