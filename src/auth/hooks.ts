import {useAuth0} from 'react-native-auth0';

export const useUserLogged = () => {
  const {user} = useAuth0();
  return Boolean(user);
};

export const useAuthFunctions = () => {
  const {authorize, clearSession} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize({});
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  return {
    onLogin,
    onLogout,
  };
};
