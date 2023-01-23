import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAuthFunctions} from '../auth/hooks';
import {MonsterAnimation, RoundButton, Text} from '../common/components/atoms';
import {colors} from '../common/theme';

export const LoginScreen = () => {
  const {onLogin} = useAuthFunctions();
  return (
    <View style={styles.container}>
      <View>
        <Text variant="title">¡Bienvenido!</Text>
        <Text variant="body">Por favor, inicia sesión para continuar</Text>
      </View>
      <MonsterAnimation />
      <RoundButton onPress={onLogin} title="Iniciar sesión" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-around',
    padding: 16,
  },
});
