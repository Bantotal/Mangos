import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'space-between',  
    // alignItems: 'center',
    // justifyContent: 'center',
     
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
    fontSize: 14,
    fontFamily: 'Helvetica-Light',
    //marginLeft: 30
  },
  textSaldo: {
    color:'#E2D755',
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'Helvetica-Bold',
    //marginHorizontal: 30
  },
  textCuenta:{   
    color:'#FFFFFF',
    fontSize: 18,
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 30,
    //marginLeft: 30
  },
  textCuenta2: {
    color:'#CBC1B4',
    fontSize: 14,
    fontFamily: 'Helvetica-Light',
    marginLeft: 30
  },
  titleMovimientos: {
    marginTop: 20,
    marginBottom: 20,
    color:'#CBC1B4',
    fontSize: 14,
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 30,
    //marginLeft: 30
  },
  textMovimientos:{
    marginTop: 20,
    color:'#FFFFFF',
    fontSize: 14,
    fontFamily: 'Helvetica-Light',
    //marginHorizontal: 30
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
