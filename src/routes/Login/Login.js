import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
  Button
} from 'react-native';

import styles from './styles';

 const handleLoginButtonPress = () => {
    Actions.home();
}

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        MANGO LOGIN
      </Text>
      <Button style={styles.loginButton} onPress={ handleLoginButtonPress } title='Ingresar' color='red' accessibilityLabel='Ingresar' />
    </View>
  );
};

Login.propTypes = {
};

export default Login;
