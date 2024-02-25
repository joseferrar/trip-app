import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import React from 'react';
import SearchInput from '../components/Input/SearchInput';
import {NavigationProps} from '../types/navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../components/Button/Button';

const Details = ({navigation}: NavigationProps) => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{flex: 1, backgroundColor: '#fff'}}
      onTouchStart={Keyboard.dismiss}>
      <ImageBackground
        source={require('../assets/images/place.png')}
        style={styles.container}>
        <GestureHandlerRootView style={styles.hearder}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{marginRight: 12}}
            onPress={() => navigation.goBack()}>
            <Image source={require('../assets/images/arrow_left.png')} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Place Details</Text>
        </GestureHandlerRootView>
        <SearchInput placeholder="Search any places" />
      </ImageBackground>
      <View style={styles.section}>
        <Text style={styles.city}>Moldava city</Text>
        <Text style={styles.linkText}>$ 89,100</Text>
        <Text style={styles.state}>
          <Image source={require('../assets/images/mark.png')} /> Asia
        </Text>
      </View>

      {/* star */}
      <GestureHandlerRootView>
        <ScrollView style={styles.detailContainer}>
          <View style={styles.packageView}>
            <Image source={require('../assets/images/sun.png')} />
            <Text style={styles.packageText}>Package</Text>
          </View>
          <View style={styles.ratingLayout}>
            <Image source={require('../assets/images/blue_star.png')} />
            <Text style={styles.grayText}>Ratings</Text>
            <Image
              source={require('../assets/images/red_heart.png')}
              style={styles.heartIcon}
            />
            <Text style={styles.rate}>
              4.5 <Text style={styles.review}>(98k Reviews)</Text>
            </Text>
          </View>

          <View style={[styles.ratingLayout, {marginTop: 20}]}>
            <Image source={require('../assets/images/distance.png')} />
            <Text style={[styles.grayText, {width: '90%'}]}>Distance</Text>
            <Text style={styles.rate}>2030 km</Text>
          </View>
          <View style={styles.detailContainer}>
            <Button
              title="Trip Plans"
              style={styles.tripBtn}
              textStyle={styles.btnText}
            />
            <Text style={styles.about}>About</Text>
            <Text style={[styles.grayText, {width: '100%'}]}>
              Lorem ipsum dolor sit amet consectetur. Consequat etiam massa
              sapien vulputate eget et. Nec urna leo mattis nec. Ultricies
              turpis quis ornare amet praesent. Feugiat.Lorem ipsum dolor sit
              amet{' '}
            </Text>
            <Text style={styles.about}>Facilities</Text>
            <Text style={styles.grayText}>{`\u25CF  Free Timing`}</Text>
            <Text style={styles.grayText}>{`\u25CF  Swimming pool`}</Text>
            <Text style={styles.grayText}>{`\u25CF  Video Games`}</Text>
          </View>
        </ScrollView>
        <Button
          title="Book"
          style={styles.bookBtn}
          textStyle={styles.btnText}
        />
      </GestureHandlerRootView>
    </KeyboardAvoidingView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 230,
    elevation: 4,
  },
  hearder: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
    marginLeft: 12,
    marginRight: 12,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    marginTop: -30,
    padding: 20,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
    width: '100%',
  },
  city: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'Raleway-Bold',
    width: '60%',
  },
  state: {
    color: '#8E8E8E',
    fontSize: 14,
    fontFamily: 'Raleway-Medium',
    marginTop: -24,
    width: '60%',
  },
  linkText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'MontserratAlternates-Bold',
    backgroundColor: '#4BD4FF',
    paddingVertical: 26,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    marginTop: -22,
  },
  packageView: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 20,
    alignItems: 'center',
    marginBottom: 3,
  },
  packageText: {
    width: 'auto',
    color: '#000',
    fontSize: 14,
    fontFamily: 'Raleway-Bold',
    marginLeft: 4,
  },
  detailContainer: {
    marginLeft: 22,
    marginRight: 22,
    height: 525,
    marginBottom: 34,
  },
  grayText: {
    color: '#8E8E8E',
    fontSize: 14,
    fontFamily: 'Raleway-Medium',
    width: '80%',
  },
  ratingLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  heartIcon: {
    position: 'relative',
    right: 30,
    end: 30,
  },
  rate: {
    color: '#000',
    marginLeft: 30,
    fontFamily: 'MontserratAlternates-Bold',
  },
  review: {
    color: '#000',
    marginLeft: 30,
    fontFamily: 'Raleway-Medium',
    fontSize: 12,
  },
  tripBtn: {
    width: '70%',
    marginTop: 20,
    marginLeft: -12,
    marginBottom: 20,
    height: 60,
  },
  about: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Raleway-Bold',
    marginTop: 12,
  },
  bookBtn: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    right: '10%',
    width: 300,
    height: 46,
    bottom: 0,
  },
  btnText: {
    fontFamily: 'Raleway-Medium',
    fontSize: 16,
  },
});
