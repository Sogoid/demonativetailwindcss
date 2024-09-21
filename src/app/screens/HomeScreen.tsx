import {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../interface/types'; // Defina seus tipos de navegação em um arquivo separado

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg text-blue-500">Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
