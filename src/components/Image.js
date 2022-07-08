import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const ImageComponent = ({imageUrl, customStyle, mode = 'cover'}) => {
  return (
    <Image
      source={{uri: imageUrl}}
      resizeMode={mode}
      style={[customStyle, styles.image]}
    />
  );
};

const styles = StyleSheet.create({});
