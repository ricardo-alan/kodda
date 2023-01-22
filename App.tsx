import React from 'react';
import {StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AppNavigation} from './src/screens/AppNavigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <AppNavigation />
    </QueryClientProvider>
  );
};

export default App;
