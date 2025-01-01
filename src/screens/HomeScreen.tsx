import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WalkScreen from './WalkScreen';
import {
  fetchHomeData,
  FetchHomeDataResponseType,
} from '../apis/Home/fetchHomeData';

type HomeStackProps = {
  Main: undefined;
  Walk: undefined;
};

const Stack = createNativeStackNavigator<HomeStackProps>();

type Props = NativeStackScreenProps<HomeStackProps, 'Main'>;

function HomeScreen({ navigation }: Props) {
  console.log('Fetch Data');
  const [data, setData] = useState<FetchHomeDataResponseType>();

  useEffect(() => {
    fetchHomeData()
      .then(res => {
        console.log('데이터 패칭 로그', res);
        setData(res);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Home Screen</Text>
      <Text>data: {JSON.stringify({ data })}</Text>
      {/* {data.map(({id,name,})=><Text>{id} : {name}</Text>)} */}
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
