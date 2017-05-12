import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  logoView: {
    flex: 0.5,
    justifyContent: 'center',
    marginHorizontal: 40
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: (Platform.OS === 'ios') ? 'Dhurjati' : 'Dhurjati-Regular'
  },
  textView: {
    flex: 0.5
  },
  text: {
    color: '#FFFFFF',
    fontSize: 36,
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 40
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '500',
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 40
  },
  seleccion: {
    color: '#F8DF4F',
    fontSize: 16,
    fontFamily: 'Helvetica-Light',
    marginHorizontal: 50,
    textAlign: 'center',
    marginBottom: 20
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: (Platform.OS === 'ios') ? 30 : 0
  },
  loginButton: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 50,
    marginBottom: (Platform.OS === 'ios') ? 20 : 10
  },
  footerContainer: {
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center'
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#CBC1B4'
  },
  linea: {
    width: 200,
    height: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 50
  }
})
