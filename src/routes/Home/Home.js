import React from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';



const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        MANGO HOME
      </Text>
    </View>
  );
};

Home.propTypes = {
};

export default Home;
