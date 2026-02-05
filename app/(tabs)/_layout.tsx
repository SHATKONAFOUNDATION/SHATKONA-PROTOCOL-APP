import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // This hides the bottom tab bar if the user is on a Web Browser
        tabBarStyle: Platform.OS === 'web' ? { display: 'none' } : { display: 'flex' },
        headerShown: true,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="login" options={{ title: 'Portal' }} />
    </Tabs>
  );
}