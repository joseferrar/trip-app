import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
import IconButton from '../components/Button/IconButton';
import TextButton from '../components/Button/TextButton';
import Button from '../components/Button/Button';
import PasswordInput from '../components/Input/PasswordInput';
import BottomCard from '../components/Card/BottomCard';
import FormInput from '../components/Input/FormInput';
import {NavigationProps} from '../types/navigation';

const Login = ({navigation}: NavigationProps) => {
  const modalizeRef = useRef<Modalize>(null);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // const onOpen = async () => {
  //   await modalizeRef.current?.open();
  // };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/images/marker.png')} />
          <Text style={styles.headerText}>Login</Text>
        </View>
      </ImageBackground>
      <Modalize
        alwaysOpen={300}
        adjustToContentHeight={true}
        ref={modalizeRef}
        scrollViewProps={{showsVerticalScrollIndicator: false}}
        handleStyle={styles.handle}
        modalStyle={styles.modal}>
        <BottomCard contentStyle={styles.form}>
          <Text style={styles.labal}>Enter your mobile number</Text>
          <FormInput
            keyboardType="number-pad"
            value={phone}
            placeholder="Phone Number"
            onChangeText={e => setPhone(e)}
          />
          <Text style={styles.labal}>Enter your passoword</Text>
          <PasswordInput
            value={password}
            placeholder="Password"
            onChangeText={e => setPassword(e)}
          />
          <Button
            title="Login"
            style={styles.btn}
            onPress={() => navigation.navigate('Otp', {phoneNumber: phone})}
          />
          <View style={styles.footer}>
            <Text style={styles.footer_inner}>Create a new account ?</Text>
            <Text style={styles.footer_btn}>Sign Up</Text>
          </View>
          <Text style={styles.less}>Or</Text>
          <IconButton
            title="Continue with Google"
            icon={require('../assets/images/google.png')}
            containerStyle={styles.google}
          />
          <IconButton
            title="Continue with Google"
            icon={require('../assets/images/facebook.png')}
            containerStyle={styles.google}
          />
          <Text style={[styles.less, {marginTop: 8}]}>Or</Text>
          <TextButton title="Continue as Guest" />
        </BottomCard>
      </Modalize>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  headerText: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'MontserratAlternates-Bold',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  form: {
    marginTop: 30,
  },
  labal: {
    color: '#000',
    marginLeft: 12,
    fontFamily: 'Raleway-Bold',
    fontSize: 14,
  },
  btn: {
    marginTop: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 12,
  },
  footer_inner: {
    color: '#8E8E8E',
    fontSize: 14,
    fontFamily: 'Raleway-Medium',
  },
  footer_btn: {
    color: '#4BD4FF',
    marginLeft: 6,
    fontSize: 14,
    fontFamily: 'Raleway-Bold',
  },
  less: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
    fontFamily: 'Raleway-Medium',
  },
  google: {
    marginTop: 12,
  },
  handle: {
    backgroundColor: '#8E8E8E',
    marginTop: 20,
    height: 2.5,
  },
  modal: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
    margin: 0,
  },
});
export default Login;
