import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from '../../components/Swiper';
import * as Animatable from 'react-native-animatable';



const Home = ({movimientos, cuentas, heart, favorite, index, loadingData}) => {
  return (
    <View style={styles.container}>

      <View style={styles.cuenta}>
        <Swiper index={index} loadingData={loadingData}>
          {cuentas.map((item) => {
              return (
                <View key={item.uid}>
                  <View style={styles.containerCuenta}>
                    <Text style={styles.textSaldo}>{item.currency}{item.balance}</Text>
                    <TouchableWithoutFeedback onPress={()=>favorite(i)}>
                      {heart?
                        <Icon name='heart' color='#900'  size={22} />:<Icon name='heart-o' color='#900' size={22} />
                      }
                    </TouchableWithoutFeedback>
                  </View>
                  <Text style={styles.textCuenta2}>Saldo actual</Text>
                   <View style={styles.marginTop}>
                    { item.productType == "CC" ?
                         <Text style={styles.textCuenta}>Cuenta corriente</Text>:<Text style={styles.textCuenta}>Caja de ahorro</Text>
                    }                 
                    <Text style={styles.textCuenta2}>{item.description}</Text>
                  </View>
                
                </View>
              )
            })
          }
        </Swiper>
      </View>

      <View style={styles.movimientos} >
        <Text style={styles.titleMovimientos}>MOVIMIENTOS</Text> 
         {movimientos.map((item2) => {
            return (
              <View key={item2.uid} style={styles.containerMovimientos}>
                <View>
                  <Text style={styles.textMovimientos}>{item2.reason}</Text>
                  <Text style={styles.textMovimientos2}>hace dos horas</Text>
                </View>
                {item2.type == "Credit" ? 
                   <Text style={[styles.textMovimientos, styles.credit]}> +{item2.ammount}</Text>: <Text style={[styles.textMovimientos, styles.debit]}> -{item2.ammount}</Text>
                }
              </View>

            )
          })}
      </View>

    </View>
  );
};

Home.propTypes = {
  cuentas: PropTypes.array,
  movimientos: PropTypes.array,
  favorite: PropTypes.func,
  loadingData: PropTypes.func,
};

export default Home;
