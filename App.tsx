import { StatusBar, StyleSheet, View } from 'react-native';
import { Navigation } from './src/navigation/NavigationStack';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
