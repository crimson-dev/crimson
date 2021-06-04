import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import OurApp from './src';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <OurApp />
    </SafeAreaView>
  );
};

export default App;
