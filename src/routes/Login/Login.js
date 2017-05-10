import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  Button
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'

import styles from './styles'
import images from '../../config/images'

const Login = ({ authenticate }) => {
  return (
    <LinearGradient colors={['#020F1D', '#13212E']} style={styles.container}>
      <Animatable.View style={styles.logoView} animation='slideInLeft'>
        <Image source={images.logo} />
        <Text style={styles.title}>MANGOS</Text>
      </Animatable.View>
      <Animatable.View style={styles.textView} animation='zoomIn' delay={800}>
        <Text style={styles.text2}>Rápidamente</Text>
        <Text style={styles.text}>cuanto dinero tienes</Text>
      </Animatable.View>
      <Animatable.View style={styles.buttonContainer} animation='zoomIn' delay={1000}>
        <View style={styles.loginButton}>
          <Button style={styles.button} onPress={authenticate} title='Ingresar con Banco 1'
            color='#E7AA1A' accessibilityLabel='Ingresar con Banco 1' />
        </View>
        <View style={styles.loginButton}>
          <Button style={styles.button} onPress={authenticate} title='Ingresar con Banco 2'
            color='#F8DF4F' accessibilityLabel='Ingresar con Banco 2' />
        </View>
      </Animatable.View>
    </LinearGradient>
  )
}

Login.propTypes = {
  authenticate: PropTypes.func
}

export default Login
