import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',    
    backgroundColor: '#020F1D'
  },
  logoView: {
    marginTop: 80,
    marginLeft: 60,
  },
  logo: {
  },
  title: {
    color:'#FFFFFF',
    fontSize: 35,
    fontFamily: 'Dhurjati-Regular',
  },
  textView:{
     marginTop: 10,
  },
  text: {
    color:'#FFFFFF',
    fontSize: 38,
    fontFamily: 'Helvetica-Light',
    marginLeft: 60
  }, 
   text2: {
    color:'#FFFFFF',
    fontSize: 38,
    fontWeight: '500',
    fontFamily: 'Helvetica-Light',
    marginLeft: 60
  }, 
  loginButton: {
    alignItems:'center',
    justifyContent: 'center', 
    backgroundColor: '#E2D755',
    height:80
  },
  textLogin:{
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Helvetica-Bold',
    color: '#020F1D'
  }
});
