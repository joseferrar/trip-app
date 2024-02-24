import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Otp: undefined;
  Home: undefined;
};

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Login',
  'Otp',
  'Home'
>;
