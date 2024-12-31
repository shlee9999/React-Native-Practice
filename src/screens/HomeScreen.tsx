import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
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
    </View>
  );
}

// const styles = StyleSheet.create({});
