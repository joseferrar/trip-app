import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {categories} from '../../data/category';

const CategoryList = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {categories.map((category, index) => (
            <View style={styles.view} key={index.toString()}>
              <Image source={{uri: category.image}} style={styles.img} />
              <Text style={styles.text}>{category.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  view: {
    padding: 30,
  },
  img: {
    width: 30,
    height: 30,
  },
  text: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
  },
  text1: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
  },
});
