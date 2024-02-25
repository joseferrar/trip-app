import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

type ImageListProps = {
  imgUrl: string[];
  count?: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ImageList = ({imgUrl, count, setCount}: ImageListProps) => {
  return (
    <GestureHandlerRootView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {imgUrl.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.6}
              key={index}
              style={[
                styles.view,
                {borderColor: count === index ? 'yellow' : '#fff'},
              ]}
              onPress={() => setCount(index)}>
              <Image source={{uri: item}} width={50} height={50} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default ImageList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 20,
    position: 'relative',
    bottom: 0,
  },
  view: {
    marginRight: 12,
    marginLeft: 12,
    borderWidth: 3,
    borderRadius: 5,
  },
});
