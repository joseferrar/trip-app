import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Otp from '../../screens/Otp';
import TabNavigation from '../../Navigations/Tab/TabNavigator';
import Details from '../../screens/Details';
import Home from '../../screens/Home';

type RootStackParamList = {
  Dashboard: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
