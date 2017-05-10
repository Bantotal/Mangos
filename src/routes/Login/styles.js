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
  buttonContainer: {
    marginBottom: (Platform.OS === 'ios') ? 50 : 0
  },
  loginButton: {
    marginBottom: (Platform.OS === 'ios') ? 30 : 10
  },
  button: {
    fontWeight: '400'
  },
  textLogin: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Helvetica-Bold',
    color: '#020F1D'
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
  }
})
