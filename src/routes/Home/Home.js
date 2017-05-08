import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from '../../components/Swiper'

const Home = ({index, cuentas, movimientos, heart, loadMovements, setFavorite}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cuenta}>
        <Swiper index={index} loadMovements={loadMovements}>
          {
            cuentas.map(item => {
              return (
                <View key={item.uid}>
                  <View style={styles.containerCuenta}>
                    <Text style={styles.textSaldo}>{item.currency}{item.balance}</Text>
                    <TouchableWithoutFeedback onPress={() => setFavorite(index)}>
                      {
                        heart
                        ? <Icon name='heart' color='#900' size={22} />
                        : <Icon name='heart-o' color='#900' size={22} />
                      }
                    </TouchableWithoutFeedback>
                  </View>
                  <Text style={styles.textCuenta2}>Saldo actual</Text>
                  <View style={styles.marginTop}>
                    {
                      item.productType === 'CC'
                      ? <Text style={styles.textCuenta}>Cuenta corriente</Text>
                      : <Text style={styles.textCuenta}>Caja de ahorro</Text>
                    }
                    <Text style={styles.textCuenta2}>{item.description}</Text>
                  </View>
                </View>
              )
            })
          }
        </Swiper>
      </View>
      <View style={styles.movimientos}>
        <Text style={styles.titleMovimientos}>MOVIMIENTOS</Text>
        {
          movimientos.map(item => {
            return (
              <View key={item.uid} style={styles.containerMovimientos}>
                <View>
                  <Text style={styles.textMovimientos}>{item.reason}</Text>
                  <Text style={styles.textMovimientos2}>hace dos horas</Text>
                </View>
                {
                  item.type === 'Credit'
                  ? <Text style={[styles.textMovimientos, styles.credit]}> +{item.ammount}</Text>
                  : <Text style={[styles.textMovimientos, styles.debit]}> -{item.ammount}</Text>
                }
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

Home.propTypes = {
  index: PropTypes.string,
  cuentas: PropTypes.array,
  movimientos: PropTypes.array,
  heart: PropTypes.bool,
  loadMovements: PropTypes.func,
  setFavorite: PropTypes.func
}

export default Home
