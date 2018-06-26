import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import HomeComponent from './src/home';
import ProfileComponent from './src/profile';

const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='Home'
          component={HomeComponent}
          title='Home'
          initial
        />
        <Scene key='profile'
          component={ProfileComponent}
          title='Profile'
        />
      </Scene>
    </Router>
  );
}

export default App;

