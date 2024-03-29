import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {PlaceType} from '../../data/place';
import {NavigationProps} from '../../types/navigation';

type PlaceTypeIn = {
  item: PlaceType;
  index?: number;
  navigation: NavigationProps;
};

const PlaceCard = ({item, index, navigation}: PlaceTypeIn) => {
  return (
    <TouchableOpacity
      style={styles.view}
      key={index}
      activeOpacity={0.6}
      onPress={() => navigation.navigate('Details', {place: item})}>
      <ImageBackground
        borderRadius={12}
        source={{
          uri: item.Urls[0],
        }}
        style={styles.img_bg}>
        <View style={styles.card}>
          <View style={styles.cardItem}>
            <Image source={require('../../assets/images/star.png')} />
            <Text style={styles.star}>{item.rate}</Text>
          </View>
          <View style={styles.heart}>
            <Image source={require('../../assets/images/red_heart.png')} />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{item.city}</Text>

          <View style={{flexDirection: 'row'}}>
            <Image source={require('../../assets/images/location.png')} />
            <Text style={styles.body}>{item.state}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  view: {
    borderRadius: 12,
    elevation: 2,
    borderWidth: 0,
    marginTop: 12,
    marginBottom: 12,
    marginRight: 8,
    marginLeft: 8,
    height: 'auto',
  },
  img_bg: {
    width: 167,
    height: 141,
  },
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardItem: {
    flexDirection: 'row',
    padding: 10,
  },
  star: {
    color: '#fff',
    fontSize: 14,
    marginTop: -3,
    marginLeft: 6,
    textShadowColor: '#000',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 10,
  },
  heart: {
    padding: 8,
  },
  content: {
    position: 'absolute',
    bottom: 2,
    left: 8,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Raleway-Bold',
    marginBottom: 3,
    textShadowColor: '#000',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  body: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Raleway-Medium',
    marginTop: -3,
    marginLeft: 6,
    textShadowColor: '#000',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
