import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  containerCargando: {
    flex: 1,
    backgroundColor: '#061728',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cargando: {
    color: '#CBC1B4',
    marginTop: 200
  },
  containerCargandoMovimientos: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cargandoMovimientos: {
    color: '#CBC1B4',
    marginTop: 100
  },
  containerCuenta: {
    flex: 0.4,
    backgroundColor: '#061728',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cuenta: {
    marginTop: (Platform.OS === 'ios') ? 100 : 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30
  },
  saldo: {
    color: '#E2D755',
    fontSize: 28,
    fontWeight: '500',
    fontFamily: 'Helvetica-Bold'
  },
  label: {
    color: '#CBC1B4',
    fontSize: 12,
    fontFamily: 'Helvetica-Light',
    marginLeft: 30,
    marginTop: 5
  },
  infoProducto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 30,
    marginTop: 5
  },
  producto: {
    marginTop: 20
  },
  containerMovimientos: {
    flex: 0.6,
    backgroundColor: '#13212E'
  },
  tituloMovimientos: {
    marginTop: 20,
    marginBottom: 20,
    color: '#CBC1B4',
    fontSize: 14,
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 30
  },
  movimiento: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30
  },
  razon: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Helvetica-Light',
    fontWeight: '400'
  },
  tiempo: {
    color: '#CBC1B4',
    fontSize: 12,
    fontFamily: 'Helvetica-Light',
    marginTop: 5
  },
  credito: {
    color: '#27E570',
    fontSize: 16,
    fontFamily: 'Helvetica-Light',
    fontWeight: '500'
  },
  debito: {
    color: '#FF2851',
    fontSize: 16,
    fontFamily: 'Helvetica-Light',
    fontWeight: '500'
  }
})
