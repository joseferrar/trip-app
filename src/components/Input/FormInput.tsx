import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import React, {useState, useEffect} from 'react';

type FormInputProps = {
  value: string;
  onChangeText?: ((e: string) => void) | undefined;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  placeholder?: string | undefined;
  editable?: boolean | undefined;
  style?: ViewStyle;
  color?: string | undefined;
  secureTextEntry?: boolean;
};

const FormInput = ({
  value,
  onChangeText,
  placeholder,
  editable,
  style,
  onBlur,
}: FormInputProps) => {
  console.log(value?.length);

  return (
    <View style={[styles.input_container, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        editable={editable}
        placeholderTextColor="rgb(150,150,150)"
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
      />
      {value.length > 9 && (
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require('../../assets/images/tick.png')}
            style={{width: 16, height: 16}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 49,
    flexDirection: 'row',
    height: 44,
    marginTop: 8,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: '#E2E2E2',
  },
  input: {
    color: '#000',
    fontSize: 14,
    width: '85%',
    alignSelf: 'center',
    height: 50,
  },
});
