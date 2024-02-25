import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Saved = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved Screen</Text>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});
