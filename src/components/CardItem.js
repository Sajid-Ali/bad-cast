import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import {ImageComponent} from './Image';

export const CardItem = ({item, index, navigation}) => {
  return (
    <TouchableWithoutFeedback
      key={`${index}-${Date()}`}
      onPress={() => {
        navigation.navigate('Detail', {cast: item});
      }}>
      <View style={styles.mainCardView}>
        <View style={styles.wrapper}>
          <View style={styles.subCardView}>
            <ImageComponent imageUrl={item.img} customStyle={styles.image} />
          </View>
          <View style={styles.ml12}>
            <Text style={styles.name}>{item.name || ''}</Text>
            <View style={styles.nicknameView}>
              <Text style={styles.nickname}>{item.nickname || ''}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  f1: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainCardView: {
    height: 90,
    backgroundColor: Colors.white,
    borderRadius: 5,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginVertical: 6,
    marginHorizontal: 12,
  },
  wrapper: {flexDirection: 'row', alignItems: 'center'},
  subCardView: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: Colors.history_back,
    borderColor: Colors.color_eeeeee,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 33,
    height: 65,
    width: 65,
  },
  name: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  nicknameView: {
    marginTop: 4,
    borderWidth: 0,
    width: '85%',
  },
  nickname: {
    color: Colors.gray,
    fontSize: 12,
  },
  ml12: {marginLeft: 12},
});
