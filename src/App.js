import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {HomeScreen} from './screens/HomeScreen';
import {DetailScreen} from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Listing'}}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{title: 'Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
