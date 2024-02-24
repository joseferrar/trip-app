import {Image, ScrollView, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

type BottomCardProps = {
  children: React.ReactNode;
  contentStyle: ViewStyle;
};
const BottomCard = ({children, contentStyle}: BottomCardProps) => {
  return (
    <View style={styles.bottomCard}>
      <ScrollView>
        <Image
          source={require('../../assets/images/Line.png')}
          style={styles.line}
        />
        <View style={[styles.content, contentStyle]}>{children}</View>
      </ScrollView>
    </View>
  );
};

export default BottomCard;

const styles = StyleSheet.create({
  bottomCard: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 12,
  },
  line: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  content: {
    margin: 12,
  },
});
