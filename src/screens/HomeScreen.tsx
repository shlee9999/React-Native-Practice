import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import WalkScreen from './WalkScreen';

type HomeStackProps = {
  Home: undefined;
  Walk: undefined;
};

const Stack = createNativeStackNavigator<HomeStackProps>();

type Props = NativeStackScreenProps<HomeStackProps, 'Home'>;

function HomeScreen({ navigation }: Props) {
  const fetchData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    return response.data;
  };
  const { data } = useQuery({
    queryKey: ['JSON'],
    queryFn: fetchData,
  });
  console.log('Home Render!');
  console.log('useQuery Data', data);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Home Screen</Text>
      <Text>{JSON.stringify(data)}</Text>
      <Button
        title="산책하기"
        onPress={() => {
          navigation.navigate('Walk');
        }}
      />
    </View>
  );
}

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Walk" component={WalkScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
