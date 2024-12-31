import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { RootStackParamList } from './src/types/RootStackParamList';
import FormScreen1 from './src/screens/FormScreen1';
import FormScreen2 from './src/screens/FormScreen2';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Form1"
            component={FormScreen1}
            options={{
              title: 'Form1',
            }}
          />
          <Stack.Screen
            name="Form2"
            component={FormScreen2}
            options={{ title: 'Form2' }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome to Home!' }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: 'Welcome to Profile!' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
