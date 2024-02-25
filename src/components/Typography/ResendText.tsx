import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ResendText = ({counter = 10}: any) => {
  const disabled = counter > 0;

  return (
    <View>
      {disabled ? (
        <Text style={styles.footer_btn}>{`(00:${counter
          .toString()
          .padStart(2, '0')})`}</Text>
      ) : null}
    </View>
  );
};

export default ResendText;

const styles = StyleSheet.create({
  mobile: {
    fontWeight: '600',
  },
  footer_btn: {
    color: '#8E8E8E',
    marginLeft: 6,
    fontSize: 14,
    fontFamily: 'Raleway-Bold',
    marginTop: 3,
  },
});
