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

const Login = ({navigation}: any) => {
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
          <Image source={require('../assets/images/otp.png')} />
          <Text style={{color: '#fff', fontSize: 32, fontWeight: 'bold'}}>
            OTP
          </Text>
        </View>
      </ImageBackground>
      <Modalize
        alwaysOpen={50}
        adjustToContentHeight={true}
        ref={modalizeRef}
        scrollViewProps={{showsVerticalScrollIndicator: false}}
        handleStyle={styles.handle}
        modalStyle={styles.modal}>
        <BottomCard contentStyle={styles.form}>
          <Text
            style={{
              color: '#000',
              fontSize: 32,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Enter OTP
          </Text>
          <Text style={styles.subTitle}>An 4 digit OTP has been sent to</Text>
          <Text style={styles.phone}>+91998435344</Text>
          <Button
            title="Login"
            style={styles.btn}
            onPress={() => navigation.navigate('Otp')}
          />
          <View style={styles.footer}>
            <Text style={styles.footer_inner}>Create a new account ?</Text>
            <Text style={styles.footer_btn}>Sign Up</Text>
          </View>
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
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  bottomCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  form: {
    marginTop: 20,
  },
  subTitle: {
    color: '#8E8E8E',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 26,
  },
  phone: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  forgot: {
    color: '#4BD4FF',
    textAlign: 'right',
    fontWeight: '600',
    marginRight: 10,
    marginTop: 10,
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
    fontFamily: 'Poppins-Regular',
  },
  footer_btn: {
    color: '#4BD4FF',
    marginLeft: 6,
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  less: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
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
  },
});
export default Login;
