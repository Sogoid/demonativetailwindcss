import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeStackNavigator from './src/router/Router';
import './src/styles/global.css';

export default function App() {
  return (
    // <SafeAreaView className={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     className={backgroundStyle}>
    //     <View className="bg-white dark:bg-black">
    //       <Router />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}
