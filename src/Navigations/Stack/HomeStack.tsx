import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../../screens/Details';
import Home from '../../screens/Home';
import {PlaceType} from '../../data/place';

type RootStackParamList = {
  Dashboard: {place: PlaceType};
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
