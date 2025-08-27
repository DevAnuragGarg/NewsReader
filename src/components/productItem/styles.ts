import { StyleSheet } from 'react-native';
import {
  SECONDARY_COLOR,
  TERTIARY_COLOR,
  QUATERNARY_COLOR,
} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: 'white',
    justifyContent: 'flex-start',
    borderWidth: 2,
    elevation: 5,
    backgroundColor: SECONDARY_COLOR,
  },
  image: {
    height: 100,
    borderRadius: 20,
    overflow: 'hidden',
    resizeMode: 'stretch',
  },
  imageContainer: {
    width: '40%',
    flexDirection: 'column',
  },
  infoContainer: {
    marginBottom: 5,
    width: '59%',
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#FF9B00',
  },
  description: {
    fontSize: 12,
    color: 'white',
  },
  date: {
    fontSize: 10,
    color: TERTIARY_COLOR,
    marginTop: 5,
  },
  author: {
    fontSize: 10,
    color: QUATERNARY_COLOR,
    marginTop: 5,
  },
});
