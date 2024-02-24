import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import BottomCard from '../components/Card/BottomCard';

const Login = () => {
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/marker.png')} />
        <Text style={{color: '#fff', fontSize: 32, fontWeight: 'bold'}}>
          Login
        </Text>
      </View>
      <BottomCard>
        <Text style={{color: '#000'}}>Enter your Mobile number</Text>
      </BottomCard>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 50,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomCard: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
