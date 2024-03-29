import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

type ButtonProps = {
  title?: string;
  onPress?: () => void;
  disabled?: boolean | undefined;
  icon: any;
  containerStyle?: any;
  textStyle?: any;
};

const IconButton = ({
  onPress,
  title,
  disabled,
  icon,
  containerStyle,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Image source={icon} style={styles.buttonImage} />
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 50,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderColor: '#E2E2E2',
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    fontFamily: 'MontserratAlternates-Ragular',
    marginRight: 'auto',
    fontSize: 16,
    color: '#000',
  },
});
