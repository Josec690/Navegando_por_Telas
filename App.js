import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4169E1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Início'
          }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{
            title: 'Detalhes'
          }}
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{
            title: 'Sobre'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}