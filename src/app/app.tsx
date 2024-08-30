import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import ContactsScreen from '../screens/contactsScreen';
import ContactDetailScreen from '../screens/contactDetailScreen';
import { RootStackParamList } from '../types'; 

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{ headerShown: true, title: 'Contacts' }}
        />
        <Stack.Screen
          name="ContactDetail"
          component={ContactDetailScreen}
          options={{ headerShown: true, title: 'Contact Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
