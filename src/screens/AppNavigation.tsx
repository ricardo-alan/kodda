import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UsersSecreen} from './';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Users"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Users" component={UsersSecreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
