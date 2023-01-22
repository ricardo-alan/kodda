import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, UsersSecreen} from '../screens';
import {useUserLogged} from '../auth/hooks';
import {HeaderLogout} from './HeaderLogout';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  const isUserLogged = useUserLogged();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isUserLogged ? (
          <Stack.Screen
            name="Users"
            component={UsersSecreen}
            options={{
              headerRight: HeaderLogout,
            }}
          />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
