import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Otp from '../../screens/Otp';
import TabNavigation from '../../Navigations/Tab/TabNavigator';

type RootStackParamList = {
  Login: undefined;
  Otp: {phoneNumber: string | undefined};
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />
      <Stack.Screen
        name="Dashboard"
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
