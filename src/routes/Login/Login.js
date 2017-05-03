import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import styles from './styles';
import images from '../../config/images';

import oAuth from '../../oAuth'

const handleLoginButtonPress = () => {
  oAuth.facebook()
}

const Login = ({ authenticate }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logoView}>
          <Image source={images.logo} style={styles.logo} />
          <Text style={styles.title}>MANGOS</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text2}>Rápidamente</Text> 
          <Text style={styles.text}>cuanto dinero tienes</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity  style={styles.loginButton} onPress={ handleLoginButtonPress } >
          <Text style={styles.textLogin}>INGRESAR</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
};

Login.propTypes = {
};

export default Login;
