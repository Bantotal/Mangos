import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button
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
        <View style={{ marginBottom: 10}}>
          <Button onPress={authenticate} title='Ingresar con Banco 1'
            color='#E7AA1A' accessibilityLabel='Ingresar con Banco 1' />
        </View>
        <View style={styles.loginButton}>
          <Button style={styles.loginButton} onPress={authenticate} title='Ingresar con Banco 2'
            color='#F8DF4F' accessibilityLabel='Ingresar con Banco 2' />
        </View>
      </View>
    </LinearGradient>
  )
}

Login.propTypes = {
  authenticate: PropTypes.func
}

export default Login
