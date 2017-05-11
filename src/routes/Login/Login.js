import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
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
        <Text style={styles.textSelect}>Selecciona con que Banco desea ingresar</Text>
        <TouchableHighlight style={styles.loginButton} onPress={authenticate}>
          <Image source={images.bancoBBVA} />
        </TouchableHighlight>
        <View style={styles.linea}/>
        <TouchableHighlight onPress={authenticate}>
          <Image source={images.bancoHSBC} />
        </TouchableHighlight>
      </Animatable.View>
      <Animatable.View style={styles.footerContainer} animation='fadeIn' delay={1500}>
        <Text style={styles.footer}>Hecho con <Icon name='heart' color='#900' size={12} /> por Bantotal</Text>
      </Animatable.View>
    </LinearGradient>
  )
}

Login.propTypes = {
  authenticate: PropTypes.func
}

export default Login
