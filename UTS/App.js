import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatScreen from './components/ChatScreen';
import ProfileScreen from './components/ProfileScreen';
import SettingsScreen from './components/SettingsScreen';
import HomeScreen from './components/HomeScreen';
import OrderScreen from './components/OrderScreen';
import ChatRoomScreen from './components/ChatRoomScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} options={{ title: 'Profil' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Pengaturan' }} />
    </Stack.Navigator>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatMain" component={ChatScreen} options={{ title: 'Chat' }} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={{ title: 'Ruang Chat' }} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Beranda' }} />
      <Stack.Screen name="Order" component={OrderScreen} options={{ title: 'Form Pemesanan' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name == 'Home') iconName = 'home-outline';
            else if (route.name == 'Chat') iconName = 'chatbox-outline';
            else if (route.name == 'Profile') iconName = 'person-outline';

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2e86de',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Chat" component={ChatStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
