import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../components/Input/SearchInput';
import CategoryList from '../components/List/CategoryList';

const Home = () => {
  const [search, setSearch] = useState('');
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{flex: 1}}
      onTouchStart={Keyboard.dismiss}>
      <ImageBackground
        source={require('../assets/images/header.png')}
        style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 16,
            marginLeft: 12,
            marginRight: 12,
          }}>
          <Image
            source={require('../assets/images/menu.png')}
            style={{marginTop: 16}}
          />
          <Image source={require('../assets/images/logo.png')} />
          <Image
            source={require('../assets/images/user.png')}
            style={{marginTop: 16}}
          />
        </View>
        <SearchInput placeholder="Search any places" />
      </ImageBackground>
      <View style={styles.section}>
        {/* <Image source={require('../assets/images/marker.png')} /> */}
        <Text style={{color: '#000', fontSize: 18, fontWeight: '700'}}>
          Categories
        </Text>
        <Text style={{color: '#4BD4FF', fontSize: 16, fontWeight: '600'}}>
          See All
        </Text>
      </View>
      <CategoryList />
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 230,
    elevation: 4,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
});
