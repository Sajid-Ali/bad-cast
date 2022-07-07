import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export const Loader = ({
  size = 'large',
  color = '#0c9',
  text = 'Fetching data....',
}) => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={size} color={color} />
      <Text>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
