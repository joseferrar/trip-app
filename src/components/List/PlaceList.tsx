import {StyleSheet, View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import PlaceCard from '../Card/PlaceCard';
import {places} from '../../data/place';

const PlaceList = ({navigation}) => {
  return (
    <GestureHandlerRootView>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {places.map((place, index) => (
            <PlaceCard item={place} key={index} navigation={navigation}/>
          ))}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
  },
});
