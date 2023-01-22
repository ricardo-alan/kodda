import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AppNavigation} from './src/screens/AppNavigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <AppNavigation />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
