import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import DetailsScreen from '../app/screens/DetailsScreen';
import HomeScreen from '../app/screens/HomeScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default Router;
