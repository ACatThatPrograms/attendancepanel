import { StyleSheet, Dimensions } from 'react-native';

let screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  input: {
    height: 60,
    backgroundColor: 'rgba(20,20,20,.85)',
    marginBottom: 10,
    padding: 14,
    color: '#fff',
    fontSize: 14,
    opacity: .75
  },
  button: {
    paddingVertical: 16,
    backgroundColor: 'rgba(189,90,90,.85)'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});
