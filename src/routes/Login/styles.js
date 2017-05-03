import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#020F1D'
  },
  logoView: {
    flex: 0.4,
    justifyContent: 'center', 
    marginHorizontal: 60,
  },
  title: {
    color:'#FFFFFF',
    fontSize: 35,
    fontFamily: 'Dhurjati',
  },
  textView:{
    flex: 0.6,
  },
  text: {
    color:'#FFFFFF',
    fontSize: 38,
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 60
  }, 
   text2: {
    color:'#FFFFFF',
    fontSize: 38,
    fontWeight: '500',
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 60
  }, 
  loginButton: {
    alignItems:'center',
    justifyContent: 'center', 
    backgroundColor: '#E2D755',
    height:90
  },
  textLogin:{
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Helvetica-Bold',
    color: '#020F1D'
  }
});
