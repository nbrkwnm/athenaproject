import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Discover from './pages/Discover';
import Tickets from './pages/Tickets';

enableScreens();
const Stack = createNativeStackNavigator ();

const Tab = createBottomTabNavigator();

const TabsNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
          labelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          },
          showIcon: true,
      }}        
    >
    <Tab.Screen 
      name='Feed' 
      component={Feed} 
      options={{
        tabBarIcon: () => <Icon name='home' size={25} color='#0073FF'/>
      }}
    />
    <Tab.Screen 
      name='Discover'
      component={Discover}
      options={{
        tabBarIcon: () => <Icon name='explore' size={25} color='#0073FF'/>
      }}
    />
    <Tab.Screen 
      name='Tickets'
      component={Tickets}
      options={{
        tabBarIcon: () => <Icon name='local-activity' size={25} color='#0073FF'/>
      }}
    />
    <Tab.Screen 
      name='Profile' 
      component={Profile}
      options={{
        tabBarIcon: () => <Icon name='person' size={25} color='#0073FF'/>
      }}
    />
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