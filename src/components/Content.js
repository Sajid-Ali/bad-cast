import React from 'react';
import {Text, View} from 'react-native';

export const Content = ({
  contentStyle,
  lableStyle,
  titleStyle,
  lineStyle,
  label,
  value,
  profile,
}) => {
  return (
    <>
      <View style={contentStyle}>
        <Text style={lableStyle}>{label}</Text>
        <Text style={titleStyle}>
          {value !== 'appearance' ? profile[value] : profile[value].length}
        </Text>
      </View>
      <View style={lineStyle} />
    </>
  );
};
