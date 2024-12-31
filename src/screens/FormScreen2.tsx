import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Form2'>;

export default function FormScreen2({ navigation }: Props) {
  return (
    <View>
      <Text>FormScreen2</Text>
      <Button
        title="Nav to Home"
        onPress={() => {
          navigation.navigate('Home');
          navigation.reset({
            routes: [{ name: 'Home' }],
          });
        }}
      />
    </View>
  );
}

// const styles = StyleSheet.create({});
