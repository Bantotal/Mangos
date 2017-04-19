import React from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        MANGO LOGIN
      </Text>
    </View>
  );
};

Login.propTypes = {
};

export default Login;
