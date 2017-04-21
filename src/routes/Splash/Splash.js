import React from 'react';
import { Actions } from 'react-native-router-flux';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import {
  View,
  Text,
  Image
} from 'react-native';

import styles from './styles';
import images from '../../config/images';

const Splash = () => {
  return (

      <View style={styles.container}>      
          <Image source={images.logoSplash} style={styles.logo} />
          <Text style={styles.title}>MANGOS</Text>
          <Text style={styles.text}>¿Cuanto dinero tengo?</Text>       
      </View>
  
  );
};

export default Splash;
