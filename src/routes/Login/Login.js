import React from 'react'
import { Actions } from 'react-native-router-flux'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'
import images from '../../config/images'

const Login = ({ authenticate }) => {
  return (
    <LinearGradient colors={['#020F1D', '#13212E']} style={styles.container} >
      <View style={styles.logoView}>
        <Image source={images.logo} />
        <Text style={styles.title}>MANGOS</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text2}>Rápidamente</Text> 
        <Text style={styles.text}>cuanto dinero tienes</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.loginButton} onPress={authenticate} >
          <Text style={styles.textLogin}>INGRESAR</Text>
        </TouchableOpacity>
      </View> 
    </LinearGradient>
  )
}

export default Login
