import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from '../../components/Swiper'

const Home = ({index, cuentas, movimientos, heart, loadMovements, setFavorite}) => {
  return (
    cuentas.length === 0
    ? <View style={styles.containerCargando}>
        <ActivityIndicator color='white' />
    </View>
    : <View style={styles.container}>
      <View style={styles.containerCuenta}>
        <Swiper index={index} cuentas={cuentas} loadMovements={loadMovements}>
          {
            cuentas.map(item => {
              return (
                <View key={item.uid}>
                  <View style={styles.cuenta}>
                    <Text style={styles.saldo}>{item.currency} {parseInt(item.balance).toLocaleString()}</Text>
                    <TouchableWithoutFeedback onPress={() => setFavorite(index)}>
                      {
                        heart
                        ? <Icon name='heart' color='#900' size={32} />
                        : <Icon name='heart-o' color='#900' size={32} />
                      }
                    </TouchableWithoutFeedback>
                  </View>
                  <Text style={styles.label}>Saldo actual</Text>
                  <View style={styles.producto}>
                    {
                      item.productType === 'CC'
                      ? <Text style={styles.infoProducto}>Cuenta corriente</Text>
                      : <Text style={styles.infoProducto}>Caja de ahorro</Text>
                    }
                    <Text style={styles.label}>{item.description}</Text>
                  </View>
                </View>
              )
            })
          }
        </Swiper>
      </View>
      <View style={styles.containerMovimientos}>
        <Text style={styles.tituloMovimientos}>MOVIMIENTOS</Text>
        {
          movimientos.length === 0
          ? <View style={styles.containerCargandoMovimientos}>
            <ActivityIndicator style={styles.cargandoMovimientos} color='white' />
          </View>
          : movimientos.map(item => {
            return (
              <View key={item.uid} style={styles.movimiento}>
                <View>
                  <Text style={styles.razon}>{item.reason}</Text>
                  <Text style={styles.tiempo}>hace dos horas</Text>
                </View>
                {
                  item.type === 'Credit'
                  ? <Text style={styles.credito}> + {parseInt(item.ammount).toLocaleString()}</Text>
                  : <Text style={styles.debito}> - {parseInt(item.ammount).toLocaleString()}</Text>
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
  index: PropTypes.number,
  cuentas: PropTypes.array,
  movimientos: PropTypes.array,
  heart: PropTypes.bool,
  loadMovements: PropTypes.func,
  setFavorite: PropTypes.func
}

export default Home
