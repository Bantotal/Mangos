import React from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';



const Home = () => {
  return (
    <View style={styles.container}>     
      <View style={styles.cuenta}>
         <View style={styles.containerCuenta}>
            <Text style={styles.textSaldo}>$ 2165465</Text>
            <Text style={styles.textMovimientos}>corazon</Text>
        </View>
        <Text style={styles.textCuenta2}>Saldo actual</Text> 
        <Text style={styles.textCuenta}>Cuenta</Text> 
      </View>
      <View style={styles.movimientos}>
        <Text style={styles.titleMovimientos}>MOVIMIENTOS</Text>
        <View style={styles.containerMovimientos}>
          <Text style={styles.textMovimientos}>retiro</Text>
          <Text style={styles.textMovimientos}>+500</Text>
        </View>
        <View style={styles.containerMovimientos}>
          <Text style={styles.textMovimientos}>retiro</Text>
          <Text style={styles.textMovimientos}>+500</Text>
        </View>
        <View style={styles.containerMovimientos}>
          <Text style={styles.textMovimientos}>retiro</Text>
          <Text style={styles.textMovimientos}>+500</Text>
        </View>
      </View>
    </View>
  );
};

Home.propTypes = {
};

export default Home;
