import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabActive from './TabActive';
import Notification from '../../screens/Notification';
import Chat from '../../screens/Chat';
import Add from '../../screens/Add';
import Saved from '../../screens/Saved';
import HomeStack from '../Stack/HomeStack';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}): any => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused}: any) => {
          return TabActive(route, focused);
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#fff',
          elevation: 4,
          height: 65,
          borderRadius: 0,
          bottom: 0,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            marginBottom: 4,
            fontFamily: 'Raleway-Medium',
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          headerShown: false,
          tabBarLabel: 'Saved',
          tabBarLabelStyle: {
            marginBottom: 6,
            fontFamily: 'Raleway-Medium',
            fontSize: 12,
          },
          tabBarIconStyle: {marginRight: 2},
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          headerShown: false,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarLabel: 'Notification',
          tabBarLabelStyle: {
            marginBottom: 6,
            fontFamily: 'Raleway-Medium',
            fontSize: 12,
          },
          tabBarIconStyle: {marginLeft: 2, marginTop: 6},
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarLabel: 'Chat',
          tabBarLabelStyle: {
            marginBottom: 6,
            fontFamily: 'Raleway-Medium',
            fontSize: 12,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
