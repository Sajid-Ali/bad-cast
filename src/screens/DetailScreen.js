import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {KEY_MAPPING} from '../../utilities/constants';
import {Content} from '../components/Content';
import {ImageComponent} from '../components/Image';

export const DetailScreen = ({navigation, route}) => {
  const {
    params: {cast},
  } = route;
  navigation.setOptions({
    title: cast?.name || 'Details',
  });
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ImageComponent
          imageUrl={cast.img}
          customStyle={styles.image}
          mode="stretch"
        />
      </View>
      {Object.entries(KEY_MAPPING).map(([key, value]) => {
        return (
          <Content
            value={key}
            label={value}
            profile={cast}
            lineStyle={styles.line}
            lableStyle={styles.label}
            titleStyle={styles.title}
            contentStyle={styles.content}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 260,
    height: 260,
    borderRadius: 130,
  },
  content: {
    flexWrap: 'wrap',
    paddingVertical: 15,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 20,
    color: 'green',
    marginLeft: 10,
    fontWeight: '800',
  },
  title: {
    fontSize: 16,
    marginRight: 10,
    color: '#000000',
  },
  line: {
    height: 3,
    borderRadius: 5,
    marginHorizontal: 15,
    backgroundColor: '#ccc',
  },
});
