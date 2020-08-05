import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Discover from './pages/Discover';
import Tickets from './pages/Tickets';

const Stack = createStackNavigator ();

const Tab = createBottomTabNavigator();

const TabsNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: "#0073FF",
        activeBackgroundColor: "#0073FF",
        labelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#FFFFFF",
        showIcon: true,
      }}
    >
      <Tab.Screen
        name='Feed' 
        component={Feed} 
        options={{
          tabBarIcon: () => <Icon name='home' size={25} color='#FFFFFF'/>
        }}
      />
      <Tab.Screen 
        name='Discover'
        component={Discover}
        options={{
          tabBarIcon: () => <Icon name='explore' size={25} color='#FFFFFF'/>
        }}
      />
      <Tab.Screen 
        name='Tickets'
        component={Tickets}
        options={{
          tabBarIcon: () => <Icon name='local-activity' size={25} color='#FFFFFF'/>
        }}
      />
      <Tab.Screen 
        name='Profile' 
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name='person' size={25} color='#FFFFFF'/>,
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
        <Stack.Screen 
          name= 'Tabs' 
          component= {TabsNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;