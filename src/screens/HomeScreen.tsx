import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from '../types/RootStackParamList';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
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
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      />
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}

// const styles = StyleSheet.create({});
