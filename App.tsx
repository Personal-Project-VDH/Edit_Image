import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Project/Screen/HomeScreen';
import {TakeAPicture} from './Project/Screen/ChooseImageScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TakeAPicture" component={TakeAPicture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
