// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Today from './src/Tabs/Today'
import ThisWeek from './src/Tabs/ThisWeek'
import ThisMonth from './src/Tabs/ThisMonth'

const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Today" component={Today} />
      <Tab.Screen name="This Week" component={ThisWeek} />
      <Tab.Screen name="This Month" component={ThisMonth} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LeaderBoard" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;