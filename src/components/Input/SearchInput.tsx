import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';

type SearchInputProps = {
  value?: string | undefined;
  onChangeText?: ((e: string) => void) | undefined;
  placeholder: string | undefined;
};
const SearchInput = ({value, onChangeText, placeholder}: SearchInputProps) => {
  return (
    <View style={styles.input_container}>
      <TouchableOpacity activeOpacity={0.5} disabled>
        <Image
          style={styles.icon}
          source={require('../../assets/images/search.png')}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgb(150,150,150)"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  input_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    flexDirection: 'row',
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    position: 'relative',
    bottom: 0,
    top: '8%',
  },
  input: {
    color: '#000',
    fontSize: 16,
    width: '75%',
    alignSelf: 'center',
    height: 50,
  },
  icon: {
    marginRight: 12,
    alignSelf: 'flex-start',
  },
  right_icon: {
    marginLeft: 'auto',
    width: 18,
    height: 18,
    alignSelf: 'center',
    borderRadius: 20,
    padding: 18,
  },
});
