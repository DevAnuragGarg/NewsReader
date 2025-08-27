import { StyleSheet } from 'react-native';
import { SECONDARY_COLOR } from '../../utils/colors';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    elevation: 5,
    backgroundColor: SECONDARY_COLOR,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
