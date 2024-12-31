import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import WalkScreen from './WalkScreen';
import { BASE_URL } from '../constants/baseUrl';

type HomeStackProps = {
  Main: undefined;
  Walk: undefined;
};

const Stack = createNativeStackNavigator<HomeStackProps>();

type Props = NativeStackScreenProps<HomeStackProps, 'Main'>;

function HomeScreen({ navigation }: Props) {
  console.log('Fetch Data');
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData()
      .then(res => {
        console.log('데이터 패칭 로그', res);
        setData(res);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Home Screen</Text>
      <Button
        title="API 호출"
        onPress={() => {
          console.log('클릭');
          fetchData()
            .then(res => {
              console.log(res);
              setData(res);
            })
            .catch(err => console.error(err));
        }}
      />
      <Text>data: {JSON.stringify({ data })}</Text>
    </View>
  );
}

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Walk" component={WalkScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
