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
import React, {useState} from 'react';

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

const PasswordInput = ({
  value,
  onChangeText,
  placeholder,
  editable,
  style,
  onBlur,
}: FormInputProps) => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <View style={[styles.input_container, style]}>
      <TextInput
        style={styles.input}
        editable={editable}
        secureTextEntry={show}
        placeholder={placeholder}
        placeholderTextColor="rgb(150,150,150)"
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      <TouchableOpacity activeOpacity={0.5} onPress={handleShow}>
        <Image source={require('../../assets/images/eye.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  input_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 49,
    flexDirection: 'row',
    height: 44,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1.5,
    borderColor: '#E2E2E2',
  },
  input: {
    color: '#000',
    fontSize: 14,
    width: '85%',
    alignSelf: 'center',
    fontFamily: 'MontserratAlternates-Regular',
    height: 50,
  },
});
