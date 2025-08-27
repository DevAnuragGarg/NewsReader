import { StyleSheet } from 'react-native';
import { MAIN_COLOR, SECONDARY_COLOR } from '../../utils/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    padding: 16,
    justifyContent: 'center',
  },
  listColumnStyle: {
    justifyContent: 'space-between',
  },
  noProductText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_COLOR,
    padding: 24,
  },
  listView: {
    flex: 9,
  },
  headline: {
    flex: 7,
  },
  buttonView: {
    flex: 1,
    borderTopColor: 'white',
    borderTopWidth: 1,
    justifyContent: 'center',
  },
  loader: {
    padding: 10,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  textInput: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: SECONDARY_COLOR,
    paddingHorizontal: 10,
    fontSize: 16,
    height: 50,
    color: 'white',
  },
  picker: {
    color: 'white',
    fontSize: 12,
  },
  pickerView: {
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: SECONDARY_COLOR,
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
});
