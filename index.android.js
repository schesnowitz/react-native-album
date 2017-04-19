
//import library to assist with creation of Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from 'albums/src/components/header'
// create the Component
  const App = () => (

      <Header headerText={'Sexy Records'}/> 
    );


// send it to the device     albums is the name of the app and App is our Component  "const App"
AppRegistry.registerComponent('albums', () => App);
