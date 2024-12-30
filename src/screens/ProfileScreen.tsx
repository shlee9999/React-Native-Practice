import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation, route }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
}

// const styles = StyleSheet.create({});
