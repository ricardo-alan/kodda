import React from 'react';
import {StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AppNavigation} from './src/navigation/AppNavigation';
import {Auth0Provider} from 'react-native-auth0';
import {auth0config} from './src/auth/config';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Auth0Provider {...auth0config}>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <AppNavigation />
      </QueryClientProvider>
    </Auth0Provider>
  );
};

export default App;
