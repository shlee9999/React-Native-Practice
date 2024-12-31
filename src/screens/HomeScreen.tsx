import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import WalkScreen from './WalkScreen';

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
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/1`,
    );
    const data = await response.json();
    return data;
  };
  // const { data } = useQuery({
  //   queryKey: ['JSON'],
  //   queryFn: fetchData,
  // });
  // console.log('Home Render!');
  // console.log('useQuery Data', data);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Home Screen</Text>
      {/* <Button
        title="산책하기"
        onPress={() => {
          navigation.navigate('Walk');
        }}
      /> */}
      <Button
        title="API 호출"
        onPress={() => {
          console.log('클릭');
          fetchData()
            .then(res => {
              console.log('데이터 패칭 로그');
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
