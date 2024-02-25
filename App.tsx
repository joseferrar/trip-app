import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/Navigations/Stack/MainStack';

function App() {
  return (
    <>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </>
  );
}

export default App;
