import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  ListView
} from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'

import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from '../../components/Swiper'

moment.locale('es')

const Home = ({index, cuentas, movimientos, heart, loadMovements, setFavorite}) => {
  const viewMovimientos = movimientos.length
  // inicio DataSource para movimientos
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  movimientos = ds.cloneWithRows(movimientos)

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
                    <TouchableHighlight onPress={() => setFavorite(item.uid)}>
                      {
                        heart === item.uid
                        ? <Icon name='heart' color='#900' size={32} />
                        : <Icon name='heart-o' color='#900' size={32} />
                      }
                    </TouchableHighlight>
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
<<<<<<< HEAD
        {
          viewMovimientos === 0
          ? <View style={styles.containerCargandoMovimientos}>
            <ActivityIndicator style={styles.cargandoMovimientos} color='white' />
          </View>
          : <ListView dataSource={movimientos} renderRow={item => 
=======
        {         
          movimientos.length === 0
          ? <View style={styles.containerCargandoMovimientos}>
            <ActivityIndicator style={styles.cargandoMovimientos} color='white' />
          </View>
          : movimientos.map(item => {
            moment.locale('es')
            return (
>>>>>>> 75b83a43520e503c3493d9672989806018eab00a
              <View key={item.uid} style={styles.movimiento}>
                <View>
                  <Text style={styles.razon}>{item.reason}</Text>
                  <Text style={styles.tiempo}>{moment(item.valueDate).fromNow()}</Text>
                </View>
                {
                  item.type === 'Credit'
                  ? <Text style={styles.credito}> + {parseInt(item.ammount).toLocaleString()}</Text>
                  : <Text style={styles.debito}> - {parseInt(item.ammount).toLocaleString()}</Text>
                }
              </View>
          } />
        }
      </View>
    </View>
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
