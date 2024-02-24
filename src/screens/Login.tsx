import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import BottomCard from '../components/Card/BottomCard';
import FormInput from '../components/Input/FormInput';
import PasswordInput from '../components/Input/PasswordInput';
import Button from '../components/Button/Button';
import IconButton from '../components/Button/IconButton';
import TextButton from '../components/Button/TextButton';

const Login = () => {
  const [phone, setPhone] = useState('');
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
      <BottomCard contentStyle={styles.form}>
        <Text style={styles.labal}>Enter your mobile number</Text>
        <FormInput
          value={phone}
          placeholder="Phone Number"
          onChangeText={e => setPhone(e)}
        />
        <Text style={styles.labal}>Enter your passoword</Text>
        <PasswordInput
          value={phone}
          placeholder="Phone Number"
          onChangeText={e => setPhone(e)}
        />
        <Text style={styles.forgot}>Forgot passoword</Text>
        <Button title="Login" style={styles.btn} />
        <View style={styles.footer}>
          <Text style={styles.footer_inner}>Create a new account ?</Text>
          <Text
            style={styles.footer_btn}
            // onPress={() => navigation.navigate('Register')}
          >
            Sign Up
          </Text>
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
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
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
  form: {
    marginTop: 30,
  },
  labal: {
    color: '#000',
    marginLeft: 12,
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
});
