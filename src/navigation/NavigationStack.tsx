import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/rootStackParamList.type';
import { NavigationContainer } from '@react-navigation/native';
import { HOME_SCREEN } from './screenName.constant';
import { HomeScreen } from '../screens/home';

export const Navigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={{ title: 'HOME' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
