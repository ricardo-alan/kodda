import React from 'react';
import {useAuthFunctions} from '../auth/hooks';
import {PressableIcon} from '../common/components/molecules';

export const HeaderLogout = () => {
  const {onLogout} = useAuthFunctions();
  return <PressableIcon name="logout" onPress={onLogout} />;
};
