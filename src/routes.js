import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Feed from './pages/Feed';
import Profile from './pages/Profile';

const Stack = createStackNavigator ();
const Drawer = createDrawerNavigator ();

const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName= 'Feed' 
          screenOptions={{ 
            headerStyle: { backgroundColor: '#0D755F'}, 
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}>
          <Stack.Screen name='Feed' component={Feed}/>
          <Stack.Screen name='Profile' component={Profile}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default Routes;