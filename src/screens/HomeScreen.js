import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {Loader} from '../components/Loader';
import {CardItem} from '../components/CardItem';
import {BASE_URL} from '../../utilities/constants';

export const HomeScreen = ({navigation}) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchListing();
  }, []);
  const fetchListing = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      setList(response?.data || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const chatListItemView = (item, index) => {
    return <CardItem item={item} index={index} navigation={navigation} />;
  };

  if (loading) {
    return <Loader size="large" color="#0c9" text="Fetching data...." />;
  }

  return (
    <View style={styles.f1}>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={<View style={styles.lhcomponent} />}
        ListFooterComponent={<View style={styles.lfcomponent} />}
        renderItem={
          ({item, index}) => chatListItemView(item, index) //this is
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  f1: {flex: 1},
  lhcomponent: {width: '100%', height: 8},
  lfcomponent: {width: '100%', height: 28},
});
