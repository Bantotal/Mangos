import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  logoView: {
    flex: 0.4,
    justifyContent: 'center',
    marginHorizontal: 40
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: (Platform.OS === 'ios') ? 'Dhurjati' : 'Dhurjati-Regular'
  },
  textView: {
    flex: 0.6
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
  loginButton: {
    marginBottom: 10
  },
  textLogin: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Helvetica-Bold',
    color: '#020F1D'
  }
})
