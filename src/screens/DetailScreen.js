import React from 'react';
import {Text} from 'react-native';

export const DetailScreen = ({navigation, route}) => {
  const {
    params: {cast},
  } = route;
  return <Text>This is {cast.name}'s profile</Text>;
};
