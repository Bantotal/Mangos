import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  ListView,
  StatusBar
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import PropTypes from 'prop-types'
import numeral from 'numeral'
import moment from 'moment'
import 'moment/locale/es'

import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from '../../components/Swiper'

const Home = ({index, cuentas, movimientos, heart, loadMovements, setFavorite}) => {
  const viewMovimientos = movimientos.length
  // inicio DataSource para movimientos
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  movimientos = ds.cloneWithRows(movimientos)

  return (
    cuentas.length === 0
    ? <View style={styles.containerCargando}>
      <StatusBar barStyle='light-content' />
      <ActivityIndicator color='white' />
    </View>
    : <Animatable.View style={styles.container} animation='fadeIn'>
      <StatusBar barStyle='light-content' />
      <View style={styles.containerCuenta}>
        <Swiper index={index} cuentas={cuentas} loadMovements={loadMovements}>
          {
            cuentas.map(item => {
              return (
                <View key={item.uid}>
                  <View style={styles.cuenta}>
                    <Text style={styles.saldo}>{item.currency} {numeral(item.balance).format()}</Text>
                    <TouchableHighlight onPress={() => setFavorite(item.uid)}>
                      {
                        heart === item.uid
                        ? <Animatable.View animation='rubberBand' delay={200}><Icon name='heart' color='#900' size={32} /></Animatable.View>
                        : <Icon name='heart-o' color='#900' size={32} />
                      }
                    </TouchableHighlight>
                  </View>
                  <Text style={styles.label}>Saldo actual</Text>
                  <View style={styles.producto}>
                    <Text style={styles.infoProducto}>{item.description}</Text>
                    {
                      item.productType === 'CC'
                      ? <Text style={styles.label}>Cuenta corriente</Text>
                      : <Text style={styles.label}>Caja de ahorro</Text>
                    }
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
          viewMovimientos === 0
          ? <View style={styles.containerCargandoMovimientos}>
            <ActivityIndicator style={styles.cargandoMovimientos} color='white' />
          </View>
          : <ListView dataSource={movimientos} renderRow={item =>
            <Animatable.View key={item.uid} style={styles.movimiento} animation='fadeInDown'>
              <View>
                <Text style={styles.razon}>{item.reason}</Text>
                <Text style={styles.tiempo}>{moment(item.valueDate).fromNow()}</Text>
              </View>
              {
                item.type === 'Credit'
                ? <Text style={styles.credito}> + {numeral(item.ammount).format('0,0.00')}</Text>
                : <Text style={styles.debito}> - {numeral(item.ammount).format('0,0.00')}</Text>
              }
            </Animatable.View>
          } />
        }
      </View>
    </Animatable.View>
  )
}

Home.propTypes = {
  index: PropTypes.number,
  cuentas: PropTypes.array,
  movimientos: PropTypes.array,
  heart: PropTypes.string,
  loadMovements: PropTypes.func,
  setFavorite: PropTypes.func
}

export default Home
