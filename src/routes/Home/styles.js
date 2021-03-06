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
    marginTop: 200
  },
  containerCargandoMovimientos: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cargandoMovimientos: {
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
    fontSize: 32,
    fontWeight: '500',
    fontFamily: 'Helvetica-Bold'
  },
  label: {
    color: '#CBC1B4',
    fontSize: 14,
    fontFamily: 'Helvetica-Light',
    marginLeft: 30,
    marginTop: 5
  },
  tiempo: {
    color: '#CBC1B4',
    fontSize: 14,
    fontFamily: 'Helvetica-Light',
    marginTop: 5
  },
  infoProducto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 30,
    marginTop: 5,
    fontWeight: '400'
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
    fontSize: 16,
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 30
  },
  movimiento: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30
  },
  razon: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Helvetica-Light',
    fontWeight: '400'
  },
  credito: {
    color: '#27E570',
    fontSize: 18,
    fontFamily: 'Helvetica-Light',
    fontWeight: '500'
  },
  debito: {
    color: '#FF2851',
    fontSize: 18,
    fontFamily: 'Helvetica-Light',
    fontWeight: '500'
  }
})
