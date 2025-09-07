import MaterialCommunityIcons from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';
export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f5f5f5',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: '#666666'
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='calendar' color={color} size={size} />
        }}
      />
    </Tabs>
  );
}
