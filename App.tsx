import './src/styles/global.css';

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import Router from './src/router/Router';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? 'bg-black' : 'bg-white';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <View className="bg-white dark:bg-black">
          <Router />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
