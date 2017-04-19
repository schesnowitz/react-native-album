
//import library to assist with creation of Component

import React from 'react';
import { Text, AppRegistry } from 'react-native';
// create the Component
  const App = () => (
      <Text>This is in a text tag</Text>
    );

// send it to the device     albums is the name of the app and App is our Component  "const App"
AppRegistry.registerComponent('albums', () => App);
