import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean | undefined;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const Button = ({onPress, title, disabled, style, textStyle}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.btnTitle, textStyle, {color: '#fff'}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: '#4BD4FF',
    paddingHorizontal: 50,
    paddingVertical: 12,
    marginLeft: 14,
    marginRight: 14,
  },
  btnTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
});
