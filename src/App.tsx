import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Icon from 'react-native-vector-icons/Ionicons';
import FamilyDangScreen from './screens/FamilyDangScreen';
import HomeNavigator from './screens/HomeScreen';
import LogScreen from './screens/LogScreen';
import MyPageScreen from './screens/MyPage';
import SocialScreen from './screens/SocialScreen';
import { TabBarParamList } from './types/RootStackParamList';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

const queryClient = new QueryClient();
const Tab = createBottomTabNavigator<TabBarParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#783D16',
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Log"
        component={LogScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'calendar' : 'calendar-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Social"
        component={SocialScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'people' : 'people-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FamilyDang"
        component={FamilyDangScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'heart' : 'heart-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isMswReady, setIsMswReady] = useState(false);

  useEffect(() => {
    async function enableMocking() {
      if (__DEV__) {
        const { server } = await import('./mocks/server');
        server.listen({ onUnhandledRequest: 'bypass' });
        console.log('MSW Listening...');
        setIsMswReady(true);
      }
    }

    enableMocking();

    return () => {
      if (__DEV__) {
        const { server } = require('./mocks/server');
        console.log('MSW Closed!');
        server.close();
      }
    };
  }, []);

  if (__DEV__ && !isMswReady) return <Text>Initial Loading...</Text>;

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
