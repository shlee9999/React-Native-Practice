import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/screens/ProfileScreen';
import { RootStackParamList } from './src/types/RootStackParamList';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#783D16',
            headerShown: false,
          }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, focused, size }) => {
                return (
                  <Icon
                    name={focused ? 'home' : 'home-outline'}
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            initialParams={{
              username: '이성훈',
            }}
            options={{
              tabBarIcon: ({ color, focused, size }) => {
                return (
                  <Icon
                    name={focused ? 'people' : 'people-outline'}
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
