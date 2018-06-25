import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeComponent from './src/home';
import ProfileComponent from './src/profile';

const App = createStackNavigator({
  Home: {
    screen: HomeComponent
  },
  Profile: {
    screen: ProfileComponent
    },
});

export default App;
