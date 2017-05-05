import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1     
  },
  containerMovimientos: {
     flexDirection: 'row',
     justifyContent: 'space-between',
      marginHorizontal: 30,   
  },
  containerCuenta: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
     marginHorizontal: 30,
  },
  text: {
    color:'#FFFFFF',
    fontSize: 12,
    fontFamily: 'Helvetica-Light',
  },
  textSaldo: {
    color:'#E2D755',
    fontSize: 28,
    fontWeight: '500',
    fontFamily: 'Helvetica-Bold',
  },
  textCuenta:{   
    color:'#FFFFFF',
    fontSize: 16,
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 30,
  },
  textCuenta2: {
    color:'#CBC1B4',
    fontSize: 12,
    fontFamily: 'Helvetica-Light',
    marginLeft: 30
  },
  titleMovimientos: {
    marginTop: 20,
    marginBottom: 20,
    color:'#CBC1B4',
    fontSize: 12,
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 30,
  },
  textMovimientos:{
    marginTop: 20,
    color:'#FFFFFF',
    fontSize: 16,
    fontFamily: 'Helvetica-Light',
  },
   textMovimientos2:{  
    color:'#CBC1B4',
    fontSize: 10,
    fontFamily: 'Helvetica-Light',
  },
  marginTop:{
    marginTop:10
  },
  credit: {
    color:'#27E570',
  },
  debit:{
    color:'#FF2851',
  },  
  cuenta: {
    flex: 0.4,   
    backgroundColor: '#061728'
  },
  movimientos: {
    flex: 0.6,   
    backgroundColor: '#13212E'
  },
});
