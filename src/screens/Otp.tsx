import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Button from '../components/Button/Button';
import BottomCard from '../components/Card/BottomCard';
import ResendText from '../components/Typography/ResendText';
import {useTimer} from '../hooks/useTimer';
import {NavigationProps} from '../types/navigation';

const OtpScreen = ({navigation}: NavigationProps) => {
  const {timer, startTimer, resetTimer} = useTimer({});
  const modalizeRef = useRef<Modalize>(null);
  const [sms, setSms] = useState('');

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
          <Text style={styles.headerText}>Enter OTP</Text>
          <Text style={styles.subTitle}>An 4 digit OTP has been sent to</Text>
          <Text style={styles.phone}>+91998435344</Text>

          <OTPInputView
            pinCount={4}
            code={sms}
            keyboardType="number-pad"
            style={styles.otpInput}
            autoFocusOnLoad={false}
            keyboardAppearance="default"
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeChanged={code => setSms(code)}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <Button title="Verify" onPress={() => navigation.navigate('Home')} />
          <View style={styles.footer}>
            <Text style={styles.subTitle} onPress={resetTimer}>
              Resent OTP
            </Text>
            <ResendText startTimer={startTimer} counter={timer} />
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
  headerText: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  form: {
    marginTop: 20,
  },
  subTitle: {
    color: '#8E8E8E',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 26,
    fontWeight: '600',
  },
  phone: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 12,
  },
  footer_btn: {
    color: '#8E8E8E',
    marginLeft: 6,
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    marginTop: 3,
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
  otpInput: {
    width: '95%',
    marginRight: 'auto',
    marginLeft: 'auto',
    height: 100,
  },
  borderStyleBase: {
    width: 47,
    height: 47,
    borderColor: '#8E8E8E',
    color: '#000',
    backgroundColor: '#fff',
  },
  borderStyleHighLighted: {
    backgroundColor: '#fff',
    color: '#000',
  },

  underlineStyleBase: {
    width: 47,
    height: 47,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 'bold',
  },
  underlineStyleHighLighted: {
    color: '#000',
    backgroundColor: '#fff',
  },
});
export default OtpScreen;
