import React from 'react';
import {Button, View} from 'react-native';
import {useAuthFunctions} from '../auth/hooks';

export const LoginScreen = () => {
  const {onLogin} = useAuthFunctions();
  return (
    <View>
      <Button title="Login" onPress={onLogin} />
    </View>
  );
};
