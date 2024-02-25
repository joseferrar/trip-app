import React from 'react';
import AlermIcon from '../../components/icons/AlermIcon';
import {Image} from 'react-native';
import HomeIcon from '../../components/icons/HomeIcon';
import ChatIcon from '../../components/icons/ChatIcon';
import HeartIcon from '../../components/icons/HeartIcon';

const TabActive = (route: any, focused: any) => {
  if (route.name === 'Home') {
    return (
      <HomeIcon
        color={focused ? '#4BD4FF' : '#000'}
        width={40}
        height={40}
        focusable={focused}
      />
    );
  } else if (route.name === 'Saved') {
    return (
      <HeartIcon
        color={focused ? '#4BD4FF' : '#000'}
        width={35}
        height={30}
        focusable={focused}
      />
    );
  } else if (route.name === 'Notification') {
    return (
      <AlermIcon
        color={focused ? '#4BD4FF' : '#000'}
        width={35}
        height={35}
        focusable={focused}
      />
    );
  } else if (route.name === 'Add') {
    return (
      <Image
        source={require('../../assets/images/plus.png')}
        width={30}
        height={30}
        style={{
          marginTop: -40,
          marginRight: 12,
        }}
      />
    );
  } else if (route.name === 'Chat') {
    return (
      <ChatIcon
        color={focused ? '#4BD4FF' : '#000'}
        width={35}
        height={35}
        focusable={focused}
      />
    );
  }
};

export default TabActive;
