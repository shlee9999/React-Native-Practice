import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Form1'>;

export default function FormScreen1({ navigation }: Props) {
  return (
    <View>
      <Text>FormScreen1</Text>
      <Button
        title="Nav to Form2"
        onPress={() => {
          navigation.navigate('Form2');
        }}
      />
    </View>
  );
}

// const styles = StyleSheet.create({});
