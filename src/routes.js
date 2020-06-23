import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Details from './pages/Details';

enableScreens();
const Stack = createNativeStackNavigator ();

const Tab = createBottomTabNavigator();

const TabsNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Feed' component={Feed}/>
      <Tab.Screen name='Details' component={Details}/>
      <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='TabsNav' component={TabsNav}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;